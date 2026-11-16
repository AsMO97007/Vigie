/* =====================================================================
   Vigie — stockage partagé dans un dossier OneDrive / SharePoint
   ---------------------------------------------------------------------
   Principe : chaque poste écrit UNIQUEMENT son propre fichier
   « vigie-<nom>-<poste>.json » dans le dossier partagé. L'application lit
   tous les fichiers vigie-*.json du dossier et les fusionne : pour chaque
   élément, la version la plus récente l'emporte. Comme personne n'écrit
   dans le fichier d'un autre, OneDrive ne crée pas de copies en conflit.
   ===================================================================== */
(function(){
"use strict";
const FORMAT = 1;
const COLLECTIONS = ["risques","controles","tests","actions","taches","equipe","exigences","actualites"];
const POLL_MS = 15000;
const LS_ID = "vigie.identite";
const FICHIER = /^vigie-.+\.json$/i;

/* ---------- utilitaires ---------- */
const ls = {
  get(k,d){ try{ const v=localStorage.getItem(k); return v==null?d:JSON.parse(v); }catch(_){ return d; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(_){} }
};
function idb(){ return new Promise((res,rej)=>{ const r=indexedDB.open("vigie",1); r.onupgradeneeded=()=>r.result.createObjectStore("kv"); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }); }
async function idbGet(k){ try{ const d=await idb(); return await new Promise((res,rej)=>{ const q=d.transaction("kv").objectStore("kv").get(k); q.onsuccess=()=>res(q.result); q.onerror=()=>rej(q.error); }); }catch(_){ return undefined; } }
async function idbSet(k,v){ try{ const d=await idb(); await new Promise((res,rej)=>{ const t=d.transaction("kv","readwrite"); t.objectStore("kv").put(v,k); t.oncomplete=res; t.onerror=()=>rej(t.error); }); }catch(_){} }
const slug = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40) || "utilisateur";
const nowIso = () => new Date().toISOString();
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pluriel = (n,s,p) => n>1 ? (p||s+"s") : s;
function depuis(d){ if(!d) return "jamais"; const s=Math.round((Date.now()-d.getTime())/1000); if(s<10) return "à l'instant"; if(s<60) return `il y a ${s} s`; const m=Math.round(s/60); if(m<60) return `il y a ${m} min`; return d.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}); }
function dateCourte(iso){ if(!iso) return "—"; const d=new Date(iso); return isNaN(d)?"—":d.toLocaleString("fr-FR",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}); }

/* ---------- état ---------- */
let ident = ls.get(LS_ID, null);          // {nom, fonction, poste}
let dir = null, demo = false, pret = false;
const fichiers = new Map();               // nom -> {lm, size, data} (fichiers des collègues)
let mien = null;                          // contenu de mon propre fichier
const fusion = {}; COLLECTIONS.forEach(c=>fusion[c]=new Map());
const ecouteurs = {};
let derniereSync = null, erreur = "", ecriture = Promise.resolve(), minuterie = 0, modifie = false;

const monFichier = () => `vigie-${slug(ident.nom)}-${ident.poste}.json`;
const vide = () => ({app:"vigie", format:FORMAT, auteur:ident?.nom||"", fonction:ident?.fonction||"", poste:ident?.poste||"", modifie:nowIso(), elements:{}, supprimes:{}});

/* ---------- fusion ---------- */
function refusionner(){
  const best = {}; COLLECTIONS.forEach(c=>best[c]=new Map());
  const tombes = new Map();
  const sources = [mien, ...[...fichiers.values()].map(f=>f.data)].filter(Boolean);
  for(const s of sources){
    for(const c of COLLECTIONS){
      const el = s.elements && s.elements[c]; if(!el || typeof el!=="object") continue;
      for(const id of Object.keys(el)){ const r=el[id]; if(!r || typeof r!=="object") continue;
        const cur = best[c].get(id);
        if(!cur || String(r.modifieLe||"") > String(cur.modifieLe||"")) best[c].set(id, r); }
    }
    for(const [k,t] of Object.entries(s.supprimes||{})){ if(!tombes.has(k) || String(t) > tombes.get(k)) tombes.set(k, String(t)); }
  }
  for(const c of COLLECTIONS){ fusion[c] = new Map([...best[c]].filter(([id,r]) => { const t=tombes.get(c+":"+id); return !(t && t >= String(r.modifieLe||"")); })); }
}
function instantane(c){ return {docs:[...fusion[c].entries()].map(([id,r])=>({id, data:()=>r}))}; }
function diffuser(cols){ (cols||COLLECTIONS).forEach(c=>(ecouteurs[c]||[]).forEach(cb=>{ try{ cb(instantane(c)); }catch(e){ console.error(e); } })); }

/* ---------- lecture du dossier ---------- */
async function lireMien(){
  try{ const h=await dir.getFileHandle(monFichier()); const f=await h.getFile(); const d=JSON.parse(await f.text());
    mien = (d && d.app==="vigie" && typeof d.elements==="object") ? {...vide(), ...d} : vide(); }
  catch(_){ mien = vide(); }
}
async function scanner(){
  if(!dir) return {change:false, auteurs:[]};
  let change=false; const vus=new Set(), auteurs=new Set();
  try{
    for await (const [nom, h] of dir.entries()){
      if(h.kind!=="file" || !FICHIER.test(nom) || nom===monFichier()) continue;
      vus.add(nom);
      try{
        const f=await h.getFile(); const prec=fichiers.get(nom);
        if(prec && prec.lm===f.lastModified && prec.size===f.size) continue;
        const data=JSON.parse(await f.text());
        if(!data || data.app!=="vigie" || typeof data.elements!=="object") continue;
        fichiers.set(nom,{lm:f.lastModified, size:f.size, data}); change=true; if(prec || pret) auteurs.add(data.auteur||nom);
      }catch(_){ /* fichier en cours de synchronisation par OneDrive : nouvel essai au prochain passage */ }
    }
    for(const k of [...fichiers.keys()]) if(!vus.has(k)){ fichiers.delete(k); change=true; }
    erreur=""; derniereSync=new Date();
  }catch(e){ erreur="lecture"; }
  return {change, auteurs:[...auteurs]};
}
async function synchroniser(manuel){
  if(demo || !dir) return;
  const r = await scanner();
  if(r.change){ refusionner(); diffuser(); if(r.auteurs.length && pret) notifier(`Mise à jour reçue de ${r.auteurs.join(", ")}`); }
  majStatut();
  if(manuel) notifier(erreur ? "Le dossier partagé est inaccessible. Vérifiez la synchronisation OneDrive." : "Données à jour");
}

/* ---------- écriture de mon fichier ---------- */
function planifierEcriture(){ if(demo) return; modifie=true; clearTimeout(minuterie); minuterie=setTimeout(vider, 700); majStatut(); }
function vider(){
  if(!modifie || !dir || demo) return ecriture;
  modifie=false; mien.modifie=nowIso(); mien.auteur=ident.nom; mien.fonction=ident.fonction||""; mien.poste=ident.poste;
  const corps = JSON.stringify(mien, null, 1);
  ecriture = ecriture.then(async()=>{
    const h=await dir.getFileHandle(monFichier(), {create:true});
    const w=await h.createWritable(); await w.write(corps); await w.close();
    erreur=""; derniereSync=new Date(); majStatut();
  }).catch(()=>{ modifie=true; erreur="ecriture"; majStatut(); notifier("Enregistrement impossible dans le dossier partagé. Cliquez sur l'état de synchronisation pour reconnecter le dossier."); });
  return ecriture;
}
window.addEventListener("beforeunload", e=>{ if(modifie && !demo){ vider(); e.preventDefault(); e.returnValue=""; } });

function ecrire(c, id, rec){
  const r = {...rec, modifieLe:nowIso(), modifiePar:ident?.nom||""}; delete r.id;
  (mien.elements[c] = mien.elements[c] || {})[id] = r;
  delete mien.supprimes[c+":"+id];
  refusionner(); diffuser([c]); planifierEcriture();
}
function supprimer(c, id){
  mien.supprimes[c+":"+id] = nowIso();
  if(mien.elements[c]) delete mien.elements[c][id];
  refusionner(); diffuser([c]); planifierEcriture();
}

/* ---------- interface type base de données utilisée par l'application ---------- */
const perso = { doc(nom){ const k="vigie.perso."+nom; return {
  set: async v => ls.set(k, v),
  onSnapshot(cb){ const v=ls.get(k,null); setTimeout(()=>cb({exists:v!=null, data:()=>v, metadata:{hasPendingWrites:false}}),0); return ()=>{}; }
}; } };
const db = {
  collection(chemin){
    if(String(chemin).startsWith("data/users/")) return perso;
    const c = chemin;
    return {
      onSnapshot(cb){ (ecouteurs[c]=ecouteurs[c]||[]).push(cb); setTimeout(()=>cb(instantane(c)),0); return ()=>{ ecouteurs[c]=(ecouteurs[c]||[]).filter(x=>x!==cb); }; },
      doc(id){ const _id = id || newId(); return {
        id:_id,
        set: async d => ecrire(c, _id, d),
        update: async p => { const b=fusion[c].get(_id); if(!b) throw {code:"not_found"}; ecrire(c, _id, {...b, ...p}); },
        delete: async () => supprimer(c, _id),
      }; }
    };
  }
};

/* ---------- import / export ---------- */
function telecharger(nom, contenu, type){
  const blob = contenu instanceof Blob ? contenu : new Blob([contenu], {type: type || (nom.endsWith(".json")?"application/json":"text/csv;charset=utf-8")});
  const url = URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=nom; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url), 2000);
}
function exporter(){
  const collections={}; COLLECTIONS.forEach(c=>collections[c]=Object.fromEntries(fusion[c]));
  const d=new Date(); const j=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  telecharger(`sauvegarde-vigie-${j}.json`, JSON.stringify({app:"vigie", type:"sauvegarde", format:FORMAT, exporte:nowIso(), par:ident?.nom||"", collections}, null, 1));
}
function importerDonnees(data){
  let src = null;
  if(data && data.collections && typeof data.collections==="object") src = data.collections;
  else if(data && data.elements && typeof data.elements==="object") src = data.elements;
  if(!src) throw new Error("format");
  let n=0; const t=nowIso();
  for(const c of COLLECTIONS){ const el=src[c]; if(!el || typeof el!=="object") continue;
    for(const [id, r] of Object.entries(el)){ if(!r || typeof r!=="object") continue; const rec={...r}; delete rec.id;
      rec.modifieLe = rec.modifieLe || t; rec.modifiePar = rec.modifiePar || ident?.nom || "";
      (mien.elements[c]=mien.elements[c]||{})[id]=rec; delete mien.supprimes[c+":"+id]; n++; } }
  refusionner(); diffuser(); planifierEcriture(); return n;
}
function choisirFichierJson(){
  return new Promise(res=>{ const i=document.createElement("input"); i.type="file"; i.accept=".json,application/json";
    i.onchange=async()=>{ const f=i.files&&i.files[0]; if(!f){ res(null); return; } try{ res(JSON.parse(await f.text())); }catch(_){ res({erreur:true}); } };
    i.click(); });
}

/* ---------- notifications et état ---------- */
function notifier(msg){ const h=document.getElementById("toastHost"); if(!h) return; h.innerHTML=`<div class="toast" role="status">${esc(msg)}</div>`; clearTimeout(notifier.t); notifier.t=setTimeout(()=>h.innerHTML="",3200); }
function contributeurs(){
  const m=new Map(); if(mien && ident) m.set(ident.nom, {nom:ident.nom, fonction:ident.fonction, modifie:mien.modifie, moi:true});
  for(const f of fichiers.values()){ const a=f.data.auteur||"Inconnu"; const p=m.get(a); if(!p || String(f.data.modifie)>String(p.modifie)) m.set(a, {nom:a, fonction:f.data.fonction||"", modifie:f.data.modifie, moi:p?.moi}); }
  return [...m.values()].sort((a,b)=>String(b.modifie).localeCompare(String(a.modifie)));
}
function statutHtml(){
  if(demo) return `<button class="saved stk-btn" data-stockage="panneau"><span class="l1"><span class="status-dot off"></span>Mode démonstration</span><small>Non enregistré · cliquez pour connecter un dossier</small></button>`;
  if(!pret) return `<div class="saved">Connexion au dossier…</div>`;
  const n=contributeurs().length;
  const etat = erreur ? `<span class="status-dot err"></span>Dossier inaccessible` : modifie ? `<span class="status-dot off"></span>Enregistrement…` : `<span class="status-dot"></span>Synchronisé ${depuis(derniereSync)}`;
  return `<button class="saved stk-btn" data-stockage="panneau" title="Dossier partagé : ${esc(dir?.name||"")}"><span class="l1">${etat}</span><small>${esc(dir?.name||"")} · ${n} ${pluriel(n,"contributeur")}</small></button>`;
}
function majStatut(){ document.querySelectorAll('[data-stockage="panneau"]').forEach(b=>{ const t=document.createElement("div"); t.innerHTML=statutHtml(); b.replaceWith(t.firstElementChild); }); }
setInterval(()=>{ if(!document.hidden) majStatut(); }, 10000);

/* ---------- écrans de mise en route ---------- */
const LOGO = `<svg width="44" height="44" viewBox="0 0 38 38" aria-hidden="true"><rect width="38" height="38" rx="11" fill="#003865"/><path d="M5.5 19c3.4-5.6 8-8.4 13.5-8.4S29.1 13.4 32.5 19c-3.4 5.6-8 8.4-13.5 8.4S8.9 24.6 5.5 19z" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><circle cx="19" cy="19" r="5.6" fill="#0088CE"/><path d="M16.4 19.1l1.8 1.8 3.4-3.6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const DOSSIER = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`;
const supporte = () => typeof window.showDirectoryPicker === "function";
let ecran = null;
function afficher(html){
  if(!ecran){ ecran=document.createElement("div"); ecran.className="setup"; ecran.setAttribute("role","dialog"); ecran.setAttribute("aria-modal","true"); document.body.appendChild(ecran); }
  ecran.innerHTML = `<div class="setup-card"><div class="setup-brand">${LOGO}<span>Vigie<small>Contrôle interne</small></span></div>${html}</div>`;
  const f = ecran.querySelector("input,button.primary"); if(f) setTimeout(()=>f.focus(), 30);
}
function fermerEcran(){ if(ecran){ ecran.remove(); ecran=null; const g=document.getElementById("wGo"); if(g && g.isConnected) g.focus({preventScroll:true}); } }

function etapeIdentite(){
  return new Promise(res=>{
    afficher(`<div class="setup-step">Étape 1 sur 2</div><h1>Bienvenue dans Vigie</h1>
      <p>Votre nom apparaîtra auprès de vos collègues à côté de chaque modification que vous enregistrez.</p>
      <form class="setup-form" id="stkId" novalidate>
        <label for="stkNom">Nom et prénom</label><input id="stkNom" type="text" autocomplete="name" placeholder="ex. Claire Martin" required>
        <label for="stkFct">Fonction</label><input id="stkFct" type="text" autocomplete="organization-title" placeholder="ex. Contrôleur interne">
        <p class="setup-err" id="stkErr" hidden>Indiquez votre nom pour continuer.</p>
        <button class="btn primary big" type="submit">Continuer</button></form>`);
    ecran.querySelector("#stkId").addEventListener("submit", e=>{ e.preventDefault();
      const nom=ecran.querySelector("#stkNom").value.trim(), fonction=ecran.querySelector("#stkFct").value.trim();
      if(!nom){ ecran.querySelector("#stkErr").hidden=false; return; }
      ident={nom, fonction, poste:Math.random().toString(36).slice(2,6)}; ls.set(LS_ID, ident); res(); });
  });
}
function etapeDossier(handleConnu, premiere){
  return new Promise(res=>{
    const choisir = async () => {
      try{ const h = await window.showDirectoryPicker({id:"vigie", mode:"readwrite", startIn:"documents"}); await idbSet("dossier", h); dir=h; res("ok"); }
      catch(e){ if(e && e.name==="AbortError") return; const m=ecran.querySelector("#stkMsg"); if(m){ m.hidden=false; m.textContent="Ce dossier n'est pas accessible en écriture. Choisissez un dossier synchronisé par OneDrive sur votre ordinateur."; } }
    };
    const reprendre = async () => {
      try{ const p = await handleConnu.requestPermission({mode:"readwrite"}); if(p==="granted"){ dir=handleConnu; res("ok"); return; } }catch(_){}
      const m=ecran.querySelector("#stkMsg"); if(m){ m.hidden=false; m.textContent="L'accès n'a pas été accordé. Réessayez ou choisissez le dossier à nouveau."; }
    };
    if(!supporte()){
      afficher(`<div class="setup-step">Navigateur non compatible</div><h1>Ouvrez Vigie avec Edge ou Chrome</h1>
        <p>Pour enregistrer vos données dans le dossier partagé, Vigie a besoin de Microsoft Edge ou de Google Chrome sur ordinateur. Firefox et Safari ne permettent pas encore à une application web d'écrire dans un dossier.</p>
        <div class="setup-actions"><button class="btn" data-x="demo">Découvrir en mode démonstration</button></div>`);
      ecran.querySelector('[data-x="demo"]').onclick=()=>res("demo"); return;
    }
    afficher(`<div class="setup-step">${premiere?"Étape 2 sur 2":"Dossier partagé"}</div><h1>${handleConnu?"Reconnecter le dossier partagé":"Choisissez le dossier partagé"}</h1>
      ${handleConnu
        ? `<p>Pour des raisons de sécurité, le navigateur vous demande de confirmer l'accès au dossier <b>${esc(handleConnu.name)}</b> à chaque ouverture.</p>
           <div class="setup-actions"><button class="btn primary big" data-x="reprendre">${DOSSIER}Autoriser l'accès à « ${esc(handleConnu.name)} »</button><button class="btn" data-x="choisir">Choisir un autre dossier</button></div>`
        : `<p>Sélectionnez le dossier SharePoint de l'équipe tel qu'il apparaît dans l'Explorateur, sous <b>OneDrive - <i>votre entreprise</i></b>. Tous les collègues doivent choisir le même dossier.</p>
           <ol class="setup-list"><li>Dans SharePoint, ouvrez la bibliothèque de l'équipe et cliquez sur <b>Ajouter un raccourci à Mes fichiers</b>.</li><li>Ici, cliquez sur <b>Choisir le dossier</b> et sélectionnez ce dossier dans OneDrive.</li><li>Acceptez l'autorisation de modification demandée par le navigateur.</li></ol>
           <div class="setup-actions"><button class="btn primary big" data-x="choisir">${DOSSIER}Choisir le dossier</button><button class="btn" data-x="demo">Découvrir en mode démonstration</button></div>`}
      <p class="setup-err" id="stkMsg" hidden></p>`);
    ecran.querySelector('[data-x="choisir"]').onclick=choisir;
    const r=ecran.querySelector('[data-x="reprendre"]'); if(r) r.onclick=reprendre;
    const d=ecran.querySelector('[data-x="demo"]'); if(d) d.onclick=()=>res("demo");
  });
}
function etapeContenu(){
  return new Promise(res=>{
    afficher(`<div class="setup-step">Dossier « ${esc(dir.name)} » connecté</div><h1>Ce dossier est encore vide</h1>
      <p>Vous êtes la première personne de l'équipe à l'utiliser. Par quoi voulez-vous commencer ?</p>
      <div class="setup-choices">
        <button class="setup-choice" data-x="depart"><b>Données de départ</b><span>Exigences réglementaires (Sapin II, RGPD…), veille avec son plan d'action, et un exemple de dispositif complet sur une entreprise fictive, facile à effacer ensuite.</span></button>
        <button class="setup-choice" data-x="import"><b>Importer une sauvegarde</b><span>Un fichier « sauvegarde-vigie-….json » exporté depuis Vigie.</span></button>
        <button class="setup-choice" data-x="vide"><b>Partir de zéro</b><span>Un dispositif vide, à construire vous-même.</span></button>
      </div><p class="setup-err" id="stkMsg" hidden></p>`);
    ecran.querySelector('[data-x="depart"]').onclick=()=>{ if(window.VIGIE_DEPART) importerDonnees(window.VIGIE_DEPART); res(); };
    ecran.querySelector('[data-x="vide"]').onclick=()=>{ planifierEcriture(); res(); };
    ecran.querySelector('[data-x="import"]').onclick=async()=>{ const d=await choisirFichierJson(); if(!d) return;
      try{ const n=importerDonnees(d); notifier(`${n} éléments importés`); res(); }
      catch(_){ const m=ecran.querySelector("#stkMsg"); m.hidden=false; m.textContent="Ce fichier n'est pas une sauvegarde Vigie lisible."; } };
  });
}

/* ---------- panneau « Dossier partagé » ---------- */
function ouvrirPanneau(){
  const host=document.getElementById("overlayHost"); if(!host) return;
  const C=contributeurs();
  host.innerHTML = `<div class="scrim" data-stk-close style="z-index:50"></div><div class="stk-panel" role="dialog" aria-modal="true" aria-labelledby="stkT">
    <div class="stk-head"><div><div class="eyebrow">${demo?"Mode démonstration":"Dossier partagé"}</div><h2 id="stkT">${demo?"Aucun dossier connecté":esc(dir?.name||"")}</h2></div><button class="btn ghost" data-stk-close aria-label="Fermer">✕</button></div>
    ${demo?`<p>Vos saisies restent dans cette fenêtre et seront perdues à sa fermeture. Connectez le dossier partagé de l'équipe pour les enregistrer.</p>`
    :`<p class="sub" style="font-size:13.5px">${erreur?'<b style="color:var(--crit)">Le dossier est inaccessible.</b> Vérifiez que OneDrive est démarré et synchronisé, puis reconnectez le dossier.':`Dernière synchronisation ${depuis(derniereSync)}. Vigie relit le dossier toutes les 15 secondes et à chaque retour sur la fenêtre.`}</p>
      <h3>Contributeurs</h3><div class="stk-people">${C.map(p=>`<div><b>${esc(p.nom)}${p.moi?" (vous)":""}</b><span>${esc(p.fonction||"")}</span><small>Dernière modification : ${dateCourte(p.modifie)}</small></div>`).join("")}</div>
      <p class="sub">Votre fichier : <code>${esc(monFichier())}</code></p>`}
    <div class="stk-actions">
      ${demo?`<button class="btn primary" data-stk="connecter">Connecter un dossier</button>`:`<button class="btn primary" data-stk="sync">Synchroniser maintenant</button>`}
      <button class="btn" data-stk="export">Exporter une sauvegarde</button>
      <button class="btn" data-stk="import">Importer une sauvegarde</button>
      ${demo?"":`<button class="btn" data-stk="changer">Changer de dossier</button>`}
    </div></div>`;
}
document.addEventListener("click", async e=>{
  const t=e.target;
  if(t.closest("[data-stockage]")){ e.stopPropagation(); ouvrirPanneau(); return; }
  if(t.closest("[data-stk-close]")){ document.getElementById("overlayHost").innerHTML=""; return; }
  const a=t.closest("[data-stk]"); if(!a) return;
  const x=a.dataset.stk; document.getElementById("overlayHost").innerHTML="";
  if(x==="sync") synchroniser(true);
  if(x==="export") exporter();
  if(x==="import"){ const d=await choisirFichierJson(); if(!d) return; try{ const n=importerDonnees(d); notifier(`${n} éléments importés`); }catch(_){ notifier("Ce fichier n'est pas une sauvegarde Vigie lisible."); } }
  if(x==="changer" || x==="connecter"){ await vider(); const ok = await etapeDossier(null, false); if(ok==="ok"){ demo=false; await brancher(); fermerEcran(); notifier(`Dossier « ${dir.name} » connecté`); } else fermerEcran(); }
}, true);

function estVide(){ return !fichiers.size && !COLLECTIONS.some(c=>mien.elements[c] && Object.keys(mien.elements[c]).length); }
let ecoute=false;
function ecouter(){ if(ecoute) return; ecoute=true;
  setInterval(()=>{ if(!document.hidden) synchroniser(); }, POLL_MS);
  document.addEventListener("visibilitychange", ()=>{ if(!document.hidden) synchroniser(); });
  window.addEventListener("focus", ()=>synchroniser()); }
async function brancher(){
  fichiers.clear(); erreur=""; await lireMien(); await scanner(); refusionner();
  if(estVide()) await etapeContenu();
  pret=true; diffuser(); majStatut(); ecouter();
}

/* ---------- démarrage ---------- */
async function demarrer(){
  if(!ident) await etapeIdentite();
  let choix = "ok";
  const connu = supporte() ? await idbGet("dossier") : null;
  if(connu){
    let p = "granted";
    try{ if(typeof connu.queryPermission==="function") p = await connu.queryPermission({mode:"readwrite"}); }catch(_){ p="prompt"; }
    if(p==="granted") dir = connu; else choix = await etapeDossier(connu, false);
  } else choix = await etapeDossier(null, true);
  if(choix==="demo"){ demo=true; mien=vide(); if(window.VIGIE_DEPART) importerDonnees(window.VIGIE_DEPART); pret=true; fermerEcran(); diffuser(); majStatut(); return {db, identite:ident}; }
  await brancher(); fermerEcran();
  return {db, identite:ident};
}

window.Stockage = { demarrer, statutHtml, synchroniser, ouvrirPanneau, telecharger, exporter, estDemo:()=>demo, identite:()=>ident };
})();
