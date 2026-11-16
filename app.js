/* Vigie — application de pilotage du contrôle interne (version locale) */
(() => {
"use strict";
/* =========================================================
   Pictogrammes (blanc sur tuile en dégradé)
   ========================================================= */
const SF = 'fill="currentColor" fill-opacity=".28" stroke="none"';
const ICON = {
  aujourdhui:`<path d="M4 17a8 8 0 0116 0z" ${SF}/><path d="M4 17a8 8 0 0116 0"/><path d="M2 20.5h20M12 3.5v2.2M4.6 7.6l1.6 1.6M19.4 7.6l-1.6 1.6"/>`,
  tableau:`<path d="M3 16a9 9 0 0118 0z" ${SF}/><path d="M3 16a9 9 0 0118 0"/><path d="M12 16l4.2-4.6"/><circle cx="12" cy="16" r="1.7" fill="currentColor"/><path d="M3 20h18"/>`,
  conformite:`<circle cx="12" cy="9.5" r="6.5" ${SF}/><circle cx="12" cy="9.5" r="6.5"/><path d="M8.6 15l-1.6 6.5 5-2.6 5 2.6-1.6-6.5"/><path d="M9.3 9.6l1.9 1.9 3.5-3.6"/>`,
  risques:`<path d="M12 2.8l9.2 9.2-9.2 9.2L2.8 12z" ${SF}/><path d="M12 2.8l9.2 9.2-9.2 9.2L2.8 12z"/><path d="M12 8v5"/><circle cx="12" cy="16.1" r="1" fill="currentColor"/>`,
  controles:`<path d="M12 2.5l7.5 3v6c0 4.7-3.2 8.6-7.5 10-4.3-1.4-7.5-5.3-7.5-10v-6z" ${SF}/><path d="M12 2.5l7.5 3v6c0 4.7-3.2 8.6-7.5 10-4.3-1.4-7.5-5.3-7.5-10v-6z"/><path d="M8.6 12l2.4 2.4 4.4-4.8"/>`,
  tests:`<path d="M9 3h6M10 3v5.5L4.8 18a2 2 0 001.8 3h10.8a2 2 0 001.8-3L14 8.5V3"/><path d="M7 14.5h10l2.4 4.2a1.6 1.6 0 01-1.4 2.3H6a1.6 1.6 0 01-1.4-2.3z" ${SF}/><circle cx="10.5" cy="17" r=".9" fill="currentColor"/><circle cx="13.8" cy="15.6" r=".7" fill="currentColor"/>`,
  actions:`<path d="M5 4h12.5l-2.5 4.5 2.5 4.5H5z" ${SF}/><path d="M5 21.5V3.5"/><path d="M5 4h12.5l-2.5 4.5 2.5 4.5H5"/>`,
  taches:`<rect x="3.5" y="3.5" width="17" height="17" rx="4" ${SF}/><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M7.5 9l1.5 1.5 2.5-2.7M7.5 15l1.5 1.5 2.5-2.7M14 9.2h3M14 15.2h3"/>`,
  equipe:`<circle cx="12" cy="5.5" r="2.6" ${SF}/><circle cx="12" cy="5.5" r="2.6"/><circle cx="5" cy="18" r="2.6"/><circle cx="19" cy="18" r="2.6"/><path d="M12 8.1v4.4M5 15.4v-2.9h14v2.9"/>`,
  formations:`<path d="M12 4l10 5-10 5L2 9z" ${SF}/><path d="M12 4l10 5-10 5L2 9z"/><path d="M6 11.2V16c0 1.6 2.7 3.2 6 3.2s6-1.6 6-3.2v-4.8"/><path d="M22 9v6"/>`,
  actualites:`<rect x="3" y="4" width="14.5" height="16" rx="2" ${SF}/><path d="M17.5 8H20a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h10.5a2 2 0 012 2v12a2 2 0 002 2"/><path d="M6.5 8h7.5M6.5 11.5h7.5M6.5 15h4.5"/>`,
};
const CAT_ICON = {
  "Stratégique":`<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor" fill-opacity=".3"/>`,
  "Opérationnel":`<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M5.5 18.5l1.9-1.9M16.6 7.4l1.9-1.9"/><circle cx="12" cy="12" r="6.6"/>`,
  "Financier et comptable":`<ellipse cx="12" cy="6.5" rx="7.5" ry="2.8"/><path d="M4.5 6.5v5.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6.5"/><path d="M4.5 12v5.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12"/>`,
  "Fraude et corruption":`<path d="M15 2.5v11a5 5 0 01-10 0v-1.5l3 2.5"/><circle cx="15" cy="2.8" r="1" fill="currentColor"/><path d="M19 9l2-2"/>`,
  "Conformité et juridique":`<path d="M12 3v17M7.5 20.5h9M5 7h14"/><path d="M5 7l-2.6 6a2.6 2.6 0 005.2 0zM19 7l-2.6 6a2.6 2.6 0 005.2 0z"/>`,
  "Systèmes d'information et cyber":`<rect x="4.5" y="10" width="15" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/><path d="M12 14.2v2.6"/>`,
  "Ressources humaines":`<circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c.8-3.6 3.4-5.6 6.5-5.6s5.7 2 6.5 5.6"/><circle cx="17.2" cy="9" r="2.5"/><path d="M17.2 14.4c2.3 0 3.9 1.5 4.4 4"/>`,
  "RSE et environnement":`<path d="M5 19.5C5 10.5 11 5 20 4.5c0 9-5.5 15-14.5 15"/><path d="M5 19.5l7.5-7.5"/>`,
  "Non classé":`<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 114 2c-1 .6-1.6 1.2-1.6 2.3M12 17v.3"/>`,
};
const svg = (inner, s=18, sw=1.9) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const tile = (id, cls="") => `<span class="tile g-${id} ${cls}">${svg(ICON[id], cls.includes("xl")?30:cls.includes("lg")?25:cls.includes("sm")?14:17, 2)}</span>`;
const plus = svg('<path d="M12 5v14M5 12h14"/>',16,2.2);
const CHECK = svg('<path d="M5 12.5l4.2 4.2L19 7"/>',14,3);

/* =========================================================
   Référentiels
   ========================================================= */
const PROCESSUS = ["Direction générale","Achats","Ventes","Trésorerie","Paie & RH","Stocks","Production","Immobilisations","Clôture comptable","Systèmes d'information","Conformité & juridique","RSE"];
const CATEGORIES = ["Stratégique","Opérationnel","Financier et comptable","Fraude et corruption","Conformité et juridique","Systèmes d'information et cyber","Ressources humaines","RSE et environnement"];
const PROBA = ["Rare","Peu probable","Possible","Probable","Quasi certain"];
const IMPACT = ["Mineur","Modéré","Significatif","Majeur","Critique"];
const REFERENTIELS = ["Loi Sapin II","RGPD","Lanceurs d'alerte","Sécurité des SI","Contrôle interne financier","Fraude aux paiements","Autre"];
const THEMES = ["Référentiels","Réglementation","Fraude","Cyber et SI","RSE et durabilité","IA"];
const LIGNES = ["Gouvernance","Direction générale","1re ligne","2e ligne","3e ligne","Externe"];
const ROLES = ["Comité d'audit","Direction générale","Propriétaire de risques","Responsable de contrôles","Correspondant contrôle interne","Contrôleur interne","Auditeur interne","Commissaire aux comptes"];
const PRIOS = ["Urgente","Haute","Normale","Basse"];
const PRIO_CLS = {"Urgente":"prio-u","Haute":"prio-h","Normale":"prio-n","Basse":"prio-b"};
const TSTAT = ["À faire","En cours","Terminée"];
const now = new Date();
const TODAY = new Date(now); TODAY.setHours(0,0,0,0);
const YEAR = TODAY.getFullYear();
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const TODAY_ISO = iso(TODAY);
const addDays = (n) => { const d=new Date(TODAY); d.setDate(d.getDate()+n); return iso(d); };
const IN7 = addDays(7), IN2 = addDays(2);

function level(s){ if(!s) return null; if(s>=15) return {n:"Critique",c:4,p:"p-crit"}; if(s>=10) return {n:"Élevé",c:3,p:"p-high"}; if(s>=5) return {n:"Modéré",c:2,p:"p-warn"}; return {n:"Faible",c:1,p:"p-ok"}; }
const RESULT_PILL = {"Efficace":"p-ok","Partiellement efficace":"p-warn","Inefficace":"p-crit","Planifié":"p-neutral","En cours":"p-accent"};
const GRAV_PILL = {"Faible":"p-ok","Modérée":"p-warn","Élevée":"p-high","Critique":"p-crit"};
const STATUT_PILL = {"À lancer":"p-neutral","En cours":"p-accent","Réalisé":"p-ok","Clôturé":"p-ok","Abandonné":"p-neutral"};
const EXI_STATUTS = [["Conforme","s-c","Conforme"],["Partiellement conforme","s-p","Partiel"],["Non conforme","s-n","Non conforme"],["Non applicable","s-x","N/A"]];
const EXI_PILL = {"Conforme":"p-ok","Partiellement conforme":"p-warn","Non conforme":"p-crit","Non applicable":"p-neutral","À évaluer":"p-neutral"};

const SCHEMA = {
  risques:{ sing:"risque", prefix:"R", title:"Cartographie des risques", view:"risques", fields:[
    {k:"titre",l:"Intitulé du risque",t:"text",req:1,ph:"Risque de … dû à … entraînant …"},
    {k:"categorie",l:"Catégorie",t:"select",o:CATEGORIES,req:1,half:1},
    {k:"processus",l:"Processus",t:"select",o:PROCESSUS,req:1,half:1},
    {k:"proprietaire",l:"Propriétaire du risque",t:"person",half:1},
    {k:"traitement",l:"Stratégie de traitement",t:"select",o:["Réduire","Accepter","Transférer","Éviter"],half:1},
    {k:"description",l:"Description : causes et conséquences",t:"textarea"},
    {sec:"Évaluation inhérente (avant contrôles)"},
    {k:"proba",l:"Probabilité",t:"scale",o:PROBA,req:1},
    {k:"impact",l:"Impact",t:"scale",o:IMPACT,req:1},
    {sec:"Évaluation résiduelle (après contrôles)"},
    {k:"probaR",l:"Probabilité résiduelle",t:"scale",o:PROBA},
    {k:"impactR",l:"Impact résiduel",t:"scale",o:IMPACT},
  ]},
  controles:{ sing:"contrôle", prefix:"CT", title:"Référentiel de contrôles", view:"controles", fields:[
    {k:"titre",l:"Intitulé du contrôle",t:"text",req:1},
    {k:"risqueId",l:"Risque couvert",t:"ref",ref:"risques",req:1},
    {k:"description",l:"Description : qui, quoi, quand, comment, preuve, traitement des anomalies",t:"textarea"},
    {k:"type",l:"Type",t:"select",o:["Préventif","Détectif","Correctif"],half:1,req:1},
    {k:"nature",l:"Nature",t:"select",o:["Manuel","Automatique","Semi-automatique"],half:1,req:1},
    {k:"frequence",l:"Fréquence",t:"select",o:["À chaque opération","Quotidienne","Hebdomadaire","Mensuelle","Trimestrielle","Semestrielle","Annuelle"],half:1,req:1},
    {k:"proprietaire",l:"Responsable du contrôle",t:"person",half:1},
    {k:"preuve",l:"Preuve attendue",t:"text"},
    {k:"cle",l:"Contrôle clé",t:"check",hint:"Un contrôle clé couvre à lui seul un risque significatif ; il doit être testé chaque année."},
  ]},
  tests:{ sing:"test", prefix:"T", title:"Plan de tests", view:"tests", fields:[
    {k:"controleId",l:"Contrôle testé",t:"ref",ref:"controles",req:1},
    {k:"typeTest",l:"Type de test",t:"select",o:["Conception","Efficacité opérationnelle"],half:1,req:1},
    {k:"methode",l:"Méthode",t:"select",o:["Échantillonnage","Revue documentaire","Observation","Réexécution","Entretien"],half:1},
    {k:"periode",l:"Période testée",t:"text",half:1,ph:"ex. S1 2026"},
    {k:"date",l:"Date du test",t:"date",half:1,req:1},
    {k:"testeur",l:"Testeur",t:"person",half:1},
    {k:"resultat",l:"Résultat",t:"select",o:["Planifié","En cours","Efficace","Partiellement efficace","Inefficace"],half:1,req:1},
    {k:"echantillon",l:"Taille de l'échantillon",t:"number",half:1},
    {k:"exceptions",l:"Exceptions relevées",t:"number",half:1},
    {k:"commentaire",l:"Travaux réalisés et conclusion",t:"textarea"},
  ]},
  actions:{ sing:"constat", prefix:"C", title:"Constats et plans d'action", view:"actions", fields:[
    {k:"titre",l:"Constat",t:"text",req:1},
    {k:"controleId",l:"Contrôle concerné",t:"ref",ref:"controles",half:1},
    {k:"risqueId",l:"Risque concerné",t:"ref",ref:"risques",half:1},
    {k:"description",l:"Critère, constat, cause, conséquence",t:"textarea"},
    {k:"gravite",l:"Gravité",t:"select",o:["Faible","Modérée","Élevée","Critique"],half:1,req:1},
    {k:"source",l:"Origine",t:"select",o:["Test de contrôle","Audit interne","Commissaire aux comptes","Auto-évaluation","Incident","Contrôle d'une autorité"],half:1},
    {sec:"Plan d'action"},
    {k:"recommandation",l:"Action corrective",t:"textarea"},
    {k:"responsable",l:"Responsable",t:"person",half:1},
    {k:"echeance",l:"Échéance",t:"date",half:1},
    {k:"statut",l:"Statut",t:"select",o:["À lancer","En cours","Réalisé","Clôturé","Abandonné"],half:1,req:1},
    {k:"avancement",l:"Avancement (%)",t:"number",half:1,min:0,max:100},
  ]},
  taches:{ sing:"tâche", fem:1, prefix:"TK", title:"Tâches", view:"taches", fields:[
    {k:"titre",l:"Tâche",t:"text",req:1},
    {k:"description",l:"Détails",t:"textarea"},
    {k:"priorite",l:"Priorité",t:"select",o:PRIOS,req:1,half:1},
    {k:"statut",l:"Statut",t:"select",o:TSTAT,req:1,half:1},
    {k:"echeance",l:"Échéance",t:"date",half:1},
    {k:"assigneId",l:"Assignée à",t:"ref",ref:"equipe",half:1},
    {k:"lien",l:"Élément lié",t:"link"},
  ]},
  equipe:{ sing:"membre", prefix:"M", title:"Équipe et organisation", view:"equipe", fields:[
    {k:"nom",l:"Nom et prénom",t:"text",req:1,half:1},
    {k:"fonction",l:"Fonction",t:"text",req:1,half:1},
    {k:"direction",l:"Direction ou service",t:"text",half:1},
    {k:"managerId",l:"Rattaché à",t:"ref",ref:"equipe",half:1},
    {k:"ligne",l:"Position (trois lignes)",t:"select",o:LIGNES,half:1},
    {k:"roleCI",l:"Rôle dans le contrôle interne",t:"select",o:ROLES,half:1},
    {k:"email",l:"E-mail",t:"email",half:1},
    {k:"localisation",l:"Site",t:"text",half:1},
    {k:"alias",l:"Autres intitulés reconnus",t:"text",hint:"Séparés par des virgules, par exemple « DAF, Direction financière ». Ils servent à rattacher les risques, contrôles et actions à cette personne."},
  ]},
  exigences:{ sing:"exigence", fem:1, prefix:"EX", title:"Exigences réglementaires", view:"conformite", fields:[
    {k:"titre",l:"Exigence",t:"text",req:1},
    {k:"referentiel",l:"Référentiel",t:"select",o:REFERENTIELS,req:1,half:1},
    {k:"reference",l:"Référence légale ou normative",t:"text",half:1},
    {k:"statut",l:"Niveau de conformité",t:"select",o:["À évaluer","Conforme","Partiellement conforme","Non conforme","Non applicable"],req:1,half:1},
    {k:"responsable",l:"Responsable",t:"person",half:1},
    {k:"preuve",l:"Preuves de conformité",t:"text"},
    {k:"commentaire",l:"Commentaire",t:"textarea"},
  ]},
  actualites:{ sing:"actualité", fem:1, prefix:"A", title:"Actualités", view:"actualites", fields:[
    {k:"titre",l:"Titre",t:"text",req:1},
    {k:"theme",l:"Thème",t:"select",o:THEMES,req:1,half:1},
    {k:"date",l:"Date",t:"date",req:1,half:1},
    {k:"source",l:"Source",t:"text",half:1},
    {k:"url",l:"Lien vers la source",t:"url",half:1,ph:"https://"},
    {k:"resume",l:"Résumé",t:"textarea"},
    {k:"impact",l:"Ce que ça change pour le contrôle interne",t:"textarea"},
    {k:"actionsTexte",l:"Actions à mener",t:"textarea",hint:"Une action par ligne : échéance ; priorité ; action ; responsable. Exemple : 15/01/2027 ; Haute ; Mettre à jour la cartographie ; Contrôleur interne"},
  ]},
  moi:{ sing:"profil", title:"Mon profil", view:"aujourdhui", fields:[
    {k:"prenom",l:"Prénom affiché",t:"text",hint:"Utilisé pour vous saluer à l'ouverture de l'application. Visible par vous seul."},
    {k:"fonction",l:"Votre fonction",t:"text",ph:"Contrôleur interne"},
  ]},
};
const COLS = Object.keys(SCHEMA).filter(c=>c!=="moi");
const LINKABLE = ["actions","tests","controles","risques","exigences","actualites"];

/* =========================================================
   État
   ========================================================= */
const S = {}; const loaded = {}; COLS.forEach(c=>{ S[c]=[]; loaded[c]=false; });
let db = null, mode = "loading", canWrite = true, uid = null, progRef = null, prefsRef = null, ME = null;
let PROG = {}, progLoaded = false, PREFS = {};
const VIEWS = [
  {id:"aujourdhui",l:"Aujourd'hui"},
  {grp:"Pilotage"},
  {id:"tableau",l:"Tableau de bord"},
  {id:"conformite",l:"Score de conformité"},
  {grp:"Dispositif"},
  {id:"risques",l:"Risques"},
  {id:"controles",l:"Contrôles"},
  {id:"tests",l:"Tests"},
  {id:"actions",l:"Plans d'action"},
  {grp:"Organisation"},
  {id:"taches",l:"Tâches"},
  {id:"equipe",l:"Équipe"},
  {grp:"Ressources"},
  {id:"formations",l:"Formations"},
  {id:"actualites",l:"Actualités"},
];
const VIEW_IDS = VIEWS.filter(v=>v.id).map(v=>v.id);
const VNAME = Object.fromEntries(VIEWS.filter(v=>v.id).map(v=>[v.id,v.l]));
const hashView = (location.hash||"").slice(1);
let view = VIEW_IDS.includes(hashView) ? hashView : "aujourdhui";
const F = { q:"", processus:"", extra:"", cell:null, cat:"", theme:"", exiStat:"", assignee:"", prio:"", plan:false };
let heatMode = "residuel", orgMode = "organigramme";
const FS = { p:null, m:null };
let CAS = { mid:null, answers:[] };
let QZ = { mid:null, answers:{}, submitted:false };

/* =========================================================
   Utilitaires
   ========================================================= */
const $ = s => document.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const byId = (col,id) => S[col].find(x=>x.id===id);
const fmtD = d => { if(!d) return "—"; const x=new Date(d+"T00:00:00"); return isNaN(x)?"—":x.toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"}); };
const shortD = d => { if(!d) return "—"; const x=new Date(d+"T00:00:00"); return isNaN(x)?"—":x.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}); };
const relD = d => { if(!d) return ""; if(d===TODAY_ISO) return "Aujourd'hui"; if(d===addDays(1)) return "Demain"; if(d===addDays(-1)) return "Hier"; const n=Math.round((new Date(d+"T00:00:00")-TODAY)/864e5); if(n<0) return `Depuis ${-n} j`; if(n<7) return new Date(d+"T00:00:00").toLocaleDateString("fr-FR",{weekday:"long"}).replace(/^./,c=>c.toUpperCase()); return shortD(d); };
const score = (p,i) => (p&&i)? p*i : 0;
const inh = r => score(r.proba,r.impact);
const res = r => score(r.probaR,r.impactR);
const cur = r => res(r)||inh(r);
const exTag = o => o.exemple ? '<span class="ex" title="Donnée d\'exemple">exemple</span>' : "";
function pill(txt, cls){ return txt ? `<span class="pill ${cls||"p-neutral"}">${esc(txt)}</span>` : '<span class="pill p-neutral">—</span>'; }
function scoreChip(s){ const L=level(s); return L ? `<span class="score c${L.c}" title="${L.n}">${s}</span>` : '<span class="score" style="background:var(--surface-3);color:var(--muted)">—</span>'; }
function procOf(o, col){
  if(col==="risques") return o.processus;
  if(col==="controles") return byId("risques",o.risqueId)?.processus;
  if(col==="tests") return procOf(byId("controles",o.controleId)||{}, "controles");
  if(col==="actions") return o.risqueId ? byId("risques",o.risqueId)?.processus : procOf(byId("controles",o.controleId)||{}, "controles");
}
function lastTest(cid){ return S.tests.filter(t=>t.controleId===cid && t.date && !["Planifié","En cours"].includes(t.resultat)).sort((a,b)=>b.date.localeCompare(a.date))[0]; }
function testedThisYear(c){ const t=lastTest(c.id); return !!(t && t.typeTest==="Efficacité opérationnelle" && t.date.startsWith(String(YEAR))); }
function isOpen(a){ return !["Réalisé","Clôturé","Abandonné"].includes(a.statut); }
function isLate(a){ return !!(a.echeance && isOpen(a) && a.echeance < TODAY_ISO); }
const taskOpen = t => t.statut!=="Terminée";
const taskLate = t => !!(t.echeance && taskOpen(t) && t.echeance < TODAY_ISO);
const testPending = t => ["Planifié","En cours"].includes(t.resultat);
function nextRef(col){ const p=SCHEMA[col].prefix; let m=0; S[col].forEach(x=>{ const s=String(x.ref||""); if(!s.startsWith(p+"-")) return; const n=parseInt(s.split("-")[1],10); if(n>m) m=n; }); return `${p}-${String(m+1).padStart(3,"0")}`; }
function toast(msg){ const h=$("#toastHost"); h.innerHTML=`<div class="toast" role="status">${esc(msg)}</div>`; clearTimeout(toast.t); toast.t=setTimeout(()=>h.innerHTML="",2600); }
function sortRef(a,b){ return String(a.ref||"").localeCompare(String(b.ref||""),"fr",{numeric:true}); }
const plural = (n,s,p) => n>1 ? (p||s+"s") : s;
const safeUrl = u => /^https?:\/\//i.test(String(u||"")) ? u : "";
const label = (col,o) => col==="equipe" ? o.nom : o.titre;
const nouveau = col => (SCHEMA[col].fem?"Nouvelle ":"Nouveau ")+SCHEMA[col].sing;

/* ---- Personnes ---- */
function initials(n){ const p=String(n||"?").replace(/\(.*?\)/g,"").trim().split(/\s+/).filter(Boolean); return ((p[0]?.[0]||"?")+(p.length>1?p[p.length-1][0]:"")).toUpperCase(); }
function hue(s){ let h=0; for(const c of String(s||"")) h=(h*31+c.charCodeAt(0))%360; return h; }
function avatar(m, cls=""){ const n=m?.nom||m||"?"; return `<span class="av ${cls}" style="--avc:hsl(${hue(n)} 48% 42%)" title="${esc(n)}">${esc(initials(n))}</span>`; }
const norm = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").trim();
function keysOf(m){ return [m.nom, m.fonction, ...String(m.alias||"").split(",")].map(norm).filter(Boolean); }
function findMember(str){ const n=norm(str); if(!n) return null; return S.equipe.find(m=>keysOf(m).includes(n)) || S.equipe.find(m=>norm(m.nom) && n.includes(norm(m.nom))) || null; }
function who(str){ if(!str) return "—"; const m=findMember(str); return m ? `<span class="who">${avatar(m,"sm")}<span>${esc(m.nom)}<span class="sub" style="margin:0">${esc(str!==m.nom?str:m.fonction||"")}</span></span></span>` : esc(str); }
function loadOf(m){
  const k=keysOf(m), mine = s => k.includes(norm(s)) || (norm(m.nom) && norm(s).includes(norm(m.nom)));
  const risques=S.risques.filter(r=>mine(r.proprietaire)), controles=S.controles.filter(c=>mine(c.proprietaire));
  const actions=S.actions.filter(a=>mine(a.responsable) && isOpen(a)), late=actions.filter(isLate);
  const taches=S.taches.filter(t=>t.assigneId===m.id && taskOpen(t));
  return {risques, controles, actions, late, taches};
}
function displayName(){ const p=String(PREFS.prenom||"").trim(); if(p) return p; const n=String(ME?.name||"").trim(); return n ? n.split(/\s+/)[0] : ""; }

/* =========================================================
   Score de conformité
   ========================================================= */
const RES_VAL = {"Efficace":1,"Partiellement efficace":.5,"Inefficace":0};
const EXI_VAL = {"Conforme":1,"Partiellement conforme":.5,"Non conforme":0};
function pillars(R, withExig){
  const rid = new Set(R.map(r=>r.id));
  const C = S.controles.filter(c=>rid.has(c.risqueId));
  const cid = new Set(C.map(c=>c.id));
  const A = S.actions.filter(a=>a.statut!=="Abandonné" && (rid.has(a.risqueId) || cid.has(a.controleId)));
  const keys = C.filter(c=>c.cle);
  const tested = C.map(c=>lastTest(c.id)).filter(Boolean);
  const uncovered = R.filter(r=>!C.some(c=>c.risqueId===r.id));
  const untested = keys.filter(c=>!testedThisYear(c));
  const late = A.filter(isLate);
  const crit = R.filter(r=>cur(r)>=15);
  const bad = C.filter(c=>{ const t=lastTest(c.id); return t && t.resultat!=="Efficace"; });
  const refs = a => a.slice(0,4).map(x=>x.ref).join(", ")+(a.length>4?"…":"");
  const P = [
    {k:"cov", l:"Couverture des risques", w:20, v:R.length? (R.length-uncovered.length)/R.length : null,
      d:`${R.length-uncovered.length} ${plural(R.length,"risque")} sur ${R.length} ${plural(R.length-uncovered.length,"couvert")} par au moins un contrôle.`, tip: uncovered.length ? `Documentez un contrôle pour ${refs(uncovered)}.` : ""},
    {k:"key", l:`Contrôles clés testés en ${YEAR}`, w:20, v:keys.length? (keys.length-untested.length)/keys.length : null,
      d:`${keys.length-untested.length} sur ${keys.length} ${plural(keys.length,"contrôle clé","contrôles clés")} avec un test d'efficacité cette année.`, tip: untested.length ? `Planifiez le test de ${refs(untested)}.` : ""},
    {k:"eff", l:"Efficacité des contrôles testés", w:20, v:tested.length? tested.reduce((s,t)=>s+(RES_VAL[t.resultat]??0),0)/tested.length : null,
      d:`Dernier résultat de ${tested.length} ${plural(tested.length,"contrôle")} : efficace 100 %, partiel 50 %, inefficace 0 %.`, tip: bad.length ? `Priorisez la remédiation de ${refs(bad)}.` : ""},
    {k:"act", l:"Plans d'action dans les délais", w:15, v:A.length? (A.length-late.length)/A.length : null,
      d:`${late.length} ${plural(late.length,"action")} en retard sur ${A.length} ${plural(A.length,"action")} suivies.`, tip: late.length ? `Relancez les responsables de ${refs(late)}.` : ""},
    {k:"crit", l:"Maîtrise des risques critiques", w:10, v:R.length? (R.length-crit.length)/R.length : null,
      d:`${crit.length} ${plural(crit.length,"risque")} encore en zone critique (criticité résiduelle ≥ 15).`, tip: crit.length ? `Renforcez le traitement de ${refs(crit)}.` : ""},
  ];
  if(withExig){
    const E = S.exigences.filter(e=>e.statut in EXI_VAL), todo = S.exigences.filter(e=>!e.statut || e.statut==="À évaluer"), nc = S.exigences.filter(e=>e.statut==="Non conforme");
    P.push({k:"exi", l:"Exigences réglementaires", w:15, v:E.length? E.reduce((s,e)=>s+EXI_VAL[e.statut],0)/E.length : null,
      d:`${E.length} ${plural(E.length,"exigence évaluée","exigences évaluées")}${todo.length?`, ${todo.length} encore à évaluer`:""}. Conforme 100 %, partiel 50 %.`,
      tip: nc.length ? `Traitez en priorité : ${refs(nc)}.` : todo.length ? "Évaluez les exigences restantes dans la section ci-dessous." : ""});
  }
  return P;
}
function total(P){ const k=P.filter(p=>p.v!==null); if(!k.length) return null; const w=k.reduce((s,p)=>s+p.w,0); return Math.round(k.reduce((s,p)=>s+p.w*p.v,0)/w*100); }
function grade(s){ if(s===null) return {n:"Non calculé",c:"var(--muted)",b:"var(--surface-3)"}; if(s>=85) return {n:"Maîtrisé",c:"var(--ok)",b:"var(--ok-soft)"}; if(s>=70) return {n:"Satisfaisant",c:"var(--accent)",b:"var(--accent-soft)"}; if(s>=50) return {n:"À renforcer",c:"var(--warn)",b:"var(--warn-soft)"}; return {n:"Insuffisant",c:"var(--crit)",b:"var(--crit-soft)"}; }
function gauge(s, size, onDark){
  const g=grade(s), v=s===null?0:s, col=onDark?"#97C7EC":g.c;
  return `<div class="gauge ${size||""}"><svg viewBox="0 0 200 116" role="img" aria-label="Score de conformité ${s===null?"non calculé":s+" sur 100"}">
    <path d="M18 104 A82 82 0 0 1 182 104" fill="none" stroke="${onDark?"rgba(151,199,236,.22)":"var(--surface-3)"}" stroke-width="15" stroke-linecap="round"/>
    <path class="arc" d="M18 104 A82 82 0 0 1 182 104" pathLength="100" fill="none" stroke="${col}" stroke-width="15" stroke-linecap="round" stroke-dasharray="${Math.max(v,.01)} 100"/>
  </svg><div class="gv"><b style="color:${onDark?"#fff":g.c}">${s===null?"—":s}</b><small>sur 100</small></div></div>`;
}

/* =========================================================
   Priorités du jour (manuelles + automatiques)
   ========================================================= */
function urgentItems(){
  const it = [];
  S.taches.filter(taskOpen).forEach(t=>{ const late=taskLate(t); const soon=t.echeance && t.echeance<=IN2;
    if(late || t.priorite==="Urgente" || soon || t.priorite==="Haute" && t.echeance && t.echeance<=IN7)
      it.push({lvl: late||t.priorite==="Urgente"?"u":"h", kind:"taches", id:t.id, t:t.titre, s:`Tâche${t.assigneId&&byId("equipe",t.assigneId)?" · "+byId("equipe",t.assigneId).nom:""}`, date:t.echeance, late, task:t}); });
  S.actions.filter(isOpen).forEach(a=>{ if(isLate(a)) it.push({lvl:"u", kind:"actions", id:a.id, t:a.titre, s:`Action en retard · ${a.ref} · ${a.responsable||"sans responsable"}`, date:a.echeance, late:true});
    else if(a.echeance && a.echeance<=IN7) it.push({lvl:"h", kind:"actions", id:a.id, t:a.titre, s:`Échéance proche · ${a.ref} · ${a.responsable||"sans responsable"}`, date:a.echeance}); });
  S.tests.filter(testPending).forEach(t=>{ const c=byId("controles",t.controleId); if(!t.date) return;
    if(t.date<TODAY_ISO) it.push({lvl:"u", kind:"tests", id:t.id, t:`Test ${t.resultat==="En cours"?"à finaliser":"non réalisé"} : ${c?.titre||t.ref}`, s:`${t.ref} · prévu le ${shortD(t.date)}`, date:t.date, late:true});
    else if(t.date<=IN7) it.push({lvl:"h", kind:"tests", id:t.id, t:`Test prévu : ${c?.titre||t.ref}`, s:`${t.ref} · ${t.typeTest||""}`, date:t.date}); });
  S.risques.filter(r=>cur(r)>=15 && !S.controles.some(c=>c.risqueId===r.id)).forEach(r=>it.push({lvl:"u", kind:"risques", id:r.id, t:`Risque critique sans contrôle : ${r.titre}`, s:r.ref}));
  S.controles.filter(c=>lastTest(c.id)?.resultat==="Inefficace" && !S.actions.some(a=>a.controleId===c.id && isOpen(a))).forEach(c=>it.push({lvl:"h", kind:"controles", id:c.id, t:`Contrôle inefficace sans plan d'action : ${c.titre}`, s:c.ref}));
  S.exigences.filter(e=>e.statut==="Non conforme").forEach(e=>it.push({lvl:"h", kind:"exigences", id:e.id, t:`Exigence non conforme : ${e.titre}`, s:`${e.ref} · ${e.referentiel}`}));
  const seenAct = new Set(S.taches.filter(taskOpen).map(t=>t.lien).filter(Boolean));
  return it.filter(x=>x.kind==="taches" || !seenAct.has(x.kind+":"+x.id))
    .sort((a,b)=> (a.lvl===b.lvl?0:a.lvl==="u"?-1:1) || String(a.date||"9999").localeCompare(String(b.date||"9999")));
}
function weekEvents(){
  const ev = {};
  const add = (d, o) => { if(d>=TODAY_ISO && d<=addDays(6)) (ev[d]=ev[d]||[]).push(o); };
  S.actions.filter(isOpen).forEach(a=>a.echeance && add(a.echeance,{t:a.titre, c:"#3C3732", o:"actions:"+a.id}));
  S.tests.filter(testPending).forEach(t=>t.date && add(t.date,{t:"Test · "+(byId("controles",t.controleId)?.titre||t.ref), c:"#BA6AA7", o:"tests:"+t.id}));
  S.taches.filter(taskOpen).forEach(t=>t.echeance && add(t.echeance,{t:t.titre, c:"#0088CE", o:"taches:"+t.id}));
  return ev;
}

/* =========================================================
   Écran d'accueil
   ========================================================= */
let welcomeOn = true;
function greeting(){ const h=new Date().getHours(); return h>=18 ? "Bonsoir" : "Bonjour"; }
function renderWelcome(){
  if(!welcomeOn) return;
  const n = displayName();
  $("#wHello").textContent = `${greeting()}${n?" "+n:""},`;
  const d = new Date();
  $("#wDate").textContent = d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}) + " · " + d.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});
  $("#wName").hidden = !(mode==="db" && prefsRef);
  $("#wName").textContent = n ? "Ce n'est pas votre prénom ?" : "Comment souhaitez-vous qu'on vous appelle ?";
  const ready = ["taches","actions","tests","risques"].every(c=>loaded[c]);
  if(!ready) return;
  const U = urgentItems(), urg = U.filter(x=>x.lvl==="u"), late = S.actions.filter(isLate);
  const ev = weekEvents(); const nWeek = Object.values(ev).reduce((s,a)=>s+a.length,0);
  const sc = total(pillars(S.risques,true));
  $("#wCards").innerHTML = `<div class="wcard ${urg.length?"hot":""}"><b>${urg.length}</b><span>${plural(urg.length,"priorité urgente","priorités urgentes")}</span></div>
    <div class="wcard ${late.length?"hot":""}"><b>${late.length}</b><span>${plural(late.length,"action en retard","actions en retard")}</span></div>
    <div class="wcard"><b>${nWeek}</b><span>${plural(nWeek,"échéance","échéances")} dans les 7 jours</span></div>
    <div class="wcard"><b>${sc===null?"—":sc}<small style="font-size:.45em;color:#6E6862"> / 100</small></b><span>score de conformité</span></div>`;
  const parts=[]; if(urg.length) parts.push(`${urg.length} ${plural(urg.length,"priorité urgente","priorités urgentes")}`); if(late.length) parts.push(`${late.length} ${plural(late.length,"action","actions")} en retard`); if(nWeek) parts.push(`${nWeek} ${plural(nWeek,"échéance")} cette semaine`);
  $("#wSum").textContent = parts.length ? `Au programme : ${parts.join(", ").replace(/, ([^,]*)$/," et $1")}. Les plus pressantes sont juste en dessous.` : "Rien d'urgent aujourd'hui : c'est le bon moment pour avancer sur les tests ou une formation.";
  $("#wList").innerHTML = U.slice(0,3).map(x=>`<div><i style="background:${x.lvl==="u"?"#800064":"#0088CE"}"></i><span>${esc(x.t)}${x.date?` <span style="color:#6E6862">· ${esc(relD(x.date))}</span>`:""}</span></div>`).join("");
}
function closeWelcome(){
  if(!welcomeOn) return; welcomeOn=false;
  const w=$("#welcome"); w.classList.add("leaving"); stopRadar();
  setTimeout(()=>{ w.remove(); $("#main").focus({preventScroll:true}); }, 460);
}
$("#wGo").addEventListener("click", closeWelcome);
$("#wName").addEventListener("click", ()=>{ closeWelcome(); setTimeout(()=>openDrawer("moi","me"),480); });
/* radar de veille */
let radarRaf=0;
function startRadar(){
  const cv=$("#wCanvas"); if(!cv) return; const cx=cv.getContext("2d"); if(!cx) return;
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const blips = Array.from({length:9},()=>({a:Math.random()*Math.PI*.9+Math.PI*1.05, r:.25+Math.random()*.7, t:0}));
  let W=0,H=0,dpr=1;
  const size=()=>{ dpr=Math.min(2,window.devicePixelRatio||1); W=cv.clientWidth; H=cv.clientHeight; cv.width=W*dpr; cv.height=H*dpr; };
  size(); window.addEventListener("resize", size);
  const draw=(ts)=>{
    cx.setTransform(dpr,0,0,dpr,0,0); cx.clearRect(0,0,W,H);
    const ox=W*.86, oy=H*1.04, R=Math.max(W,H)*.95;
    cx.lineWidth=1;
    for(let i=1;i<=6;i++){ cx.beginPath(); cx.arc(ox,oy,R*i/6,Math.PI,2*Math.PI); cx.strokeStyle=`rgba(0,56,101,${.06+.014*(6-i)})`; cx.stroke(); }
    for(let k=0;k<7;k++){ const a=Math.PI+k*Math.PI/6; cx.beginPath(); cx.moveTo(ox,oy); cx.lineTo(ox+Math.cos(a)*R,oy+Math.sin(a)*R); cx.strokeStyle="rgba(0,56,101,.04)"; cx.stroke(); }
    const ang = Math.PI + ((reduce?0.35:(ts/7000))%1)*Math.PI;
    const g=cx.createConicGradient ? cx.createConicGradient(ang-0.5, ox, oy) : null;
    if(g){ g.addColorStop(0,"rgba(151,199,236,0)"); g.addColorStop(0.075,"rgba(0,136,206,.12)"); g.addColorStop(0.0801,"rgba(151,199,236,0)"); g.addColorStop(1,"rgba(151,199,236,0)");
      cx.beginPath(); cx.moveTo(ox,oy); cx.arc(ox,oy,R,ang-0.5,ang); cx.closePath(); cx.fillStyle=g; cx.fill(); }
    cx.beginPath(); cx.moveTo(ox,oy); cx.lineTo(ox+Math.cos(ang)*R, oy+Math.sin(ang)*R); cx.strokeStyle="rgba(0,136,206,.32)"; cx.stroke();
    blips.forEach(b=>{ let d=ang-b.a; while(d<0) d+=Math.PI*2; const fade=reduce?0.7:Math.max(0,1-d/1.6);
      const x=ox+Math.cos(b.a)*R*b.r, y=oy+Math.sin(b.a)*R*b.r; if(y>H+4) return;
      cx.beginPath(); cx.arc(x,y,2.6,0,Math.PI*2); cx.fillStyle=`rgba(128,0,100,${.12+.6*fade})`; cx.fill();
      cx.beginPath(); cx.arc(x,y,2.6+8*(1-fade),0,Math.PI*2); cx.strokeStyle=`rgba(128,0,100,${.22*fade})`; cx.stroke(); });
    if(!reduce && welcomeOn) radarRaf=requestAnimationFrame(draw);
  };
  radarRaf=requestAnimationFrame(draw);
}
function stopRadar(){ cancelAnimationFrame(radarRaf); }

/* =========================================================
   Navigation
   ========================================================= */
function formProgress(){ const all=FORMATIONS.flatMap(p=>p.modules); const d=all.filter(m=>PROG[m.id]?.done).length; return Math.round(d/all.length*100); }
function renderNav(){
  const ready = mode!=="loading";
  const urg = ready ? urgentItems().filter(x=>x.lvl==="u").length : 0;
  const late = S.actions.filter(isLate).length;
  const sc = total(pillars(S.risques,true));
  const counts = { aujourdhui:urg?{n:urg,a:1}:null, conformite:sc===null?null:{n:sc}, risques:{n:S.risques.length}, controles:{n:S.controles.length}, tests:{n:S.tests.length},
    actions: late?{n:late,a:1}:null, taches:{n:S.taches.filter(taskOpen).length}, equipe:{n:S.equipe.length}, formations:{n:formProgress()+" %"}, actualites:{n:S.actualites.length} };
  $("#nav").innerHTML = VIEWS.map(v=> v.grp ? `<div class="grp">${v.grp}</div>` :
    `<a href="#${v.id}" data-v="${v.id}" ${v.id===view?'aria-current="page"':""}>${tile(v.id)}<span>${v.l}</span>${counts[v.id]&&counts[v.id].n!==0?`<span class="count ${counts[v.id].a?"alert":""}">${counts[v.id].n}</span>`:""}</a>`).join("");
  const n = displayName(), full = ME?.name || "";
  $("#railFoot").innerHTML = `<button class="me" data-open="moi:me" title="Mon profil">${ME?.avatarUrl&&full?`<span class="av"><img src="${esc(ME.avatarUrl)}" alt=""></span>`:avatar(n||"Vous")}<span style="min-width:0"><b>${esc(n||full||"Mon profil")}</b><small>${esc(PREFS.fonction||"Contrôle interne")}</small></span></button>
    ${Stockage.statutHtml()}`;
}
$("#nav").addEventListener("click", e=>{ const a=e.target.closest("a[data-v]"); if(!a) return; e.preventDefault(); go(a.dataset.v); });
function go(v, filters){ closeOverlay(); view=v; Object.assign(F,{q:"",processus:"",extra:"",cell:null,cat:"",theme:"",exiStat:"",assignee:"",prio:"",plan:false}, filters||{}); if(v==="formations" && !(filters&&filters.keepCourse)){ FS.p=null; FS.m=null; } try{ history.replaceState(null,"","#"+v); }catch(_){} render(); $("#main").focus({preventScroll:true}); window.scrollTo(0,0); }
$("#topDate").textContent = new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}).replace(/^./,c=>c.toUpperCase());
window.addEventListener("scroll", ()=>{ $("#topbar").classList.toggle("scrolled", window.scrollY>4); }, {passive:true});

/* =========================================================
   Rendu
   ========================================================= */
function render(){
  renderNav(); renderWelcome();
  const m = $("#main");
  const fn = {aujourdhui:renderToday, tableau:renderDashboard, conformite:renderConformite, formations:renderFormations, actualites:renderNews, taches:renderTasks, equipe:renderTeam}[view];
  if(fn){ m.innerHTML = fn(); if(view==="formations") learnMount(); }
  else { m.innerHTML = renderListShell(view); renderListBody(); }
}
function banners(){
  const b = Stockage.estDemo() ? `<div class="banner"><p><b>Mode démonstration.</b> Rien n'est enregistré. Connectez le dossier partagé de l'équipe pour enregistrer et travailler ensemble.</p><button class="btn sm" data-stockage="panneau">Connecter un dossier</button></div>` : "";
  const exCount = COLS.reduce((n,c)=>n+S[c].filter(x=>x.exemple).length,0);
  const ex = exCount && canWrite && ["tableau","risques","controles","tests","actions","taches","equipe"].includes(view) ? `<div class="banner"><p>L'application contient <b>${exCount} données d'exemple</b> (entreprise fictive Hexalis) pour illustrer son fonctionnement. Remplacez-les par vos propres données quand vous êtes prêt.</p><button class="btn sm" id="clearEx">Effacer les exemples</button></div>` : "";
  return b+ex;
}
function headerBlock(id, eyebrow, title, lede, right){
  return `${banners()}<div class="head"><div class="head-l">${tile(id,"lg")}<div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${lede?`<p class="lede">${lede}</p>`:""}</div></div><div class="actions-row">${right||""}</div></div>`;
}

/* ---------- Aujourd'hui ---------- */
function renderToday(){
  const n = displayName();
  const ready = ["taches","actions","tests","risques"].every(c=>loaded[c]);
  const U = ready ? urgentItems() : [];
  const urg = U.filter(x=>x.lvl==="u").length;
  const sc = total(pillars(S.risques,true));
  const ev = weekEvents();
  const days = Array.from({length:7},(_,i)=>{ const d=new Date(TODAY); d.setDate(d.getDate()+i); return d; });
  const fp = formProgress();
  const nextMod = FORMATIONS.flatMap(p=>p.modules.map(m=>({p,m}))).find(x=>!PROG[x.m.id]?.done);
  const news = S.actualites.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,2);
  const busy = S.equipe.map(m=>({m, l:loadOf(m)})).map(x=>({...x, n:x.l.actions.length+x.l.taches.length, late:x.l.late.length})).filter(x=>x.n).sort((a,b)=>b.late-a.late||b.n-a.n).slice(0,5);
  return `${banners()}<section class="hello">
      <div><div class="eyebrow">${new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</div>
        <h1>${greeting()}${n?" "+esc(n):""}, <em>voici votre journée.</em></h1>
        <p>${!ready?"Chargement de vos priorités…":U.length?`${urg} ${plural(urg,"priorité urgente","priorités urgentes")} et ${U.length-urg} ${plural(U.length-urg,"point")} à surveiller. Commencez par le haut de la liste.`:"Aucune urgence : avancez sur votre plan de tests ou votre formation."}</p>
        <div class="chips"><button class="chip" data-go="taches">Mes tâches</button><button class="chip" data-go="actions" data-f='${esc(JSON.stringify({extra:"retard"}))}'>Actions en retard</button><button class="chip" data-go="conformite">Score ${sc===null?"—":sc}/100</button></div></div>
      ${gauge(sc,"sm",true)}
    </section>
    <div class="today">
      <section class="panel"><div class="panel-head"><div class="ph">${tile("aujourdhui","sm")}<div><h2>Priorités du jour</h2><p>Vos tâches et les alertes du dispositif, des plus urgentes aux moins pressantes.</p></div></div>${canWrite?`<button class="btn sm" data-new="taches">${plus}Tâche</button>`:""}</div>
        ${!ready?'<p class="sub">Chargement…</p>':U.length?`<div class="prio">${U.slice(0,9).map(x=>prioRow(x)).join("")}</div>${U.length>9?`<button class="linkbtn" data-go="taches" style="margin-top:8px">Voir les ${U.length-9} autres</button>`:""}`:`<div class="empty" style="padding:26px"><b>Tout est à jour</b><p>Aucune tâche urgente ni alerte sur le dispositif.</p></div>`}
      </section>
      <div style="display:flex;flex-direction:column;gap:20px;min-width:0">
        <section class="panel"><div class="panel-head"><div><h2>Raccourcis</h2></div></div>
          <div class="quick">
            ${canWrite?`<button class="qa" data-new="actions">${tile("actions","sm")}<span>Nouveau constat<small>Après un test ou un audit</small></span></button>
            <button class="qa" data-new="tests">${tile("tests","sm")}<span>Planifier un test<small>Conception ou efficacité</small></span></button>
            <button class="qa" data-new="taches">${tile("taches","sm")}<span>Nouvelle tâche<small>Pour vous ou l'équipe</small></span></button>`:""}
            <button class="qa" data-go="formations" ${nextMod?`data-f='${esc(JSON.stringify({keepCourse:1}))}' data-course-go="${nextMod.p.id}"`:""}>${tile("formations","sm")}<span>${fp?"Reprendre la formation":"Se former"}<small>${fp} % des parcours terminés</small></span></button>
          </div>
        </section>
        <section class="panel"><div class="panel-head"><div><h2>Charge de l'équipe</h2><p>Actions et tâches ouvertes par personne.</p></div><button class="linkbtn" data-go="equipe">Équipe</button></div>
          ${busy.length?`<div class="list-rows">${busy.map(x=>`<div class="lr" style="grid-template-columns:auto minmax(0,1fr) auto" data-open="equipe:${x.m.id}" role="button" tabindex="0">${avatar(x.m)}<span class="t"><b>${esc(x.m.nom)}</b><small>${esc(x.m.fonction||"")}</small></span><span class="actions-row">${x.late?`<span class="pill p-crit">${x.late} en retard</span>`:""}<span class="badge">${x.n} ${plural(x.n,"ouverte","ouvertes")}</span></span></div>`).join("")}</div>`:`<p class="sub">Ajoutez votre équipe pour suivre la charge de chacun.</p>`}
        </section>
      </div>
    </div>
    <section class="panel" style="margin-bottom:20px"><div class="panel-head"><div><h2>Les 7 prochains jours</h2><p>Échéances des actions, tests planifiés et tâches.</p></div></div>
      <div class="week">${days.map(d=>{ const k=iso(d), list=ev[k]||[], we=[0,6].includes(d.getDay());
        return `<div class="day ${k===TODAY_ISO?"today-d":""} ${we?"we":""}"><div class="dh"><span>${k===TODAY_ISO?"Auj.":d.toLocaleDateString("fr-FR",{weekday:"short"})}</span><b>${d.getDate()}</b></div>${list.map(e=>`<div class="ev" style="--evc:${e.c}" data-open="${e.o}" role="button" tabindex="0">${esc(e.t)}</div>`).join("")}</div>`; }).join("")}</div>
      <div class="legend"><span><i style="background:#3C3732"></i>Action</span><span><i style="background:#BA6AA7"></i>Test</span><span><i style="background:#0088CE"></i>Tâche</span></div>
    </section>
    ${news.length?`<section class="panel"><div class="panel-head"><div class="ph">${tile("actualites","sm")}<div><h2>À lire</h2><p>Les dernières actualités de votre veille.</p></div></div><button class="linkbtn" data-go="actualites">Toute la veille</button></div>
      <div class="list-rows">${news.map(x=>`<div class="lr" data-go="actualites" role="button" tabindex="0"><span class="d">${shortD(x.date)}</span><span class="t"><b>${esc(x.titre)}</b><small>${esc(x.source||"")}</small></span><span class="th">${esc(x.theme||"")}</span></div>`).join("")}</div></section>`:""}`;
}
function prioRow(x){
  const isTask = x.kind==="taches";
  const view0 = {taches:"taches",actions:"actions",tests:"tests",risques:"risques",controles:"controles",exigences:"conformite"}[x.kind];
  return `<div class="pi" data-open="${x.kind}:${x.id}" role="button" tabindex="0">${isTask&&canWrite?`<button class="chk" data-done-task="${x.id}" role="checkbox" aria-checked="false" aria-label="Marquer comme terminée"></button>`:`<span class="lvl ${x.lvl}"></span>`}${tile(view0,"sm")}<span style="min-width:0"><b>${esc(x.t)}</b><span class="sub">${esc(x.s||"")}</span></span>${x.date?`<span class="when ${x.late?"late":""}">${esc(relD(x.date))}</span>`:"<span></span>"}</div>`;
}

/* ---------- Tableau de bord ---------- */
function renderDashboard(){
  const allLoaded = ["risques","controles","tests","actions"].every(c=>loaded[c]);
  const nR=S.risques.length;
  const P = pillars(S.risques,true), sc = total(P), g = grade(sc);
  const critRes = S.risques.filter(r=>cur(r)>=15).length;
  const keyCtrls = S.controles.filter(c=>c.cle), tY = keyCtrls.filter(testedThisYear);
  const cover = keyCtrls.length ? Math.round(tY.length/keyCtrls.length*100) : 0;
  const open = S.actions.filter(isOpen), late = S.actions.filter(isLate);
  const closed = S.actions.filter(a=>["Réalisé","Clôturé"].includes(a.statut)).length;
  const closeRate = S.actions.length ? Math.round(closed/S.actions.length*100) : 0;
  const uncovered = S.risques.filter(r=>!S.controles.some(c=>c.risqueId===r.id));
  const untested = keyCtrls.filter(c=>!testedThisYear(c));
  const ineff = S.controles.filter(c=>lastTest(c.id)?.resultat==="Inefficace");
  const head = headerBlock("tableau", `Exercice ${YEAR}`, "Tableau de bord", "La situation de votre dispositif : où sont les risques, ce qui est couvert, ce qui reste à faire.");
  if(allLoaded && !nR && !S.controles.length && !S.tests.length && !S.actions.length)
    return head + `<div class="panel"><div class="empty"><b>Votre dispositif est vide pour l'instant</b><p>Commencez par cartographier vos risques par catégorie et par processus.</p>${canWrite?`<button class="btn primary" data-new="risques">${plus}Ajouter un premier risque</button>`:""}</div></div>`;
  const weakest = P.filter(p=>p.v!==null).sort((a,b)=>a.v-b.v).slice(0,3);
  const tStats = ["Efficace","Partiellement efficace","Inefficace","En cours","Planifié"].map(k=>({k, n:S.tests.filter(t=>t.resultat===k).length}));
  const tMax = Math.max(1,...tStats.map(x=>x.n));
  const tColor = {"Efficace":"var(--ok)","Partiellement efficace":"var(--warn)","Inefficace":"var(--crit)","En cours":"var(--accent)","Planifié":"var(--muted)"};
  const upcoming = open.filter(a=>a.echeance).sort((a,b)=>a.echeance.localeCompare(b.echeance)).slice(0,5);
  return head + `<div class="toprow">
    <section class="panel"><div class="panel-head"><div class="ph">${tile("conformite","sm")}<div><h2>Score de conformité</h2><p>Six piliers pondérés, recalculés à chaque saisie.</p></div></div><button class="linkbtn" data-go="conformite">Détail</button></div>
      <div class="scorecard">${gauge(sc)}<div><span class="grade" style="color:${g.c};background:${g.b}">${g.n}</span>
        <div class="weak">${weakest.map(p=>`<div><span>${esc(p.l)}<span class="meter"><i style="width:${Math.round(p.v*100)}%;background:${grade(Math.round(p.v*100)).c}"></i></span></span><b style="text-align:right;font-variant-numeric:tabular-nums">${Math.round(p.v*100)} %</b></div>`).join("")}</div>
        ${weakest.length?'<p class="sub" style="margin-top:8px">Les trois piliers les plus faibles.</p>':""}</div></div>
    </section>
    <div class="kpis">
      <div class="kpi ${critRes?"tone-crit":"tone-ok"}"><span class="lbl">${tile("risques","sm")}Risques critiques résiduels</span><span class="val">${critRes}</span><span class="sub">sur ${nR} ${plural(nR,"risque")} ${plural(nR,"cartographié")}</span></div>
      <div class="kpi"><span class="lbl">${tile("tests","sm")}Contrôles clés testés en ${YEAR}</span><span class="val">${cover}<small style="font-size:.5em"> %</small></span><span class="sub">${tY.length}/${keyCtrls.length}</span><div class="meter"><i style="width:${cover}%"></i></div></div>
      <div class="kpi ${late.length?"tone-crit":"tone-ok"}"><span class="lbl">${tile("actions","sm")}Actions en retard</span><span class="val">${late.length}</span><span class="sub">${open.length} ${plural(open.length,"action ouverte","actions ouvertes")}</span></div>
      <div class="kpi"><span class="lbl">${tile("conformite","sm")}Réalisation des actions</span><span class="val">${closeRate}<small style="font-size:.5em"> %</small></span><span class="sub">${closed} sur ${S.actions.length}</span><div class="meter"><i style="width:${closeRate}%"></i></div></div>
    </div></div>
    <div class="grid2">
      <section class="panel"><div class="panel-head"><div><h2>Matrice des risques</h2><p>Probabilité × impact. Cliquez une case pour voir les risques.</p></div>
        <div class="seg" role="group" aria-label="Niveau de risque"><button data-heat="inherent" aria-pressed="${heatMode==="inherent"}">Inhérent</button><button data-heat="residuel" aria-pressed="${heatMode==="residuel"}">Résiduel</button></div></div>
        ${heatmap()}
      </section>
      <section class="panel"><div class="panel-head"><div><h2>Points d'attention</h2><p>Les écarts du dispositif à traiter en priorité.</p></div></div>
        <div class="alerts">
          ${alertRow(uncovered.length, "Risques sans contrôle", uncovered.slice(0,3).map(r=>r.ref).join(", ")||"Tous les risques sont couverts", uncovered.length?"crit":"ok", "risques", {extra:"sans"})}
          ${alertRow(untested.length, `Contrôles clés non testés en ${YEAR}`, untested.slice(0,3).map(c=>c.ref).join(", ")||"Couverture complète", untested.length?"warn":"ok", "controles", {extra:"nontest"})}
          ${alertRow(ineff.length, "Contrôles jugés inefficaces", ineff.slice(0,3).map(c=>c.ref).join(", ")||"Aucun", ineff.length?"crit":"ok", "controles", {extra:"ineff"})}
          ${alertRow(late.length, "Actions dont l'échéance est dépassée", late.slice(0,3).map(a=>a.ref).join(", ")||"Aucune", late.length?"crit":"ok", "actions", {extra:"retard"})}
        </div>
      </section>
    </div>
    <div class="grid2">
      <section class="panel"><div class="panel-head"><div><h2>Risques par catégorie</h2><p>Répartition selon la criticité résiduelle.</p></div><button class="linkbtn" data-go="risques">Tout voir</button></div>${catBars()}</section>
      <section class="panel"><div class="panel-head"><div><h2>Échéances des plans d'action</h2><p>Les prochaines actions ouvertes.</p></div><button class="linkbtn" data-go="actions">Tout voir</button></div>
        ${upcoming.length?`<div class="list-rows">${upcoming.map(a=>`<div class="lr" data-open="actions:${a.id}" role="button" tabindex="0"><span class="d ${isLate(a)?"late":""}">${shortD(a.echeance)}</span><span class="t"><b>${esc(a.titre)}</b><small>${esc(a.responsable||"Sans responsable")} · ${esc(a.ref)}</small></span>${pill(a.gravite,GRAV_PILL[a.gravite])}</div>`).join("")}</div>`:`<div class="empty" style="padding:20px"><p>Aucune action ouverte avec échéance.</p></div>`}
      </section>
    </div>
    <section class="panel"><div class="panel-head"><div><h2>Résultats des tests</h2><p>${S.tests.length} ${plural(S.tests.length,"test")} au plan.</p></div><button class="linkbtn" data-go="tests">Tout voir</button></div>
      <div class="bars">${tStats.map(x=>`<div class="bar-row"><span>${x.k}</span><span class="bar-track"><i style="width:${x.n/tMax*100}%;background:${tColor[x.k]};border-radius:6px"></i></span><span class="v">${x.n}</span></div>`).join("")}</div>
    </section>`;
}
const catOf = r => CATEGORIES.includes(r.categorie) ? r.categorie : "Non classé";
function catBars(){
  if(!S.risques.length) return `<p class="sub">Aucun risque cartographié.</p>`;
  const cats = CATEGORIES.concat(S.risques.some(r=>catOf(r)==="Non classé")?["Non classé"]:[]);
  const max = Math.max(1,...cats.map(c=>S.risques.filter(r=>catOf(r)===c).length));
  return `<div class="bars">${cats.map(c=>{ const rs=S.risques.filter(r=>catOf(r)===c); if(!rs.length) return "";
    const by=[1,2,3,4].map(l=>rs.filter(r=>level(cur(r))?.c===l).length);
    return `<div class="bar-row catbar" data-go="risques" data-f='${esc(JSON.stringify({cat:c}))}' role="button" tabindex="0"><span class="lbl"><span style="color:var(--warm);display:flex">${svg(CAT_ICON[c],16)}</span><span>${esc(c)}</span></span><span class="bar-track">${by.map((n,i)=>n?`<i class="c${i+1}" style="width:${n/max*100}%"></i>`:"").join("")}</span><span class="v">${rs.length}</span></div>`; }).join("")}</div>
    <div class="legend"><span><i class="c1"></i>Faible</span><span><i class="c2"></i>Modéré</span><span><i class="c3"></i>Élevé</span><span><i class="c4"></i>Critique</span></div>`;
}
function alertRow(n, title, detail, tone, target, filt){
  return `<div class="alert ${tone}"><span class="n">${n}</span><span><b>${title}</b><small>${esc(detail)}</small></span>${n?`<button class="linkbtn" data-go="${target}" data-f='${esc(JSON.stringify(filt))}'>Voir</button>`:""}</div>`;
}
function heatmap(){
  const counts = {};
  S.risques.forEach(r=>{ const p = heatMode==="residuel" ? (r.probaR||r.proba) : r.proba; const i = heatMode==="residuel" ? (r.impactR||r.impact) : r.impact; if(p&&i){ const k=p+"-"+i; counts[k]=(counts[k]||0)+1; } });
  let cells = "";
  for(let i=5;i>=1;i--){
    cells += `<span class="ax" title="${IMPACT[i-1]}">${i}</span>`;
    for(let p=1;p<=5;p++){ const n=counts[p+"-"+i]||0; const L=level(p*i);
      cells += `<button class="cell c${L.c} ${n?"":"z"}" ${n?`data-cell="${p}-${i}"`:'tabindex="-1"'} aria-label="Probabilité ${PROBA[p-1]}, impact ${IMPACT[i-1]} : ${n} risque(s)">${n||"·"}</button>`; }
  }
  cells += `<span></span>` + [1,2,3,4,5].map(p=>`<span class="ax" title="${PROBA[p-1]}">${p}</span>`).join("");
  return `<div class="heat"><div class="heat-y">Impact</div><div class="heat-grid">${cells}</div></div><div class="heat-x">Probabilité</div>
  <div class="legend"><span><i class="c1"></i>Faible (1–4)</span><span><i class="c2"></i>Modéré (5–9)</span><span><i class="c3"></i>Élevé (10–14)</span><span><i class="c4"></i>Critique (15–25)</span></div>`;
}

/* ---------- Score de conformité ---------- */
function renderConformite(){
  const P = pillars(S.risques,true), sc = total(P), g = grade(sc);
  const mk = (list, key) => list.filter(p=>S.risques.some(r=>r[key]===p)).map(p=>{ const R=S.risques.filter(r=>r[key]===p); return {p, n:R.length, s:total(pillars(R,false))}; });
  const scoreTable = (rows, lbl) => rows.length ? `<div class="tablewrap" style="border:0;box-shadow:none"><table><thead><tr><th>${lbl}</th><th>Risques</th><th style="width:45%">Score</th></tr></thead><tbody>${rows.sort((a,b)=>(a.s??101)-(b.s??101)).map(r=>{ const gg=grade(r.s); return `<tr><td>${esc(r.p)}</td><td class="num">${r.n}</td><td><span class="progress"><span class="meter" style="width:100%;max-width:160px"><i style="width:${r.s??0}%;background:${gg.c}"></i></span><b style="color:${gg.c}">${r.s??"—"}</b></span></td></tr>`; }).join("")}</tbody></table></div>` : `<p class="sub">Aucun risque cartographié.</p>`;
  const E = S.exigences, fl = F.exiStat;
  const groups = REFERENTIELS.filter(rf=>E.some(e=>e.referentiel===rf));
  const cnt = s => E.filter(e=>(e.statut||"À évaluer")===s).length;
  return headerBlock("conformite", "Pilotage", "Score de conformité", "Une note sur 100 qui mesure la solidité de votre dispositif : couverture, tests, efficacité, suivi des actions et exigences réglementaires.",
    canWrite?`<button class="btn primary" data-new="exigences">${plus}Nouvelle exigence</button>`:"")
  + `<div class="toprow">
      <section class="panel" style="display:flex;flex-direction:column;align-items:center;gap:10px;justify-content:center">${gauge(sc,"lg")}<span class="grade" style="color:${g.c};background:${g.b}">${g.n}</span>
        <p class="sub" style="text-align:center;max-width:36ch">Maîtrisé ≥ 85 · Satisfaisant 70–84 · À renforcer 50–69 · Insuffisant &lt; 50</p></section>
      <section class="panel"><div class="panel-head"><div><h2>Les six piliers</h2><p>Un pilier sans donnée est exclu du calcul et les poids sont recalculés.</p></div></div>
        <div class="pillars">${P.map(p=>{ const v=p.v===null?null:Math.round(p.v*100), gg=grade(v); return `<div class="pillar"><span><b>${esc(p.l)}</b><span class="w">poids ${p.w}</span></span><span class="meter" style="margin:0"><i style="width:${v??0}%;background:${gg.c}"></i></span><span class="pv" style="color:${gg.c}">${v===null?'<span class="na">n/d</span>':v+" %"}</span><span class="d">${esc(p.d)}</span>${p.tip?`<span class="tip">→ ${esc(p.tip)}</span>`:""}</div>`; }).join("")}</div>
      </section></div>
    <div class="grid2">
      <section class="panel"><div class="panel-head"><div><h2>Score par processus</h2><p>Hors exigences réglementaires. Les plus faibles en premier.</p></div></div>${scoreTable(mk(PROCESSUS,"processus"),"Processus")}</section>
      <section class="panel"><div class="panel-head"><div><h2>Score par catégorie de risque</h2><p>Hors exigences réglementaires.</p></div></div>${scoreTable(mk(CATEGORIES,"categorie"),"Catégorie")}</section>
    </div>
    <section class="panel"><div class="panel-head"><div><h2>Exigences réglementaires</h2><p>Évaluez chaque exigence en un clic. ${cnt("Conforme")} conformes · ${cnt("Partiellement conforme")} partielles · ${cnt("Non conforme")} non conformes · ${cnt("À évaluer")} à évaluer.</p></div>
      <select id="fexi" aria-label="Filtrer les exigences" style="background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:7px 10px"><option value="">Toutes</option>${["À évaluer","Conforme","Partiellement conforme","Non conforme","Non applicable"].map(s=>`<option ${fl===s?"selected":""}>${s}</option>`).join("")}</select></div>
      ${!loaded.exigences?'<p class="sub">Chargement…</p>':!E.length?`<div class="empty"><b>Aucune exigence suivie</b><p>Ajoutez les obligations qui s'appliquent à votre entreprise.</p></div>`:
      groups.map(rf=>{ const items=E.filter(e=>e.referentiel===rf && (!fl || (e.statut||"À évaluer")===fl)).sort(sortRef); if(!items.length) return ""; const ok=items.filter(e=>e.statut==="Conforme").length;
        return `<div class="req-group"><h3>${esc(rf)} <small>${ok}/${items.length} ${plural(ok,"conforme")}</small></h3><div class="tablewrap" style="box-shadow:none">${items.map(e=>`<div class="req"><span class="mono">${esc(e.ref)}</span><span class="t" data-open="exigences:${e.id}" role="button" tabindex="0"><b>${esc(e.titre)}</b><span class="sub">${esc([e.reference,e.responsable].filter(Boolean).join(" · "))}</span></span>${canWrite?`<span class="stat" role="group" aria-label="Niveau de conformité">${EXI_STATUTS.map(([s,c,l])=>`<button class="${c}" data-exi="${e.id}" data-s="${s}" aria-pressed="${e.statut===s}">${l}</button>`).join("")}</span>`:pill(e.statut||"À évaluer",EXI_PILL[e.statut||"À évaluer"])}</div>`).join("")}</div></div>`; }).join("")}
    </section>`;
}

/* ---------- Listes du dispositif ---------- */
const LEDE = {
  risques:"Identifiez et évaluez les risques par catégorie et par processus, avant et après prise en compte des contrôles.",
  controles:"Documentez les activités de contrôle qui couvrent chaque risque et repérez les contrôles clés.",
  tests:"Planifiez et documentez les tests de conception et d'efficacité opérationnelle.",
  actions:"Suivez les constats issus des tests et des audits jusqu'à la mise en œuvre des actions correctives.",
};
const EXTRA = {
  risques:[["","Tous les niveaux"],["Critique","Résiduel critique"],["Élevé","Résiduel élevé"],["Modéré","Résiduel modéré"],["Faible","Résiduel faible"],["sans","Sans contrôle"]],
  controles:[["","Tous les contrôles"],["cle","Contrôles clés"],["nontest",`Clés non testés en ${YEAR}`],["ineff","Jugés inefficaces"]],
  tests:[["","Tous les résultats"],["Planifié","Planifié"],["En cours","En cours"],["Efficace","Efficace"],["Partiellement efficace","Partiellement efficace"],["Inefficace","Inefficace"]],
  actions:[["","Tous les statuts"],["ouvert","Ouvertes"],["retard","En retard"],["À lancer","À lancer"],["En cours","En cours"],["Réalisé","Réalisé"],["Clôturé","Clôturé"]],
};
function renderListShell(col){
  const sc = SCHEMA[col];
  let cats = "";
  if(col==="risques" && S.risques.length){
    const list = CATEGORIES.concat(S.risques.some(r=>catOf(r)==="Non classé")?["Non classé"]:[]);
    cats = `<div class="cats" role="group" aria-label="Catégories de risques">${list.map(c=>{ const rs=S.risques.filter(r=>catOf(r)===c); const L=level(rs.reduce((m,r)=>Math.max(m,cur(r)),0));
      return `<button class="cat" data-cat="${esc(c)}" aria-pressed="${F.cat===c}"><span class="ci">${svg(CAT_ICON[c],19)}</span><b>${esc(c)}</b><small>${rs.length} ${plural(rs.length,"risque")}${L?` · <span class="dot c${L.c}"></span>${L.n.toLowerCase()}`:""}</small></button>`; }).join("")}</div>`;
  }
  return headerBlock(col, `${S[col].length} ${plural(S[col].length, sc.sing)}`, sc.title, LEDE[col],
    `<button class="btn" id="exportCsv">${svg('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',16)}Exporter</button>${canWrite?`<button class="btn primary" data-new="${col}">${plus}${nouveau(col)}</button>`:""}`)
  + cats + `<div class="toolbar">
      <label class="search">${svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',16)}<input id="q" type="search" placeholder="Filtrer par référence, intitulé, responsable…" value="${esc(F.q)}" aria-label="Filtrer"></label>
      <select id="fproc" aria-label="Processus"><option value="">Tous les processus</option>${PROCESSUS.map(p=>`<option ${F.processus===p?"selected":""}>${esc(p)}</option>`).join("")}</select>
      <select id="fextra" aria-label="Filtre">${EXTRA[col].map(([v,l])=>`<option value="${esc(v)}" ${F.extra===v?"selected":""}>${esc(l)}</option>`).join("")}</select>
      ${F.cell?`<span class="chipfilter">Case P${F.cell.split("-")[0]} × I${F.cell.split("-")[1]} (${heatMode==="residuel"?"résiduel":"inhérent"})<button id="clearCell" aria-label="Retirer le filtre">✕</button></span>`:""}
    </div><div id="listBody"></div>`;
}
function filtered(col){
  const q = norm(F.q);
  return S[col].filter(o=>{
    if(F.processus && procOf(o,col)!==F.processus) return false;
    if(q){ const hay=norm([o.ref,o.titre,o.description,o.proprietaire,o.responsable,o.testeur,o.commentaire,o.categorie, col==="tests"?byId("controles",o.controleId)?.titre:""].join(" ")); if(!hay.includes(q)) return false; }
    const x = F.extra;
    if(col==="risques"){
      if(F.cat && catOf(o)!==F.cat) return false;
      if(F.cell){ const [p,i]=F.cell.split("-").map(Number); const rp=heatMode==="residuel"?(o.probaR||o.proba):o.proba, ri=heatMode==="residuel"?(o.impactR||o.impact):o.impact; if(rp!==p||ri!==i) return false; }
      if(x==="sans") return !S.controles.some(c=>c.risqueId===o.id);
      if(x) return level(cur(o))?.n===x;
    }
    if(col==="controles"){ if(x==="cle") return !!o.cle; if(x==="nontest") return o.cle && !testedThisYear(o); if(x==="ineff") return lastTest(o.id)?.resultat==="Inefficace"; }
    if(col==="tests" && x) return o.resultat===x;
    if(col==="actions"){ if(x==="ouvert") return isOpen(o); if(x==="retard") return isLate(o); if(x) return o.statut===x; }
    return true;
  });
}
function renderListBody(){
  const col=view, host=$("#listBody"); if(!host) return;
  if(!loaded[col]){ host.innerHTML=`<div class="tablewrap"><div class="empty"><p>Chargement de vos données…</p></div></div>`; return; }
  const rows = filtered(col);
  if(!S[col].length){
    const msg = {risques:"Aucun risque cartographié. Ajoutez votre premier risque en précisant sa catégorie, son processus, sa probabilité et son impact.",
      controles: S.risques.length?"Aucun contrôle documenté. Rattachez un premier contrôle à l'un de vos risques.":"Cartographiez d'abord un risque : chaque contrôle est rattaché au risque qu'il couvre.",
      tests: S.controles.length?"Aucun test planifié. Programmez un test de conception ou d'efficacité sur un contrôle.":"Documentez d'abord un contrôle avant d'en planifier le test.",
      actions:"Aucun constat. Enregistrez ici les anomalies relevées et l'action corrective associée."}[col];
    const ok = col==="risques" || (col==="controles"&&S.risques.length) || (col==="tests"&&S.controles.length) || col==="actions";
    host.innerHTML=`<div class="tablewrap"><div class="empty"><b>Rien pour l'instant</b><p>${msg}</p>${canWrite&&ok?`<button class="btn primary" data-new="${col}">${nouveau(col)}</button>`:""}</div></div>`; return;
  }
  if(!rows.length){ host.innerHTML=`<div class="tablewrap"><div class="empty"><p>Aucun résultat avec ces filtres.</p></div></div>`; return; }
  const T = TABLES[col];
  const sorted = rows.slice().sort(T.sort||sortRef);
  let body;
  if(col==="risques"){
    body = CATEGORIES.concat(["Non classé"]).map(c=>{ const g=sorted.filter(r=>catOf(r)===c); if(!g.length) return "";
      return `<tr class="grouprow"><td colspan="${T.h.length}"><span class="gr"><span style="color:var(--warm);display:flex">${svg(CAT_ICON[c],16)}</span>${esc(c)} <span class="sub" style="margin:0;font-weight:500">${g.length} ${plural(g.length,"risque")}</span></span></td></tr>` + g.map(o=>`<tr data-open="${col}:${o.id}" tabindex="0">${T.r(o)}</tr>`).join(""); }).join("");
  } else body = sorted.map(o=>`<tr data-open="${col}:${o.id}" tabindex="0">${T.r(o)}</tr>`).join("");
  host.innerHTML = `<div class="tablewrap"><table class="data"><thead><tr>${T.h.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div>`;
}
const TABLES = {
  risques:{ h:["Réf.","Risque","Processus","Propriétaire","Inhérent","Résiduel","Contrôles"],
    sort:(a,b)=>cur(b)-cur(a) || sortRef(a,b),
    r:o=>{ const n=S.controles.filter(c=>c.risqueId===o.id).length;
      return `<td class="mono">${esc(o.ref)}</td><td><b>${esc(o.titre)}</b>${exTag(o)}<span class="sub">${esc(o.traitement?"Traitement : "+o.traitement.toLowerCase():"")}</span></td><td>${esc(o.processus)}</td><td>${who(o.proprietaire)}</td><td>${scoreChip(inh(o))}</td><td>${scoreChip(res(o))}</td><td class="num">${n?n:'<span class="pill p-crit">Aucun</span>'}</td>`; } },
  controles:{ h:["Réf.","Contrôle","Risque couvert","Responsable","Type · Fréquence","Dernier test"],
    r:o=>{ const r=byId("risques",o.risqueId), t=lastTest(o.id);
      return `<td class="mono">${esc(o.ref)}</td><td><b>${esc(o.titre)}</b>${o.cle?'<span class="keytag">Clé</span>':""}${exTag(o)}<span class="sub">${esc(o.nature||"")}</span></td><td>${r?`<span class="mono">${esc(r.ref)}</span> ${esc(r.titre)}`:"—"}<span class="sub">${esc(r?.categorie||"")}</span></td><td>${who(o.proprietaire)}</td><td>${esc(o.type||"")}<span class="sub">${esc(o.frequence||"")}</span></td><td>${t?`${pill(t.resultat,RESULT_PILL[t.resultat])}<span class="sub">${fmtD(t.date)}</span>`:'<span class="pill p-neutral">Non testé</span>'}</td>`; } },
  tests:{ h:["Réf.","Contrôle testé","Type","Période","Date","Testeur","Exceptions","Résultat"],
    sort:(a,b)=>String(b.date||"").localeCompare(String(a.date||"")),
    r:o=>{ const c=byId("controles",o.controleId);
      return `<td class="mono">${esc(o.ref)}</td><td><b>${c?esc(c.titre):"Contrôle supprimé"}</b>${exTag(o)}<span class="sub">${c?esc(c.ref):""} · ${esc(procOf(o,"tests")||"")}</span></td><td>${esc(o.typeTest==="Efficacité opérationnelle"?"Efficacité":o.typeTest||"")}<span class="sub">${esc(o.methode||"")}</span></td><td>${esc(o.periode||"—")}</td><td class="num">${fmtD(o.date)}</td><td>${who(o.testeur)}</td><td class="num">${o.echantillon?`${o.exceptions||0} / ${o.echantillon}`:"—"}</td><td>${pill(o.resultat,RESULT_PILL[o.resultat])}</td>`; } },
  actions:{ h:["Réf.","Constat","Gravité","Responsable","Échéance","Avancement","Statut"],
    sort:(a,b)=>(isLate(b)-isLate(a)) || (isOpen(b)-isOpen(a)) || String(a.echeance||"9").localeCompare(String(b.echeance||"9")),
    r:o=>{ const c=byId("controles",o.controleId), r=byId("risques",o.risqueId); const pct=Math.max(0,Math.min(100,Number(o.avancement)||0));
      return `<td class="mono">${esc(o.ref)}</td><td><b>${esc(o.titre)}</b>${exTag(o)}<span class="sub">${[c?c.ref:"",r?r.ref:"",o.source||""].filter(Boolean).map(esc).join(" · ")}</span></td><td>${pill(o.gravite,GRAV_PILL[o.gravite])}</td><td>${who(o.responsable)}</td><td class="num" ${isLate(o)?'style="color:var(--crit);font-weight:700"':""}>${fmtD(o.echeance)}${isLate(o)?'<span class="sub" style="color:var(--crit)">En retard</span>':""}</td><td><span class="progress"><span class="meter"><i style="width:${pct}%"></i></span>${pct} %</span></td><td>${pill(o.statut,STATUT_PILL[o.statut])}</td>`; } },
};

/* ---------- Tâches ---------- */
function linkChip(l){ if(!l) return ""; const [c,id]=String(l).split(":"); const o=byId(c,id); if(!o) return ""; return `<button class="linkchip" data-open="${c}:${id}" title="${esc(o.titre||"")}">${tile(SCHEMA[c].view,"sm")}${esc(o.ref||"")}</button>`; }
function renderTasks(){
  const q=norm(F.q);
  const T = S.taches.filter(t=>(!F.assignee || t.assigneId===F.assignee) && (!F.prio || t.priorite===F.prio) && (!q || norm(t.titre+" "+(t.description||"")).includes(q)));
  const prioRank = {"Urgente":0,"Haute":1,"Normale":2,"Basse":3};
  const sortT = (a,b)=> (taskLate(b)-taskLate(a)) || (prioRank[a.priorite]??9)-(prioRank[b.priorite]??9) || String(a.echeance||"9").localeCompare(String(b.echeance||"9"));
  const autos = urgentItems().filter(x=>x.kind!=="taches").slice(0,6);
  const assignees = S.equipe.filter(m=>S.taches.some(t=>t.assigneId===m.id));
  return headerBlock("taches", `${S.taches.filter(taskOpen).length} ${plural(S.taches.filter(taskOpen).length,"tâche ouverte","tâches ouvertes")}`, "Tâches", "Organisez le travail de l'équipe. Glissez une carte d'une colonne à l'autre ou utilisez les flèches.",
    canWrite?`<button class="btn primary" data-new="taches">${plus}Nouvelle tâche</button>`:"")
  + (autos.length?`<section class="panel" style="margin-bottom:20px"><div class="panel-head"><div><h2>Alertes à transformer en tâches</h2><p>Repérées automatiquement dans votre dispositif.</p></div></div><div class="autos">${autos.map(x=>`<div class="pi" data-open="${x.kind}:${x.id}" role="button" tabindex="0"><span class="lvl ${x.lvl}"></span>${tile({actions:"actions",tests:"tests",risques:"risques",controles:"controles",exigences:"conformite"}[x.kind],"sm")}<span style="min-width:0"><b>${esc(x.t)}</b><span class="sub">${esc(x.s||"")}</span></span>${canWrite?`<button class="btn sm" data-mktask="${x.kind}:${x.id}">${plus}Créer la tâche</button>`:"<span></span>"}</div>`).join("")}</div></section>`:"")
  + `<div class="toolbar"><label class="search">${svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',16)}<input id="q" type="search" placeholder="Filtrer les tâches…" value="${esc(F.q)}" aria-label="Filtrer"></label>
      <select id="fassign" aria-label="Personne"><option value="">Toute l'équipe</option>${assignees.map(m=>`<option value="${esc(m.id)}" ${F.assignee===m.id?"selected":""}>${esc(m.nom)}</option>`).join("")}</select>
      <select id="fprio" aria-label="Priorité"><option value="">Toutes priorités</option>${PRIOS.map(p=>`<option ${F.prio===p?"selected":""}>${p}</option>`).join("")}</select></div>`
  + (!loaded.taches?'<p class="sub">Chargement…</p>':`<div class="board">${TSTAT.map((st,ci)=>{ const items=T.filter(t=>(t.statut||"À faire")===st).sort(sortT);
      return `<section class="col" data-col="${st}" aria-label="${st}"><div class="col-h"><span>${st}</span><span class="n">${items.length}</span></div>${items.map(t=>taskCard(t,ci)).join("")||`<p class="sub" style="text-align:center;padding:16px 0">${st==="Terminée"?"Rien de terminé pour l'instant.":"Aucune tâche."}</p>`}</section>`; }).join("")}</div>`);
}
function taskCard(t, ci){
  const m=byId("equipe",t.assigneId), late=taskLate(t);
  return `<article class="card" draggable="${canWrite}" data-task="${t.id}" data-open="taches:${t.id}" tabindex="0"><div class="top"><b>${esc(t.titre)}${exTag(t)}</b><span class="pill ${PRIO_CLS[t.priorite]||"prio-b"}">${esc(t.priorite||"—")}</span></div>${t.description?`<p>${esc(t.description)}</p>`:""}
    <div class="meta">${m?avatar(m,"sm"):""}${t.echeance?`<span class="${late?"late":""}">${svg('<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',13)} ${esc(relD(t.echeance))}</span>`:""}${linkChip(t.lien)}
    ${canWrite?`<span class="mv">${ci>0?`<button data-move="${t.id}:${TSTAT[ci-1]}" aria-label="Déplacer vers ${TSTAT[ci-1]}">←</button>`:""}${ci<2?`<button data-move="${t.id}:${TSTAT[ci+1]}" aria-label="Déplacer vers ${TSTAT[ci+1]}">→</button>`:""}</span>`:""}</div></article>`;
}
async function setTask(id, patch){
  const t=byId("taches",id); if(!t) return;
  try{ if(mode==="db") await db.collection("taches").doc(id).update({...patch, modifieLe:new Date().toISOString()}); else { Object.assign(t,patch); render(); } }
  catch(e){ toast("Mise à jour impossible, réessayez"); }
}

/* ---------- Équipe ---------- */
function renderTeam(){
  const E = S.equipe;
  const head = headerBlock("equipe", `${E.length} ${plural(E.length,"personne")}`, "Équipe et organisation", "Qui fait quoi dans le dispositif de contrôle interne : rattachements, position dans les trois lignes et charge de chacun.",
    `<div class="seg" role="group" aria-label="Affichage"><button data-org="organigramme" aria-pressed="${orgMode==="organigramme"}">Organigramme</button><button data-org="lignes" aria-pressed="${orgMode==="lignes"}">Trois lignes</button><button data-org="annuaire" aria-pressed="${orgMode==="annuaire"}">Annuaire</button></div>${canWrite?`<button class="btn primary" data-new="equipe">${plus}Ajouter une personne</button>`:""}`);
  if(!loaded.equipe) return head + '<p class="sub">Chargement…</p>';
  if(!E.length) return head + `<div class="panel"><div class="empty"><b>Présentez votre équipe</b><p>Ajoutez les personnes qui interviennent dans le dispositif : direction, propriétaires de risques, responsables de contrôles, correspondants. Leur charge sera calculée automatiquement.</p>${canWrite?`<button class="btn primary" data-new="equipe">${plus}Ajouter une personne</button>`:""}</div></div>`;
  const badges = m => { const l=loadOf(m); const out=[]; if(l.risques.length) out.push(`<span class="badge" title="Risques possédés">${l.risques.length} R</span>`); if(l.controles.length) out.push(`<span class="badge" title="Contrôles">${l.controles.length} CT</span>`); if(l.actions.length) out.push(`<span class="badge" title="Actions ouvertes">${l.actions.length} A</span>`); if(l.late.length) out.push(`<span class="pill p-crit" title="Actions en retard">${l.late.length}</span>`); return out.join(""); };
  if(orgMode==="organigramme"){
    const ids=new Set(E.map(m=>m.id));
    const kids = id => E.filter(m=>m.managerId===id && m.id!==id).sort((a,b)=>a.nom.localeCompare(b.nom,"fr"));
    const roots = E.filter(m=>!m.managerId || !ids.has(m.managerId) || m.managerId===m.id);
    const seen=new Set();
    const node = (m, depth) => { if(seen.has(m.id)||depth>12) return ""; seen.add(m.id); const k=kids(m.id);
      return `<li><div class="node" data-open="equipe:${m.id}" role="button" tabindex="0">${avatar(m,"lg")}<b>${esc(m.nom)}${exTag(m)}</b><small>${esc(m.fonction||"")}</small>${m.ligne?`<span class="badge">${esc(m.ligne)}</span>`:""}<span class="load">${badges(m)}</span></div>${k.length?`<ul>${k.map(c=>node(c,depth+1)).join("")}</ul>`:""}</li>`; };
    const main = roots.filter(r=>kids(r.id).length).sort((a,b)=>kids(b.id).length-kids(a.id).length);
    const loose = roots.filter(r=>!kids(r.id).length);
    return head + `<section class="panel"><div class="orgwrap">${main.map(r=>`<ul class="tree">${node(r,0)}</ul>`).join('<div style="height:24px"></div>')}</div>
      ${loose.length?`<div class="panel-head" style="margin:10px 0 10px"><div><h2>Hors hiérarchie</h2><p>Gouvernance, intervenants externes et personnes sans rattachement.</p></div></div><div class="lines3">${loose.map(m=>mcard(m)).join("")}</div>`:""}
      <p class="sub" style="margin-top:14px">R : risques possédés · CT : contrôles sous responsabilité · A : actions ouvertes · en rouge : actions en retard.</p></section>`;
  }
  if(orgMode==="lignes"){
    const desc = {"Gouvernance":"Supervise et fixe l'appétence au risque.","Direction générale":"Pilote l'entreprise et porte le dispositif.","1re ligne":"Possède les risques et exécute les contrôles.","2e ligne":"Conçoit le cadre, conseille et surveille.","3e ligne":"Apporte une assurance indépendante.","Externe":"Assurance externe complémentaire."};
    const lanes = ["Gouvernance","Direction générale","1re ligne","2e ligne","3e ligne"];
    const ext = E.filter(m=>m.ligne==="Externe" || !LIGNES.includes(m.ligne));
    return head + `<div class="lines3">${lanes.map(l=>{ const ms=E.filter(m=>m.ligne===l); return `<section class="lane"><h3>${l}</h3><p>${desc[l]}</p>${ms.map(m=>mcard(m)).join("")||'<p class="sub">Personne.</p>'}</section>`; }).join("")}</div>
      ${ext.length?`<section class="panel" style="margin-top:20px"><div class="panel-head"><div><h2>Externes et non positionnés</h2><p>${desc["Externe"]}</p></div></div><div class="lines3">${ext.map(m=>mcard(m)).join("")}</div></section>`:""}`;
  }
  const rows = E.slice().sort((a,b)=>a.nom.localeCompare(b.nom,"fr"));
  return head + `<div class="tablewrap"><table class="data"><thead><tr><th>Personne</th><th>Direction</th><th>Position</th><th>Rôle</th><th>Risques</th><th>Contrôles</th><th>Actions ouvertes</th><th>Tâches</th></tr></thead><tbody>${rows.map(m=>{ const l=loadOf(m);
    return `<tr data-open="equipe:${m.id}" tabindex="0"><td><span class="who">${avatar(m)}<span><b>${esc(m.nom)}</b>${exTag(m)}<span class="sub" style="margin:0">${esc(m.fonction||"")}</span></span></span></td><td>${esc(m.direction||"—")}</td><td>${m.ligne?`<span class="badge">${esc(m.ligne)}</span>`:"—"}</td><td>${esc(m.roleCI||"—")}</td><td class="num">${l.risques.length||"—"}</td><td class="num">${l.controles.length||"—"}</td><td class="num">${l.actions.length||"—"}${l.late.length?` <span class="pill p-crit">${l.late.length} en retard</span>`:""}</td><td class="num">${l.taches.length||"—"}</td></tr>`; }).join("")}</tbody></table></div>`;
}
function mcard(m){ return `<div class="mcard" data-open="equipe:${m.id}" role="button" tabindex="0">${avatar(m)}<span><b>${esc(m.nom)}</b><small>${esc(m.fonction||"")}</small></span></div>`; }

/* ---------- Formations interactives ---------- */
const TONE = {form:"g-formations", risk:"g-risques", ctrl:"g-controles", test:"g-tests"};
const TONE_ICON = {form:"formations", risk:"risques", ctrl:"controles", test:"tests"};
const REDUCE = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
const sleep = ms => new Promise(r=>setTimeout(r, REDUCE?Math.min(ms,40):ms));
const ALLMODS = FORMATIONS.flatMap(p=>p.modules.map(m=>({p,m})));
const modById = id => ALLMODS.find(x=>x.m.id===id);
let GAME = {xp:0, w:{}, days:[]};
const LEVELS = ["Observateur","Analyste","Contrôleur","Contrôleur confirmé","Expert","Maître de la vigie"];
const LVL_XP = 150;
function lvlOf(xp){ const i=Math.min(LEVELS.length-1, Math.floor(xp/LVL_XP)); const top=i===LEVELS.length-1; return {i, n:LEVELS[i], cur: top?LVL_XP:xp-i*LVL_XP, need:LVL_XP, top}; }
function streakDays(){ const s=new Set(GAME.days||[]); let n=0; const d=new Date(TODAY); if(!s.has(iso(d))) d.setDate(d.getDate()-1); while(s.has(iso(d))){ n++; d.setDate(d.getDate()-1); } return n; }
function pStats(p){ const d=p.modules.filter(m=>PROG[m.id]?.done).length; return {d, n:p.modules.length, pct:Math.round(d/p.modules.length*100), done:d===p.modules.length}; }
function saveLearn(){ if(!progRef) return; const snap={progress:PROG, game:GAME}; progChain = progChain.then(()=>progRef.set(snap)).catch(()=>toast("Progression non enregistrée, réessayez plus tard")); }
let progChain = Promise.resolve();
function markDone(mid, sc){
  const prev = PROG[mid]; const best = Math.max(prev?.score ?? -1, sc ?? -1);
  if(prev?.done && (sc==null || sc <= (prev.score ?? 0))) return false;
  PROG = {...PROG, [mid]:{done:true, date:TODAY_ISO, ...(best>=0?{score:best}:{})}};
  saveLearn(); refreshModlist(); return true;
}
function award(key, n, el){
  if(GAME.w && GAME.w[key]) return false;
  const before = lvlOf(GAME.xp||0).i;
  const days = (GAME.days||[]).includes(TODAY_ISO) ? GAME.days : [...(GAME.days||[]), TODAY_ISO].slice(-60);
  GAME = {...GAME, xp:(GAME.xp||0)+n, w:{...(GAME.w||{}), [key]:1}, days};
  floatXP(el, n); updateXpChip(); saveLearn();
  if(lvlOf(GAME.xp).i > before) setTimeout(levelUp, 700);
  return true;
}
function floatXP(el, n){
  const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : {left:window.innerWidth/2, top:window.innerHeight/2, width:0, height:0};
  const s=document.createElement("span"); s.className="xpfloat"; s.textContent=`+${n} XP`;
  s.style.left=(r.left+r.width/2)+"px"; s.style.top=(r.top+Math.min(r.height,40)/2-10)+"px";
  document.body.appendChild(s); setTimeout(()=>s.remove(), 1200);
}
/* confettis */
let cfCanvas=null, cfParts=[], cfRaf=0;
const CF_COLORS=["#0088CE","#97C7EC","#003865","#BA6AA7","#800064","#F2B705","#FFFFFF"];
function confetti(el, n=60){
  if(REDUCE) return;
  const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : {left:window.innerWidth/2, top:window.innerHeight/3, width:0, height:0};
  if(!cfCanvas){ cfCanvas=document.createElement("canvas"); cfCanvas.id="confetti"; document.body.appendChild(cfCanvas); }
  const dpr=Math.min(2,window.devicePixelRatio||1); cfCanvas.width=innerWidth*dpr; cfCanvas.height=innerHeight*dpr; cfCanvas.style.width=innerWidth+"px"; cfCanvas.style.height=innerHeight+"px";
  const x=r.left+r.width/2, y=r.top+r.height/2;
  for(let i=0;i<n;i++){ const a=-Math.PI/2+(Math.random()-.5)*Math.PI*1.3, v=4+Math.random()*7; cfParts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,w:5+Math.random()*5,h:3+Math.random()*4,c:CF_COLORS[i%CF_COLORS.length],life:90+Math.random()*40}); }
  if(!cfRaf) cfRaf=requestAnimationFrame(cfStep);
}
function cfStep(){
  const cx=cfCanvas.getContext("2d"); const dpr=cfCanvas.width/innerWidth; cx.setTransform(dpr,0,0,dpr,0,0); cx.clearRect(0,0,innerWidth,innerHeight);
  cfParts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=.22; p.vx*=.985; p.r+=p.vr; p.life--; cx.save(); cx.globalAlpha=Math.max(0,Math.min(1,p.life/30)); cx.translate(p.x,p.y); cx.rotate(p.r); cx.fillStyle=p.c; cx.fillRect(-p.w/2,-p.h/2,p.w,p.h); cx.restore(); });
  cfParts=cfParts.filter(p=>p.life>0 && p.y<innerHeight+20);
  if(cfParts.length) cfRaf=requestAnimationFrame(cfStep); else { cfRaf=0; cx.clearRect(0,0,innerWidth,innerHeight); }
}
function levelUp(){
  const L=lvlOf(GAME.xp); const host=document.createElement("div"); host.className="lvlup";
  host.innerHTML=`<div class="box">${tile("formations","xl")}<b>Niveau ${L.i+1} : ${esc(L.n)}</b><p class="sub" style="font-size:14px">Vous avez franchi un nouveau palier. Continuez comme ça !</p><button class="btn primary" style="margin-top:12px">Continuer</button></div>`;
  document.body.appendChild(host); confetti(host.querySelector(".box"),120);
  const close=()=>host.remove(); host.addEventListener("click",close); setTimeout(close,4000);
}
const STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>';
const FLAME = svg('<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.6 2.6-5.6 4-8.3.5 1.6 1.5 2.6 2.5 3.1C12 6.4 13.4 4 15.6 2.8c-.4 2.5.5 4.4 1.9 6 1.3 1.5 2 3.1 2 5 0 4.3-3.3 7.2-7.5 7.2z" fill="currentColor" fill-opacity=".25"/>',15);
function ringSvg(frac, size, track, col){ return `<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="${track}" stroke-width="3"/><circle class="v" cx="18" cy="18" r="15.9" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100-Math.round(frac*100)}"/></svg>`; }
function xpChip(){ const L=lvlOf(GAME.xp||0), s=streakDays(); return `<span class="xpchip" id="xpChip" title="${GAME.xp||0} XP au total"><span class="lv">${L.i+1}</span>${esc(L.n)}<span class="bar"><i style="width:${Math.round(L.cur/L.need*100)}%"></i></span>${GAME.xp||0} XP</span>${s?`<span class="xpchip"><span class="flame">${FLAME}</span>${s} ${plural(s,"jour")} d'affilée</span>`:""}`; }
function updateXpChip(){ const c=$("#ctopChips"); if(c){ c.innerHTML=xpChip(); $("#xpChip")?.classList.add("bump"); } }

const BADGES = [
  {id:"p1", t:"Fondations : parcours 1 validé", ic:"controles", ok:()=>pStats(FORMATIONS[0]).done},
  {id:"p2", t:"Cartographe : parcours 2 validé", ic:"risques", ok:()=>pStats(FORMATIONS[1]).done},
  {id:"p3", t:"Gardien : parcours 3 validé", ic:"conformite", ok:()=>pStats(FORMATIONS[2]).done},
  {id:"p4", t:"Auditeur : parcours 4 validé", ic:"tests", ok:()=>pStats(FORMATIONS[3]).done},
  {id:"first", t:"Premiers pas : une leçon terminée", ic:"aujourdhui", ok:()=>ALLMODS.some(x=>x.m.type==="lecon"&&PROG[x.m.id]?.done)},
  {id:"detective", t:"Détective : tous les signaux d'alerte trouvés", ic:"actualites", ok:()=>!!GAME.w?.["w:phish"]},
  {id:"strat", t:"Stratège : risque ramené sous le seuil élevé", ic:"tableau", ok:()=>!!GAME.w?.["w:matrix"]},
  {id:"perfect", t:"Sans faute : un cas pratique réussi à 100 %", ic:"equipe", ok:()=>ALLMODS.some(x=>x.m.type==="cas"&&PROG[x.m.id]?.score===100)},
];

/* ---------- Catalogue ---------- */
function renderFormations(){
  if(FS.p) return renderCourse();
  const L=lvlOf(GAME.xp||0), s=streakDays(), done=ALLMODS.filter(x=>PROG[x.m.id]?.done).length;
  const nextUp = ALLMODS.find(x=>!PROG[x.m.id]?.done);
  return headerBlock("formations", `${FORMATIONS.length} parcours · ${ALLMODS.length} modules · 17 exercices interactifs`, "Formations", "Apprenez en manipulant : leçons animées, mini-jeux, cas pratiques en conversation et défis chronométrés, autour d'une entreprise fictive, Hexalis.")
  + `<section class="lhero"><div class="ring">${ringSvg(L.top?1:L.cur/L.need,104,"rgba(255,255,255,.18)","#97C7EC")}<div class="rv"><small>Niveau</small><b>${L.i+1}</b></div></div>
      <div style="position:relative;z-index:1;min-width:0"><div class="eyebrow">Votre progression</div><h2>${esc(L.n)}</h2><p>${L.top?"Niveau maximal atteint. Bravo !":`Encore ${L.need-L.cur} XP pour devenir ${esc(LEVELS[L.i+1])}.`} ${done}/${ALLMODS.length} modules terminés.</p>
        <div class="lstats"><span class="lstat">${GAME.xp||0} XP</span><span class="lstat"><span style="color:#E7A9D9;display:flex">${FLAME}</span>${s} ${plural(s,"jour")} d'affilée</span>${nextUp?`<button class="lstat" style="cursor:pointer;color:#fff" data-course-go="${nextUp.p.id}">Reprendre : ${esc(nextUp.m.titre)} →</button>`:""}</div></div>
      <div class="badges" aria-label="Badges">${BADGES.map(b=>`<span class="bdg ${b.ok()?"":"off"}" tabindex="0" data-tip="${esc(b.t)}" aria-label="${esc(b.t)}${b.ok()?"":" (à débloquer)"}">${svg(ICON[b.ic],20,2)}</span>`).join("")}</div></section>`
  + `<div class="fgrid">${FORMATIONS.map(p=>{ const st=pStats(p); const lessons=p.modules.filter(m=>m.type==="lecon").length; const games=p.modules.reduce((n,m)=>n+((m.html||"").match(/data-w=/g)||[]).length,0);
      return `<article class="fcard ${TONE[p.tone]}"><div class="cover"></div><div class="ctile">${tile(TONE_ICON[p.tone],"lg")}</div><div class="meta"><span>${esc(p.niveau)}</span><span>${esc(p.duree)}</span><span>${lessons} leçons · ${games} jeux · 1 cas · 1 défi</span></div>
        <h2>${esc(p.titre)}</h2><p>${esc(p.resume)}</p>
        <div class="foot"><span class="meter"><i style="width:${st.pct}%"></i></span><span class="sub" style="margin:0">${st.d}/${st.n}</span><button class="btn ${st.done?"":"primary"}" data-course="${p.id}">${st.done?"Revoir":st.d?"Reprendre":"Commencer"}</button></div></article>`; }).join("")}</div>`;
}

/* ---------- Page de cours ---------- */
const typeLbl = {lecon:"Leçon", cas:"Cas pratique", quiz:"Défi final"};
const LS = {mid:null, i:0, fin:false};
function curCourse(){ const p=FORMATIONS.find(x=>x.id===FS.p); const m=p.modules.find(x=>x.id===FS.m) || p.modules.find(x=>!PROG[x.id]?.done) || p.modules[0]; FS.m=m.id; return {p,m}; }
function modlistHtml(){
  const {p,m}=curCourse(), st=pStats(p);
  return `<button class="linkbtn" data-back-course style="padding:0">← Toutes les formations</button>
    <div style="display:flex;gap:10px;align-items:center;margin:12px 0 8px">${tile(TONE_ICON[p.tone],TONE[p.tone])}<h2 style="font-size:16.5px">${esc(p.titre)}</h2></div>
    <div class="progress"><span class="meter" style="flex:1"><i style="width:${st.pct}%;background:linear-gradient(90deg,var(--g1),var(--g2))"></i></span>${st.pct} %</div>
    <details style="margin-top:10px"><summary style="font-size:13px;font-weight:650;cursor:pointer">Objectifs du parcours</summary><ul class="objs">${p.objectifs.map(o=>`<li>${esc(o)}</li>`).join("")}</ul></details>
    <ol>${p.modules.map((x,i)=>`<li><button class="m" data-mod="${x.id}" aria-current="${x.id===m.id}"><span class="st ${PROG[x.id]?.done?"done":""}">${PROG[x.id]?.done?"✓":i+1}</span><span><b>${esc(x.titre)}</b><small>${typeLbl[x.type]} · ${esc(x.duree)}${x.type!=="lecon"&&PROG[x.id]?.score!=null?` · ${PROG[x.id].score} %`:""}</small></span></button></li>`).join("")}</ol>`;
}
function refreshModlist(){ const el=$("#modlist"); if(el && FS.p) el.innerHTML=modlistHtml(); }
function renderCourse(){
  const {p,m}=curCourse(); const idx=p.modules.indexOf(m);
  if(LS.mid!==m.id){ LS.mid=m.id; LS.i=0; LS.fin=false; }
  return `${banners()}<div class="course"><aside class="modlist ${TONE[p.tone]}" id="modlist">${modlistHtml()}</aside><div style="min-width:0">
    <div class="ctop"><span id="ctopChips" style="display:contents">${xpChip()}</span></div>
    <article class="lesson"><div class="mt">${tile(m.type==="lecon"?"formations":m.type==="cas"?"equipe":"tests","sm")}${typeLbl[m.type]} ${idx+1} sur ${p.modules.length} · ${esc(m.duree)}</div><h2 class="lt">${esc(m.titre)}</h2><div id="player" class="player"></div></article></div></div>`;
}
function learnMount(){ if(view!=="formations" || !FS.p) return; const {m}=curCourse(); if(m.type==="lecon") paintLesson(); else if(m.type==="cas") paintCase(true); else paintQuiz(); }
function nextModOf(mid){ const x=modById(mid); const i=x.p.modules.findIndex(y=>y.id===mid); return x.p.modules[i+1]||null; }
function gotoMod(id){ FS.m=id; LS.mid=null; render(); const el=document.querySelector(".lesson"); if(el) el.scrollIntoView({block:"start", behavior:REDUCE?"auto":"smooth"}); }

/* ---------- Leçon en diapositives ---------- */
const slideCache = {};
function slidesOf(m){ return slideCache[m.id] || (slideCache[m.id] = m.html.split(/(?=<h3>)/).map(s=>s.trim()).filter(Boolean)); }
function paintLesson(dir){
  const host=$("#player"); if(!host) return; const {m}=curCourse(); const S2=slidesOf(m); const n=S2.length; const next=nextModOf(m.id);
  if(LS.fin){
    host.innerHTML = `<div class="finish"><div class="medal">${svg('<path d="M5 12.5l4.2 4.2L19 7"/>',44,2.6)}</div><h3>Leçon terminée !</h3><p>${esc(m.titre)}. Vous avez gagné de l'expérience ; la suite vous attend.</p>
      <div class="actions-row" style="justify-content:center">${next?`<button class="btn primary next" data-mod="${next.id}">${typeLbl[next.type]} suivant${next.type==="lecon"?"e":""} : ${esc(next.titre)} →</button>`:`<button class="btn primary" data-back-course>Retour aux formations</button>`}<button class="btn" data-replay>Revoir la leçon</button></div></div>`;
    confetti(host.querySelector(".medal"), 90); return;
  }
  const i=Math.min(LS.i,n-1);
  host.innerHTML = `<div class="pbar">${S2.map((_,k)=>`<button data-slide="${k}" class="${k<i?"done":k===i?"cur":""}" aria-label="Diapositive ${k+1}"></button>`).join("")}</div>
    <div class="stage ${dir==="r"?"in-r":dir==="l"?"in-l":""}"><div class="prose">${S2[i]}</div></div>
    <div class="pnav">${i>0?`<button class="btn" data-slide="${i-1}">← Précédent</button>`:"<span></span>"}<span class="cnt">${i+1} / ${n}</span>${i<n-1?`<button class="btn primary next" data-slide="${i+1}">Suivant →</button>`:`<button class="btn primary next" data-lesson-done>Terminer la leçon ✓</button>`}</div>`;
  mountWidgets(host);
}
function goSlide(k){ const {m}=curCourse(); const n=slidesOf(m).length; const dir = k>LS.i ? "r" : "l"; LS.i=Math.max(0,Math.min(n-1,k)); paintLesson(dir); const el=document.querySelector(".lesson"); if(el && el.getBoundingClientRect().top<0) el.scrollIntoView({block:"start"}); }

/* ---------- Mini-jeux ---------- */
const WS = {};
const st = (key, init) => WS[key] || (WS[key]=init());
function wbox(title, body){ return `<div class="wbox"><div class="wh"><span class="wtag">À vous de jouer</span><b>${title}</b><span class="wstat"></span></div>${body}</div>`; }
function wdone(el, key, n, msg){ const s=el.querySelector(".wstat"); if(s){ s.textContent=msg||"Réussi ✓"; s.classList.add("ok"); } if(award("w:"+key, n||15, el.querySelector(".wh")||el)) confetti(el.querySelector(".wh")||el, 70); }
function shuffle(a, seed){ const r=a.slice(); let s=seed||7; for(let i=r.length-1;i>0;i--){ s=(s*9301+49297)%233280; const j=Math.floor(s/233280*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; }
function mountWidgets(root){ root.querySelectorAll("[data-w]").forEach(el=>{ const k=el.dataset.w; const fn = WIDGETS[k] || (k.startsWith("sort-")?(e)=>W_sort(e,k):k.startsWith("swipe-")?(e)=>W_swipe(e,k):k.startsWith("order-")?(e)=>W_order(e,k):null); if(fn){ try{ fn(el); }catch(err){ el.innerHTML=""; } } }); }

const CFG = {
  "sort-lines":{t:"Les trois lignes", bins:["Gouvernance","1re ligne","2e ligne","3e ligne","Externe"], items:[
    ["Comité d'audit","Gouvernance"],["Acheteur qui valide ses commandes","1re ligne"],["Trésorière qui exécute les virements","1re ligne"],["Contrôleur interne","2e ligne"],["Responsable conformité","2e ligne"],["Responsable de l'audit interne","3e ligne"],["Commissaire aux comptes","Externe"],["Responsable de la sécurité des SI","2e ligne"]]},
  "sort-cats":{t:"Catégories de risques", bins:["Stratégique","Opérationnel","Fraude et corruption","SI et cyber"], items:[
    ["Perte d'un client qui pèse 22 % du chiffre d'affaires","Stratégique"],["Arrêt d'une ligne de production","Opérationnel"],["Faux changement de RIB fournisseur","Fraude et corruption"],["Attaque par rançongiciel","SI et cyber"],["Commission versée à un agent pour remporter un marché","Fraude et corruption"],["Rupture technologique d'un concurrent","Stratégique"],["Défaut qualité sur un lot livré","Opérationnel"],["Accès ERP non révoqués après un départ","SI et cyber"]]},
  "sort-types":{t:"Préventif, détectif ou correctif ?", bins:["Préventif","Détectif","Correctif"], items:[
    ["Blocage ERP d'une facture sans commande","Préventif"],["Rapprochement bancaire mensuel","Détectif"],["Rappel des fonds après un virement frauduleux","Correctif"],["Double signature avant paiement","Préventif"],["Revue analytique des marges","Détectif"],["Contre-passation d'une écriture erronée","Correctif"]]},
  "sort-qualif":{t:"Quel niveau de gravité ?", bins:["Déficience","Déficience significative","Faiblesse majeure"], items:[
    ["Un rapprochement bancaire réalisé avec 3 jours de retard, sans écart","Déficience"],["Une signature manquante sur 25 revues, contrôle compensatoire efficace","Déficience"],["7 comptes ERP actifs après départ, dont 2 avec droits de paiement","Déficience significative"],["Revue des écritures de clôture jamais réalisée ; le CAC découvre un CA surévalué de 4 M€","Faiblesse majeure"]]},
  "swipe-legal":{t:"Vrai ou faux ?", l:"Faux", r:"Vrai", items:[
    ["Une entreprise de 60 salariés doit disposer d'une procédure d'alerte interne.","r","Oui : l'obligation s'applique dès 50 salariés depuis la loi du 21 mars 2022."],
    ["La loi Sapin II s'applique dès 250 salariés.","l","Non : le seuil est de 500 salariés et plus de 100 M€ de chiffre d'affaires."],
    ["Le comité d'audit suit l'efficacité du contrôle interne et de la gestion des risques.","r","C'est l'une de ses missions légales."],
    ["Le contrôleur interne doit exécuter lui-même les contrôles clés.","l","Non : les contrôles appartiennent à la 1re ligne ; le contrôleur interne les conçoit avec elle et les teste."],
    ["Le rapport de gestion d'une société cotée décrit ses procédures de contrôle interne relatives à l'information financière.","r","Oui, au titre de l'article L. 22-10-35 du Code de commerce."]]},
  "swipe-cor":{t:"Scénario à risque ?", l:"Pas de risque particulier", r:"Scénario à risque", items:[
    ["Un agent local demande une commission de 8 %, payable en espèces, pour un marché public.","r","Signal majeur : intermédiaire, rémunération anormale, paiement en espèces."],
    ["Un fournisseur offre un stylo publicitaire à ses clients.","l","Cadeau de valeur symbolique, sans contrepartie : acceptable selon la plupart des codes de conduite."],
    ["En plein appel d'offres, un fournisseur invite l'acheteur à un Grand Prix à Monaco.","r","Avantage significatif pendant une décision d'achat : risque de corruption privée."],
    ["Un mécénat est proposé à l'association présidée par l'élu qui instruit votre permis.","r","Risque de trafic d'influence : à soumettre à la conformité."],
    ["Paiement d'une facture conforme à la commande et au contrat.","l","Opération normale, documentée et validée."]]},
  "swipe-sod":{t:"Une même personne peut-elle…", l:"Incompatible", r:"Compatible", items:[
    ["Créer un fournisseur et saisir ses factures ?","l","Incompatible : elle pourrait créer un fournisseur fictif et le payer."],
    ["Consulter les états de paiement et saisir une facture ?","r","La consultation seule ne donne aucun pouvoir sur l'opération."],
    ["Émettre les paiements et réaliser le rapprochement bancaire ?","l","Incompatible : elle contrôlerait son propre travail et pourrait masquer un détournement."],
    ["Valider une commande et réceptionner la marchandise ?","l","Incompatible : elle pourrait attester une réception fictive de ce qu'elle a commandé."],
    ["Saisir une facture et la classer dans la GED ?","r","Deux tâches d'enregistrement, sans pouvoir d'autorisation ni accès aux fonds."]]},
  "swipe-cyber":{t:"Bon réflexe ou risque ?", l:"Risque", r:"Bon réflexe", items:[
    ["Activer la double authentification sur la messagerie.","r","C'est l'une des mesures les plus efficaces contre le vol de comptes."],
    ["Conserver l'unique sauvegarde sur le même serveur que les données.","l","Un rançongiciel chiffrera aussi la sauvegarde. Il faut une copie hors ligne."],
    ["Coller un contrat confidentiel dans une IA grand public pour le résumer.","l","Fuite possible de données : utilisez un outil validé par l'entreprise."],
    ["Signaler à la DSI un e-mail suspect, même après avoir cliqué.","r","Signaler vite permet de contenir l'incident."],
    ["Reporter de trois mois les mises à jour de sécurité.","l","Les failles connues sont exploitées en quelques jours."],
    ["Tester une restauration de sauvegarde chaque trimestre.","r","Une sauvegarde non testée n'est qu'une hypothèse."]]},
  "order-tech":{t:"De la moins à la plus probante", labels:true, items:[["Entretien","On interroge l'exécutant"],["Observation","On voit le contrôle s'exécuter"],["Inspection","On examine la preuve documentaire"],["Réexécution","On refait le contrôle soi-même"]]},
  "order-constat":{t:"La structure d'un constat", labels:true, items:[
    ["Critère","La procédure prévoit la désactivation des accès ERP le jour du départ."],
    ["Constat","Sur 40 comptes testés, 7 appartiennent à des salariés partis, dont 2 avec droits de paiement."],
    ["Cause","La DSI n'est pas informée automatiquement des départs."],
    ["Conséquence","Risque d'utilisation frauduleuse d'un compte pour émettre des paiements."],
    ["Recommandation","Désactiver les 7 comptes et automatiser la transmission des sorties RH à la DSI."]]},
};

const WIDGETS = {
  flash(el){
    const key="flash", cards=[["Assurance raisonnable","Le dispositif réduit fortement les risques sans jamais pouvoir garantir l'absence totale d'erreur ou de fraude."],["Collusion","Deux personnes complices neutralisent un contrôle fondé sur l'intervention de plusieurs personnes."],["Contournement par la direction","Un dirigeant impose une dérogation ou une écriture en passant outre les contrôles."],["Coût / bénéfice","Un contrôle ne doit pas coûter plus cher que le risque qu'il couvre."]];
    const s=st(key,()=>({seen:new Set()}));
    el.innerHTML = wbox("Retournez les cartes", `<div class="flips">${cards.map((c,i)=>`<button class="flip ${s.seen.has(i)?"on":""}" data-i="${i}" aria-label="${esc(c[0])}"><span class="in"><span class="fc">${esc(c[0])}<small>Touchez pour retourner</small></span><span class="bc">${esc(c[1])}<small>Touchez pour revoir le terme</small></span></span></button>`).join("")}</div>`);
    const stat=()=>{ el.querySelector(".wstat").textContent=`${s.seen.size}/${cards.length}`; if(s.seen.size===cards.length) wdone(el,key,10,"Toutes retournées ✓"); };
    el.querySelectorAll(".flip").forEach(b=>b.addEventListener("click",e=>{ e.stopPropagation(); if(b.classList.contains("turning")) return;
      const swap=()=>{ b.classList.toggle("on"); s.seen.add(+b.dataset.i); stat(); };
      if(REDUCE){ swap(); return; } b.classList.add("turning"); setTimeout(()=>{ swap(); b.classList.remove("turning"); },200); })); stat();
  },
  coso(el){
    const key="coso", L=[["Environnement de contrôle","#003865",["Intégrité et valeurs éthiques","Indépendance et supervision du conseil","Structures, pouvoirs et responsabilités","Compétences : attirer, développer, fidéliser","Responsabilité de chacun"]],["Évaluation des risques","#800064",["Objectifs clairs","Identification et analyse des risques","Prise en compte du risque de fraude","Analyse des changements significatifs"]],["Activités de contrôle","#0084D4",["Choix des activités de contrôle","Contrôles généraux informatiques","Déploiement par politiques et procédures"]],["Information et communication","#BA6AA7",["Information pertinente et de qualité","Communication interne","Communication externe"]],["Activités de pilotage","#3C3732",["Évaluations continues ou ponctuelles","Communication des déficiences"]]];
    const s=st(key,()=>({seen:new Set(), cur:-1}));
    el.innerHTML = wbox("Explorez le COSO 2013", `<div class="coso"><div class="layers">${L.map((l,i)=>`<button class="layer ${s.seen.has(i)?"seen":""}" style="--lc:${l[1]}" data-i="${i}" aria-pressed="${s.cur===i}"><span class="n">${i+1}</span>${esc(l[0])}<span class="ck">✓</span></button>`).join("")}</div><div class="princ" aria-live="polite"><div class="ph">Choisissez une composante pour voir ses principes.</div></div></div>`);
    const show=i=>{ s.cur=i; s.seen.add(i); let start=L.slice(0,i).reduce((n,l)=>n+l[2].length,0);
      el.querySelectorAll(".layer").forEach(b=>{ const k=+b.dataset.i; b.setAttribute("aria-pressed", k===i); b.classList.toggle("seen", s.seen.has(k)); });
      el.querySelector(".princ").innerHTML = `<h4>${esc(L[i][0])}</h4>` + L[i][2].map((p,j)=>`<div style="animation-delay:${j*70}ms"><b>${start+j+1}</b>${esc(p)}</div>`).join("");
      el.querySelector(".wstat").textContent=`${s.seen.size}/5 explorées`; if(s.seen.size===5) wdone(el,key,15,"5/5 explorées ✓"); };
    el.querySelectorAll(".layer").forEach(b=>b.addEventListener("click",()=>show(+b.dataset.i)));
    el.querySelector(".wstat").textContent=`${s.seen.size}/5 explorées`; if(s.cur>=0) show(s.cur);
  },
  bowtie(el){
    const key="bowtie", s=st(key,()=>({p:false,d:false}));
    const link = id => `<div class="blink" id="${id}"><svg viewBox="0 0 80 60" preserveAspectRatio="none"><path class="f" d="M2 30 H78"/><path d="M70 22 L78 30 L70 38" fill="none" stroke="var(--line-2)" stroke-width="3"/></svg><span class="shield">${svg(ICON.controles,20,2)}</span></div>`;
    el.innerHTML = wbox("Placez les contrôles sur le nœud papillon", `<p class="sub" style="margin:0 0 10px;font-size:13px">Exemple : virement frauduleux de 1,2 M€ après un faux changement de RIB.</p>
      <div class="bow"><div class="bnode" id="bwC"><small>Cause</small><b>Changement de RIB accepté sur simple e-mail</b></div>${link("bwL1")}<div class="bnode ev" id="bwE"><small>Événement redouté</small><b>Virement vers un compte frauduleux</b></div>${link("bwL2")}<div class="bnode" id="bwQ"><small>Conséquence</small><b id="bwLoss">Perte de 1 200 000 €</b></div></div>
      <div class="bctl"><button class="tog" data-k="p" aria-pressed="${s.p}"><span class="sw"></span>Contre-appel du fournisseur (préventif)</button><button class="tog" data-k="d" aria-pressed="${s.d}"><span class="sw"></span>Revue quotidienne des virements et rappel des fonds (détectif)</button></div>
      <div class="kpi2"><div><small>Probabilité</small><b id="bwP">—</b></div><div><small>Perte potentielle</small><b id="bwA">—</b></div><div><small>Criticité</small><b id="bwS">—</b></div></div>`);
    let shownLoss=null;
    const upd=()=>{ const P=s.p?1:4, loss=s.d?180000:1200000, I=s.d?2:4, sc=P*I, L=level(sc);
      el.querySelector("#bwL1").classList.toggle("off",s.p); el.querySelector("#bwL2").classList.toggle("off",s.d);
      el.querySelector("#bwE").classList.toggle("dim",s.p); el.querySelector("#bwQ").classList.toggle("dim",s.d||s.p);
      el.querySelector("#bwP").textContent = PROBA[P-1];
      const sEl=el.querySelector("#bwS"); sEl.innerHTML=`${sc} <span class="pill ${L.p}" style="font-family:var(--f-body);font-size:12px;vertical-align:3px">${L.n}</span>`;
      animNum(el.querySelector("#bwA"), shownLoss??loss, loss, v=>Math.round(v).toLocaleString("fr-FR")+" €"); el.querySelector("#bwLoss").textContent=`Perte de ${loss.toLocaleString("fr-FR")} €`; shownLoss=loss;
      if(s.p && s.d) wdone(el,key,15,"Risque maîtrisé ✓"); };
    el.querySelectorAll(".tog").forEach(b=>b.addEventListener("click",()=>{ s[b.dataset.k]=!s[b.dataset.k]; b.setAttribute("aria-pressed",s[b.dataset.k]); upd(); })); upd();
  },
  matrix(el){
    const key="matrix", s=st(key,()=>({p:4,i:5,c:{}}));
    const C=[["Contre-appel systématique du fournisseur",-2,0],["Double validation des paiements",-1,0],["Délai de 48 h avant le premier paiement sur un nouveau RIB",0,-1],["Assurance fraude",0,-1]];
    const cells=[]; for(let i=5;i>=1;i--) for(let p=1;p<=5;p++) cells.push(`<span class="c${level(p*i).c}"></span>`);
    el.innerHTML = wbox("Simulateur de risque résiduel", `<div class="mx"><div><div class="mxg">${cells.join("")}<span class="dot i" id="mxI">I</span><span class="dot r" id="mxR">R</span></div><div class="legend" style="margin-top:8px"><span><i style="border:2px dashed #3C3732;border-radius:50%"></i>Inhérent</span><span><i style="background:#003865;border-radius:50%"></i>Résiduel</span></div></div>
      <div><div class="sl"><label for="mxP">Probabilité inhérente <b id="mxPv"></b></label><input type="range" id="mxP" min="1" max="5" value="${s.p}"></div><div class="sl"><label for="mxIm">Impact inhérent <b id="mxIv"></b></label><input type="range" id="mxIm" min="1" max="5" value="${s.i}"></div>
      <div class="ctls">${C.map((c,k)=>`<button class="tog" data-k="${k}" aria-pressed="${!!s.c[k]}"><span class="sw"></span>${esc(c[0])}</button>`).join("")}</div>
      <div class="kpi2"><div><small>Inhérent</small><b id="mxSi"></b></div><div><small>Résiduel</small><b id="mxSr"></b></div></div></div></div>`);
    const pos=(d,p,i)=>{ d.style.left=((p-.5)/5*100)+"%"; d.style.top=((5-i+.5)/5*100)+"%"; };
    const upd=()=>{ let rp=s.p, ri=s.i; C.forEach((c,k)=>{ if(s.c[k]){ rp+=c[1]; ri+=c[2]; } }); rp=Math.max(1,rp); ri=Math.max(1,ri);
      pos(el.querySelector("#mxI"),s.p,s.i); pos(el.querySelector("#mxR"),rp,ri);
      el.querySelector("#mxPv").textContent=`${s.p} · ${PROBA[s.p-1]}`; el.querySelector("#mxIv").textContent=`${s.i} · ${IMPACT[s.i-1]}`;
      const a=s.p*s.i, b=rp*ri, La=level(a), Lb=level(b);
      el.querySelector("#mxSi").innerHTML=`${a} <span class="pill ${La.p}" style="font-family:var(--f-body);font-size:12px;vertical-align:3px">${La.n}</span>`;
      el.querySelector("#mxSr").innerHTML=`${b} <span class="pill ${Lb.p}" style="font-family:var(--f-body);font-size:12px;vertical-align:3px">${Lb.n}</span>`;
      if(a>=15 && b<10) wdone(el,key,20,"Risque ramené sous le seuil ✓"); };
    el.querySelector("#mxP").addEventListener("input",e=>{ s.p=+e.target.value; upd(); });
    el.querySelector("#mxIm").addEventListener("input",e=>{ s.i=+e.target.value; upd(); });
    el.querySelectorAll(".tog").forEach(b=>b.addEventListener("click",()=>{ const k=b.dataset.k; s.c[k]=!s.c[k]; b.setAttribute("aria-pressed",s.c[k]); upd(); }));
    requestAnimationFrame(upd);
  },
  triangle(el){
    const key="triangle", s=st(key,()=>({m:{}, cur:[1,1,1]}));
    const M=[["Objectifs commerciaux réalistes",0,.4],["Séparation des tâches",1,.35],["Contre-appel avant paiement",1,.25],["Revue analytique mensuelle",1,.15],["Code de conduite porté par la direction",2,.4],["Dispositif d'alerte interne",2,.25]];
    el.innerHTML = wbox("Faites rétrécir le triangle de la fraude", `<div class="tri"><svg viewBox="0 0 300 270" role="img" aria-label="Triangle de la fraude"><polygon points="150,22 32,232 268,232" fill="none" stroke="var(--line-2)" stroke-dasharray="4 5"/><polygon id="trP" fill="rgba(128,0,100,.22)" stroke="#800064" stroke-width="2.5" stroke-linejoin="round"/><text class="lbl" x="150" y="14" text-anchor="middle">Pression</text><text class="lbl" x="28" y="256" text-anchor="start">Opportunité</text><text class="lbl" x="272" y="256" text-anchor="end">Rationalisation</text></svg>
      <div><div class="ctls">${M.map((x,k)=>`<button class="tog" data-k="${k}" aria-pressed="${!!s.m[k]}"><span class="sw"></span>${esc(x[0])}</button>`).join("")}</div>
      <div style="margin-top:14px"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700"><span>Risque de fraude</span><span id="trV"></span></div><div class="meterb"><i id="trM"></i></div></div></div></div>`);
    const C=[150,160], D=[[0,-138],[-118,72],[118,72]];
    const target=()=>{ const v=[1,1,1]; M.forEach((x,k)=>{ if(s.m[k]) v[x[1]]-=x[2]; }); return v.map(x=>Math.max(.12,x)); };
    let raf=0;
    const draw=v=>{ el.querySelector("#trP")?.setAttribute("points", D.map((d,k)=>`${C[0]+d[0]*(.25+.75*v[k])},${C[1]+d[1]*(.25+.75*v[k])}`).join(" ")); };
    const upd=()=>{ const t=target(), from=s.cur.slice(), t0=performance.now(), dur=REDUCE?1:650; cancelAnimationFrame(raf);
      const step=now=>{ const k=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-k,3); s.cur=from.map((f,j)=>f+(t[j]-f)*e); draw(s.cur); if(k<1) raf=requestAnimationFrame(step); }; raf=requestAnimationFrame(step);
      const idx=Math.round(Math.cbrt(t[0]*t[1]*t[2])*100); const m=el.querySelector("#trM"); m.style.width=idx+"%"; m.style.background= idx>=60?"var(--crit)":idx>=35?"var(--warn)":"var(--ok)"; el.querySelector("#trV").textContent=idx+" %";
      if(idx<35) wdone(el,key,15,"Fraude bien prévenue ✓"); };
    el.querySelectorAll(".tog").forEach(b=>b.addEventListener("click",()=>{ const k=b.dataset.k; s.m[k]=!s.m[k]; b.setAttribute("aria-pressed",s.m[k]); upd(); }));
    draw(s.cur); upd();
  },
  phish(el){
    const key="phish", s=st(key,()=>({f:new Set()}));
    const F2={1:["Nom de domaine","hexalis-group.com au lieu de hexalis.fr : une adresse imitée."],2:["Urgence","Un délai très court empêche toute vérification."],3:["Confidentialité","Interdire d'en parler isole la victime et court-circuite les contrôles."],4:["Contournement","« Exceptionnellement, sans la double signature » : on vous demande d'enjamber la procédure."],5:["Compte inhabituel","Un nouveau compte à l'étranger, sans lien avec un fournisseur connu."]};
    el.innerHTML = wbox("Trouvez les 5 signaux d'alerte", `<div class="mail"><div class="mh"><span><b>De :</b> Hélène Marchal &lt;<span data-f="1">h.marchal@hexalis-group.com</span>&gt;</span><span><b>À :</b> Claire, Trésorerie</span><span><b>Objet :</b> <span data-f="0">Dossier Atlas</span> – <span data-f="2">URGENT avant 18 h 30</span></span></div>
      <div class="mb"><span data-f="0">Bonjour Claire,</span><br><br><span data-f="0">Nous finalisons l'acquisition d'une société au Maroc.</span> <span data-f="3">L'opération est strictement confidentielle : n'en parlez à personne, pas même au DAF.</span> <span data-f="0">Maître Delaunay, notre avocat, vous appellera pour les détails.</span><br><br><span data-f="4">Merci de passer exceptionnellement le virement sans la double signature</span>, <span data-f="0">d'un montant de 1 800 000 €,</span> <span data-f="5">sur le nouveau compte ouvert à Hong Kong</span> <span data-f="0">indiqué en pièce jointe.</span><br><br><span data-f="0">Je compte sur votre discrétion.</span><br><span data-f="0">Hélène</span></div></div><div class="flags"></div><div class="wfb" hidden></div>`);
    const flags=el.querySelector(".flags"), fb=el.querySelector(".wfb");
    const paint=()=>{ flags.innerHTML=[...s.f].sort().map(k=>`<div><b>${esc(F2[k][0])}</b><span>${esc(F2[k][1])}</span></div>`).join(""); el.querySelector(".wstat").textContent=`${s.f.size}/5 trouvés`; el.querySelectorAll("[data-f]").forEach(x=>x.classList.toggle("found", s.f.has(+x.dataset.f))); if(s.f.size===5) wdone(el,key,20,"5/5 trouvés ✓"); };
    el.querySelectorAll("[data-f]").forEach(x=>x.addEventListener("click",()=>{ const k=+x.dataset.f; if(!k){ x.classList.remove("nope"); void x.offsetWidth; x.classList.add("nope"); fb.hidden=false; fb.className="wfb"; fb.textContent="Rien d'anormal dans ce passage. Cherchez encore."; return; } fb.hidden=true; if(!s.f.has(k)){ s.f.add(k); paint(); } }));
    paint();
  },
  sample(el){
    const key="sample", s=st(key,()=>({step:0, picks:[], ex:-1, ans:-1}));
    el.innerHTML = wbox("Test d'un contrôle quotidien", `<div class="steps2">
      <div class="st2" id="s1"><span class="k">1</span><span>Vérifier la complétude : journal système <b>250</b> exécutions · extraction reçue <b class="counter" id="smC">0</b></span><button class="btn sm" id="smB1">Vérifier</button></div>
      <div class="st2" id="s2"><span class="k">2</span><span>Taille d'échantillon pour un contrôle quotidien : <b>25</b> (repère usuel 20 à 40)</span><button class="btn sm" id="smB2" disabled>Tirer 25 éléments au hasard</button></div>
      <div class="st2" id="s3"><span class="k">3</span><span>Conclure sur le résultat</span></div></div>
      <div class="pop" id="smPop">${Array.from({length:250},()=>"<i></i>").join("")}</div><div id="smQ"></div>`);
    const dots=[...el.querySelectorAll("#smPop i")];
    const showQ=()=>{ const q=el.querySelector("#smQ"); const C=["Contrôle efficace : 24 sur 25, c'est suffisant.","Comprendre la cause de l'exception, puis étendre l'échantillon ou conclure à une déficience.","Remplacer l'élément en exception par un autre tiré au hasard."];
      q.innerHTML=`<p style="margin:10px 0 8px;font-weight:650">1 exception sur 25. Que faites-vous ?</p><div class="choices">${C.map((c,j)=>`<button class="choice ${s.ans<0?"":j===1?"right":j===s.ans?"wrong":"dim"}" data-a="${j}" ${s.ans>=0?"disabled":""}><span class="k">${"ABC"[j]}</span><span>${esc(c)}</span></button>`).join("")}</div>${s.ans>=0?`<div class="wfb ${s.ans===1?"ok":"ko"}">${s.ans===1?"Exact. ":"Pas tout à fait. "}Une exception n'est jamais ignorée ni remplacée : on en cherche la cause (ponctuelle ou systémique), puis on étend l'échantillon ou on qualifie une déficience.</div>`:""}`;
      q.querySelectorAll("[data-a]").forEach(b=>b.addEventListener("click",()=>{ s.ans=+b.dataset.a; el.querySelector("#s3").classList.add("ok"); showQ(); wdone(el,key,20,"Test documenté ✓"); })); };
    const restore=()=>{ if(s.step>=1){ el.querySelector("#smC").textContent="250 ✓"; el.querySelector("#s1").classList.add("ok"); el.querySelector("#smB1").disabled=true; el.querySelector("#smB2").disabled=false; }
      if(s.step>=2){ s.picks.forEach(k=>dots[k].classList.add("s")); if(s.ex>=0){ dots[s.ex].classList.remove("s"); dots[s.ex].classList.add("x"); } el.querySelector("#s2").classList.add("ok"); el.querySelector("#smB2").disabled=true; showQ(); } };
    el.querySelector("#smB1").addEventListener("click",()=>{ const b=el.querySelector("#smB1"); b.disabled=true; animNum(el.querySelector("#smC"),0,250,v=>String(Math.round(v)),900).then(()=>{ el.querySelector("#smC").textContent="250 ✓"; el.querySelector("#s1").classList.add("ok"); s.step=1; el.querySelector("#smB2").disabled=false; }); });
    el.querySelector("#smB2").addEventListener("click",async()=>{ el.querySelector("#smB2").disabled=true; const pool=[...Array(250).keys()]; const picks=[]; while(picks.length<25){ const k=pool.splice(Math.floor(Math.random()*pool.length),1)[0]; picks.push(k); }
      s.picks=picks; s.ex=picks[Math.floor(Math.random()*25)];
      for(const k of picks){ dots[k].classList.add("s"); await sleep(55); }
      await sleep(250); dots[s.ex].classList.remove("s"); dots[s.ex].classList.add("x"); s.step=2; el.querySelector("#s2").classList.add("ok"); showQ(); });
    restore();
  },
};
function animNum(node, from, to, fmt, dur=700){
  return new Promise(res=>{ if(!node){ res(); return; } if(REDUCE||from===to){ node.textContent=fmt(to); res(); return; } const t0=performance.now();
    const step=now=>{ const k=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-k,3); node.textContent=fmt(from+(to-from)*e); if(k<1) requestAnimationFrame(step); else res(); }; requestAnimationFrame(step); });
}
function W_sort(el, key){
  const c=CFG[key]; const s=st(key,()=>({placed:{}, sel:-1}));
  const order=shuffle(c.items.map((_,i)=>i), key.length*13);
  el.innerHTML = wbox(esc(c.t), `<div class="pool"></div><div class="bins">${c.bins.map((b,j)=>`<div class="bin" data-b="${j}" role="button" tabindex="0" aria-label="${esc(b)}"><b>${esc(b)}</b></div>`).join("")}</div><div class="wfb" hidden></div>`);
  const pool=el.querySelector(".pool"), fb=el.querySelector(".wfb");
  const paint=()=>{ pool.innerHTML=order.filter(i=>!s.placed[i]).map(i=>`<button class="chip2" draggable="true" data-i="${i}" aria-pressed="${s.sel===i}">${esc(c.items[i][0])}</button>`).join("");
    el.querySelectorAll(".bin").forEach(b=>{ const j=+b.dataset.b; b.querySelectorAll(".chip2").forEach(x=>x.remove()); order.filter(i=>s.placed[i] && c.bins.indexOf(c.items[i][1])===j).forEach(i=>b.insertAdjacentHTML("beforeend",`<span class="chip2 placed">${esc(c.items[i][0])}</span>`)); });
    const n=Object.keys(s.placed).length; el.querySelector(".wstat").textContent=`${n}/${c.items.length}`; if(n===c.items.length) wdone(el,key,15,"Tout est classé ✓"); };
  const tryPlace=(i,j,binEl)=>{ if(i<0||s.placed[i]) return; const ok=c.bins[j]===c.items[i][1];
    if(ok){ s.placed[i]=1; s.sel=-1; fb.hidden=true; paint(); const last=binEl.querySelector(".chip2:last-of-type"); last?.classList.add("anim-pop"); }
    else { binEl.classList.add("bad"); setTimeout(()=>binEl.classList.remove("bad"),500); const chip=pool.querySelector(`[data-i="${i}"]`); chip?.classList.remove("anim-shake"); void chip?.offsetWidth; chip?.classList.add("anim-shake"); fb.hidden=false; fb.className="wfb ko"; fb.textContent=`« ${c.items[i][0]} » ne va pas dans « ${c.bins[j]} ». Réessayez.`; } };
  pool.addEventListener("click",e=>{ const b=e.target.closest(".chip2[data-i]"); if(!b) return; s.sel = s.sel===+b.dataset.i ? -1 : +b.dataset.i; pool.querySelectorAll(".chip2").forEach(x=>x.setAttribute("aria-pressed", +x.dataset.i===s.sel)); });
  pool.addEventListener("dragstart",e=>{ const b=e.target.closest(".chip2[data-i]"); if(!b) return; s.sel=+b.dataset.i; try{ e.dataTransfer.setData("text/plain",b.dataset.i); }catch(_){} });
  el.querySelectorAll(".bin").forEach(b=>{ const j=+b.dataset.b;
    b.addEventListener("click",()=>tryPlace(s.sel,j,b));
    b.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); tryPlace(s.sel,j,b); } });
    b.addEventListener("dragover",e=>{ e.preventDefault(); b.classList.add("hot"); });
    b.addEventListener("dragleave",()=>b.classList.remove("hot"));
    b.addEventListener("drop",e=>{ e.preventDefault(); b.classList.remove("hot"); tryPlace(s.sel,j,b); }); });
  paint();
}
function W_swipe(el, key){
  const c=CFG[key]; const s=st(key,()=>({i:0, good:0}));
  el.innerHTML = wbox(esc(c.t), `<div class="swipe"><div class="stack"></div><div class="sbtns"><button class="l">← ${esc(c.l)}</button><button class="r">${esc(c.r)} →</button></div><div class="sfb" aria-live="polite"></div></div>`);
  const stack=el.querySelector(".stack"), fb=el.querySelector(".sfb");
  const paint=()=>{ el.querySelector(".wstat").textContent = `${Math.min(s.i,c.items.length)}/${c.items.length} · ${s.good} ✓`;
    if(s.i>=c.items.length){ stack.innerHTML=`<div class="scard" style="cursor:default;flex-direction:column;gap:6px"><span style="font-family:var(--f-display);font-size:30px">${s.good}/${c.items.length}</span><span style="font-size:14px;font-weight:500">${s.good===c.items.length?"Parfait, sans faute !":"Bien joué. Relisez les explications pour retenir les pièges."}</span><button class="btn sm" data-again style="margin-top:6px">Rejouer</button></div>`;
      el.querySelector(".sbtns").hidden=true; stack.querySelector("[data-again]").addEventListener("click",()=>{ s.i=0; s.good=0; fb.textContent=""; el.querySelector(".sbtns").hidden=false; paint(); });
      wdone(el,key,15,`${s.good}/${c.items.length} ✓`); return; }
    el.querySelector(".sbtns").hidden=false;
    stack.innerHTML = (s.i+1<c.items.length?`<div class="scard next">${esc(c.items[s.i+1][0])}</div>`:"") + `<div class="scard top" tabindex="0"><span class="hint l">${esc(c.l)}</span><span class="hint r">${esc(c.r)}</span>${esc(c.items[s.i][0])}</div>`;
    bindDrag(stack.querySelector(".scard.top")); };
  const decide=side=>{ const card=stack.querySelector(".scard.top"); if(!card || card.dataset.gone) return; card.dataset.gone=1; const it=c.items[s.i], ok=it[1]===side; if(ok) s.good++;
    card.style.transform=""; card.classList.add(side==="l"?"fly-l":"fly-r");
    fb.innerHTML=`<b style="color:${ok?"var(--ok)":"var(--crit)"}">${ok?"Exact.":"Raté."}</b> ${esc(it[2])}`;
    s.i++; setTimeout(paint, REDUCE?10:380); };
  const bindDrag=card=>{ if(!card) return; let x0=null, dx=0;
    card.addEventListener("pointerdown",e=>{ x0=e.clientX; dx=0; card.setPointerCapture?.(e.pointerId); card.style.transition="none"; });
    card.addEventListener("pointermove",e=>{ if(x0===null) return; dx=e.clientX-x0; card.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`; card.querySelector(".hint.l").style.opacity=dx<-20?Math.min(1,-dx/90):0; card.querySelector(".hint.r").style.opacity=dx>20?Math.min(1,dx/90):0; });
    const end=()=>{ if(x0===null) return; x0=null; card.style.transition=""; if(Math.abs(dx)>90) decide(dx<0?"l":"r"); else { card.style.transform=""; card.querySelectorAll(".hint").forEach(h=>h.style.opacity=0); } };
    card.addEventListener("pointerup",end); card.addEventListener("pointercancel",end);
    card.addEventListener("keydown",e=>{ if(e.key==="ArrowLeft") decide("l"); if(e.key==="ArrowRight") decide("r"); }); };
  el.querySelector(".sbtns .l").addEventListener("click",()=>decide("l"));
  el.querySelector(".sbtns .r").addEventListener("click",()=>decide("r"));
  paint();
}
function W_order(el, key){
  const c=CFG[key]; const s=st(key,()=>({n:0}));
  const order=shuffle(c.items.map((_,i)=>i), key.length*7+3);
  el.innerHTML = wbox(esc(c.t), `<div class="slots">${c.items.map((_,i)=>`<div class="slot" data-s="${i}"><span class="k">${i+1}</span><span class="tx"></span></div>`).join("")}</div><div class="pool"></div><div class="wfb" hidden></div>`);
  const pool=el.querySelector(".pool"), fb=el.querySelector(".wfb");
  const paint=()=>{ el.querySelectorAll(".slot").forEach(sl=>{ const i=+sl.dataset.s; if(i<s.n && !sl.classList.contains("fill")){ sl.classList.add("fill"); sl.querySelector(".tx").innerHTML=`<b>${esc(c.items[i][0])}</b>${esc(c.items[i][1])}`; } });
    pool.innerHTML = order.filter(i=>i>=s.n).map(i=>`<button class="chip2" data-i="${i}">${c.labels?`<b style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--accent)">${esc(c.items[i][0])}</b>`:""}${esc(c.items[i][1])}</button>`).join("");
    el.querySelector(".wstat").textContent=`${s.n}/${c.items.length}`; if(s.n===c.items.length) wdone(el,key,15,"Dans l'ordre ✓"); };
  pool.addEventListener("click",e=>{ const b=e.target.closest(".chip2[data-i]"); if(!b) return; const i=+b.dataset.i;
    if(i===s.n){ s.n++; fb.hidden=true; paint(); } else { b.classList.remove("anim-shake"); void b.offsetWidth; b.classList.add("anim-shake"); fb.hidden=false; fb.className="wfb ko"; fb.textContent=`Ce n'est pas encore l'étape ${s.n+1}. Cherchez ce qui vient juste après.`; } });
  paint();
}

/* ---------- Cas pratique en conversation ---------- */
let caseToken=0;
function caseRisk(m, answers){ let r=50; answers.forEach((a,i)=>{ r += m.etapes[i].choix[a].ok ? -12 : 18; r=Math.max(5,Math.min(95,r)); }); return r; }
function bubble(kind, who, html, extra=""){
  const av = kind==="me" ? `<span class="who2" style="background:var(--accent)">${svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.2-6 8-6s7 2 8 6"/>',18)}</span>` : kind==="sys" ? tile("aujourdhui","") : `<span class="who2" style="background:linear-gradient(135deg,#0088CE,#003865)">${svg(ICON.controles,18,2)}</span>`;
  return `<div class="msg ${kind==="me"?"me":""} ${extra}">${kind==="me"?"":av}<div class="bub"><small>${esc(who)}</small>${html}</div>${kind==="me"?av:""}</div>`;
}
function caseHistoryHtml(m, upto){
  let h = bubble("sys","Mise en situation", esc(m.contexte));
  for(let i=0;i<upto;i++){ const s=m.etapes[i], a=CAS.answers[i], c=s.choix[a];
    h += bubble("sys",`Étape ${i+1}`, esc(s.q)) + bubble("me","Vous", esc(c.t)) + bubble("men", c.ok?"Vigie · bonne décision":"Vigie · à revoir", esc(c.fb)+(c.ok?"":`<br><br><b>Meilleure option :</b> ${esc(s.choix.find(x=>x.ok).t)}`), c.ok?"ok":"ko"); }
  return h;
}
function meterHtml(r){ return `<div class="meterbar"><span>Exposition au risque</span><div class="meterb"><i id="cmM" style="width:${r}%;background:${r>=60?"var(--crit)":r>=35?"var(--warn)":"var(--ok)"}"></i></div><span id="cmV">${r} %</span></div>`; }
function setMeter(r){ const i=$("#cmM"); if(i){ i.style.width=r+"%"; i.style.background = r>=60?"var(--crit)":r>=35?"var(--warn)":"var(--ok)"; } const v=$("#cmV"); if(v) v.textContent=r+" %"; }
async function paintCase(initial){
  const host=$("#player"); if(!host) return; const {m}=curCourse();
  if(CAS.mid!==m.id) CAS={mid:m.id, answers:[], shown:0};
  const tok=++caseToken; const n=CAS.answers.length;
  host.innerHTML = meterHtml(caseRisk(m,CAS.answers)) + `<div class="chat" id="chat">${caseHistoryHtml(m,n)}</div>`;
  await showStep(tok, initial && CAS.shown<=n);
}
async function typing(chat, tok, ms){ const t=document.createElement("div"); t.className="msg typing"; t.innerHTML=`${tile("aujourdhui","")}<div class="bub"><i></i><i></i><i></i></div>`; chat.appendChild(t); await sleep(ms); t.remove(); return tok===caseToken; }
async function showStep(tok, animate){
  const {m}=curCourse(); const chat=$("#chat"); if(!chat) return; const i=CAS.answers.length;
  if(i>=m.etapes.length){ endCase(); return; }
  if(animate){ if(!(await typing(chat,tok,850))) return; }
  CAS.shown=Math.max(CAS.shown,i+1);
  chat.insertAdjacentHTML("beforeend", bubble("sys",`Étape ${i+1} sur ${m.etapes.length}`, esc(m.etapes[i].q)));
  if(animate) await sleep(250); if(tok!==caseToken) return;
  chat.insertAdjacentHTML("beforeend", `<div class="replies">${m.etapes[i].choix.map((c,j)=>`<button class="reply" data-reply="${j}">${esc(c.t)}</button>`).join("")}</div>`);
  chat.lastElementChild.querySelectorAll("[data-reply]").forEach(b=>b.addEventListener("click",()=>answerCase(+b.dataset.reply, b)));
}
async function answerCase(j, btn){
  const {m}=curCourse(); const chat=$("#chat"); const i=CAS.answers.length; const tok=++caseToken;
  chat.querySelector(".replies")?.remove();
  CAS.answers=[...CAS.answers,j]; const c=m.etapes[i].choix[j];
  chat.insertAdjacentHTML("beforeend", bubble("me","Vous", esc(c.t)));
  setMeter(caseRisk(m,CAS.answers));
  if(!(await typing(chat,tok,900))) return;
  chat.insertAdjacentHTML("beforeend", bubble("men", c.ok?"Vigie · bonne décision":"Vigie · à revoir", esc(c.fb)+(c.ok?"":`<br><br><b>Meilleure option :</b> ${esc(m.etapes[i].choix.find(x=>x.ok).t)}`), c.ok?"ok":"ko"));
  const last=chat.lastElementChild;
  if(c.ok){ award(`c:${m.id}:${i}`,10,last.querySelector(".bub")); confetti(last.querySelector(".bub"),30); }
  else { last.classList.add("anim-shake"); }
  last.scrollIntoView({block:"nearest", behavior:REDUCE?"auto":"smooth"});
  await sleep(500); if(tok!==caseToken) return;
  await showStep(tok, true);
}
function endCase(){
  const {m}=curCourse(); const chat=$("#chat"); const good=CAS.answers.filter((a,i)=>m.etapes[i].choix[a].ok).length, pct=Math.round(good/m.etapes.length*100), next=nextModOf(m.id);
  markDone(m.id,pct);
  chat.insertAdjacentHTML("beforeend", `<div class="finish" style="padding:24px 0"><div class="medal">${svg(ICON.equipe,40,2)}</div><h3>${good}/${m.etapes.length} bonnes décisions</h3><p>${pct===100?"Un sans-faute : vous avez les bons réflexes.":pct>=75?"Très bonne gestion du cas.":"Relisez les retours de Vigie : ils résument les bons réflexes."}</p>
    <div class="actions-row" style="justify-content:center">${next?`<button class="btn primary next" data-mod="${next.id}">Passer au ${typeLbl[next.type].toLowerCase()} →</button>`:""}<button class="btn" data-case-reset>Rejouer le cas</button></div></div>`);
  const fin=chat.lastElementChild; if(pct>=75) confetti(fin.querySelector(".medal"),pct===100?140:80); fin.scrollIntoView({block:"nearest", behavior:REDUCE?"auto":"smooth"});
}

/* ---------- Défi final ---------- */
let QZT=0;
function paintQuiz(){
  const host=$("#player"); if(!host) return; const {m}=curCourse(); const Q=m.questions;
  if(QZ.mid!==m.id) QZ={mid:m.id, i:0, ans:{}, streak:0, best:0, phase:"q", t0:0};
  if(QZ.phase==="end") return quizEnd(host,m);
  const i=QZ.i, q=Q[i], a=QZ.ans[i], answered=a!==undefined;
  if(!answered) QZ.t0=Date.now();
  host.innerHTML = `<div class="qhead"><div class="qdots">${Q.map((_,k)=>`<i class="${QZ.ans[k]!==undefined?(QZ.ans[k]===Q[k].a?"ok":"ko"):k===i?"cur":""}"></i>`).join("")}</div>
      <span class="streak2" id="qStreak" title="Série de bonnes réponses">${FLAME} ${QZ.streak}</span>
      ${answered?"":`<span class="tmr" title="Répondez avant la fin du cercle pour un bonus"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--surface-3)" stroke-width="3.5"/><circle class="t" cx="18" cy="18" r="15.9" fill="none" stroke="var(--warm)" stroke-width="3.5" pathLength="100" stroke-linecap="round"/></svg><span>+5</span></span>`}</div>
    <div class="qcard"><span class="sub" style="font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:11.5px;margin-bottom:6px">Question ${i+1} sur ${Q.length}</span><h3>${esc(q.q)}</h3>
      <div class="opts">${q.c.map((c,j)=>{ let cls=""; if(answered){ cls = j===q.a?"right":j===a?"wrong":"dim"; } return `<button class="opt ${cls}" data-opt="${j}" ${answered?"disabled":""}><span class="k">${"ABCD"[j]}</span><span>${esc(c)}</span></button>`; }).join("")}</div>
      ${answered?expHtml(q,a,i===Q.length-1):""}</div>`;
  host.querySelectorAll("[data-opt]").forEach(b=>b.addEventListener("click",()=>answerQuiz(+b.dataset.opt,b)));
  host.querySelector("[data-qnext]")?.addEventListener("click",nextQuiz);
}
function expHtml(q,a,last){ const ok=a===q.a; return `<div class="qexp ${ok?"ok":"ko"}"><p><b>${ok?"Bonne réponse !":"Pas cette fois. Réponse : "+"ABCD"[q.a]}</b>${esc(q.e)}</p><button class="btn primary next" data-qnext>${last?"Voir mon résultat":"Question suivante →"}</button></div>`; }
function answerQuiz(j, btn){
  const {m}=curCourse(); const q=m.questions[QZ.i]; if(QZ.ans[QZ.i]!==undefined) return;
  QZ.ans={...QZ.ans,[QZ.i]:j}; const ok=j===q.a; const fast=Date.now()-QZ.t0<15000;
  const opts=[...$("#player").querySelectorAll("[data-opt]")];
  opts.forEach((b,k)=>{ b.disabled=true; b.classList.add(k===q.a?"right":k===j?"wrong":"dim"); });
  $("#player").querySelector(".tmr")?.remove();
  if(ok){ QZ.streak++; QZ.best=Math.max(QZ.best,QZ.streak); btn.classList.add("anim-pop"); confetti(btn, QZ.streak>=3?60:30); award(`q:${m.id}:${QZ.i}`, fast?15:10, btn); }
  else { QZ.streak=0; btn.classList.add("anim-shake"); }
  const sk=$("#qStreak"); if(sk){ sk.innerHTML=`${FLAME} ${QZ.streak}`; sk.classList.remove("bump"); void sk.offsetWidth; sk.classList.add("bump"); }
  const dots=$("#player").querySelectorAll(".qdots i"); dots[QZ.i]?.classList.remove("cur"); dots[QZ.i]?.classList.add(ok?"ok":"ko");
  $("#player").querySelector(".qcard").insertAdjacentHTML("beforeend", expHtml(q,j,QZ.i===m.questions.length-1));
  $("#player").querySelector("[data-qnext]").addEventListener("click",nextQuiz);
  $("#player").querySelector(".qexp").scrollIntoView({block:"nearest", behavior:REDUCE?"auto":"smooth"});
}
function nextQuiz(){ const {m}=curCourse(); if(QZ.i<m.questions.length-1){ QZ.i++; paintQuiz(); } else { QZ.phase="end"; paintQuiz(); } }
function quizEnd(host,m){
  const Q=m.questions, good=Q.filter((q,i)=>QZ.ans[i]===q.a).length, pct=Math.round(good/Q.length*100), ok=pct>=80, stars=pct===100?3:pct>=80?2:pct>=50?1:0, next=nextModOf(m.id);
  const x=modById(m.id); const wasDone=pStats(x.p).done;
  if(ok) markDone(m.id,pct);
  const nowDone=pStats(x.p).done;
  host.innerHTML = `<div class="qres"><div class="ring">${ringSvg(0,150,"var(--surface-3)",ok?"var(--ok)":"var(--warn)")}<div class="rv"><b id="qPct">0</b><small>% de réussite</small></div></div>
    <div class="stars">${[0,1,2].map(k=>STAR.replace("<svg",`<svg class="${k<stars?"on":""}"`)).join("")}</div>
    <h3 style="font-family:var(--f-display);font-size:24px;margin:4px 0 0">${ok?(nowDone&&!wasDone?"Parcours validé, badge débloqué !":"Défi réussi !"):"Encore un effort"}</h3>
    <p class="sub" style="font-size:14px;max-width:48ch">${good} ${plural(good,"bonne réponse","bonnes réponses")} sur ${Q.length} · meilleure série : ${QZ.best}. ${ok?"":"Il faut 80 % pour valider : rejouez, les explications vous aideront."}</p>
    <div class="actions-row" style="justify-content:center;margin-top:6px">${ok&&next?`<button class="btn primary next" data-mod="${next.id}">Module suivant →</button>`:ok?`<button class="btn primary next" data-back-course>Voir mes badges</button>`:""}<button class="btn" data-quiz-reset>Rejouer le défi</button></div></div>`;
  requestAnimationFrame(()=>{ const c=host.querySelector(".ring circle.v"); if(c) c.style.strokeDashoffset=String(100-pct); animNum(host.querySelector("#qPct"),0,pct,v=>String(Math.round(v)),1000); });
  if(ok) setTimeout(()=>confetti(host.querySelector(".ring"), nowDone&&!wasDone?180:100), REDUCE?0:600);
}

/* ---------- Clics des formations ---------- */
function learnClick(t){
  const cgo=t.closest("[data-course-go]"); if(cgo){ go("formations",{keepCourse:1}); FS.p=cgo.dataset.courseGo; FS.m=null; LS.mid=null; render(); window.scrollTo(0,0); return true; }
  const co=t.closest("[data-course]"); if(co){ FS.p=co.dataset.course; FS.m=null; LS.mid=null; render(); window.scrollTo(0,0); return true; }
  if(t.closest("[data-back-course]")){ FS.p=null; FS.m=null; render(); window.scrollTo(0,0); return true; }
  const md=t.closest("[data-mod]"); if(md){ gotoMod(md.dataset.mod); return true; }
  const sl=t.closest("[data-slide]"); if(sl){ goSlide(+sl.dataset.slide); return true; }
  if(t.closest("[data-lesson-done]")){ const {m}=curCourse(); const btn=t.closest("[data-lesson-done]"); award("l:"+m.id,20,btn); markDone(m.id); LS.fin=true; paintLesson(); return true; }
  if(t.closest("[data-replay]")){ LS.fin=false; LS.i=0; paintLesson("l"); return true; }
  if(t.closest("[data-case-reset]")){ CAS={mid:CAS.mid, answers:[], shown:0}; paintCase(true); return true; }
  if(t.closest("[data-quiz-reset]")){ QZ={mid:QZ.mid, i:0, ans:{}, streak:0, best:0, phase:"q", t0:0}; paintQuiz(); return true; }
  return false;
}

/* ---------- Actualités ---------- */
function renderNews(){
  if(F.plan) return renderNewsPlan();
  const items = S.actualites.filter(n=>!F.theme || n.theme===F.theme).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  const last = S.actualites.reduce((m,n)=>String(n.ajouteLe||"")>m?String(n.ajouteLe):m,"");
  const themes = THEMES.filter(t=>S.actualites.some(n=>n.theme===t));
  const nAct = allVeilleActions().length;
  return headerBlock("actualites", "Veille", "Actualités du contrôle interne", "Référentiels, réglementation, fraude, cyber : ce qui change pour votre dispositif, résumé, commenté et traduit en actions.",
    `<button class="btn primary" data-plan="1">${svg(ICON.actions,16,2)}Plan d'action de la veille${nAct?` <span class="badge" style="background:rgba(255,255,255,.22);color:inherit">${nAct}</span>`:""}</button>${canWrite?`<button class="btn" data-new="actualites">${plus}Ajouter une actualité</button>`:""}`)
  + `<p class="news-note">${last?`Veille mise à jour le ${fmtD(last.slice(0,10))}. Ajoutez les nouvelles actualités et leurs actions avec « Ajouter une actualité » : toute l'équipe les verra.`:"Ajoutez vos actualités avec « Ajouter une actualité » : toute l'équipe les verra."}</p>`
  + (themes.length?`<div class="toolbar"><div class="seg" role="group" aria-label="Thèmes"><button data-newstheme="" aria-pressed="${!F.theme}">Tout</button>${themes.map(t=>`<button data-newstheme="${esc(t)}" aria-pressed="${F.theme===t}">${esc(t)}</button>`).join("")}</div></div>`:"")
  + (!loaded.actualites?`<p class="sub">Chargement…</p>`:!items.length?`<div class="panel"><div class="empty"><b>Aucune actualité</b><p>La veille apparaîtra ici.</p></div></div>`:
  `<div class="newslist">${items.map(n=>{ const u=safeUrl(n.url); const A=newsActions(n); const open=NEWS_OPEN.has(n.id);
    return `<article class="newsitem"><div class="top"><span class="th">${esc(n.theme||"")}</span><span>${fmtD(n.date)}</span></div><h2>${esc(n.titre)}</h2><p>${esc(n.resume||"")}</p>${n.impact?`<div class="impact"><b>Pour le contrôle interne</b>${esc(n.impact)}</div>`:""}
      ${A.length?`<button class="actbtn" data-news-toggle="${n.id}" aria-expanded="${open}">${svg(ICON.actions,15,2)}${A.length} ${plural(A.length,"action")} à mener<span class="sub" style="margin:0 0 0 auto">${open?"Masquer":"Afficher"}</span></button>${open?`<div class="nacts">${A.map((a,k)=>actionRow(n,a,k,true)).join("")}</div>`:""}`
        : canWrite?`<button class="actbtn ai" data-news-ai="${n.id}" ${AI_BUSY.has(n.id)?"disabled":""}>${svg('<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" fill="currentColor" fill-opacity=".25"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',15,2)}Ajouter des actions à mener</button>${AI_ERR[n.id]?`<p class="sub" style="color:var(--crit)">${esc(AI_ERR[n.id])}</p>`:""}`:""}
      <div class="row"><span class="sub" style="margin:0">${esc(n.source||"")}</span>${u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">Lire la source ↗</a>`:""}${canWrite?`<button class="linkbtn" data-open="actualites:${n.id}">Modifier</button>`:""}</div></article>`; }).join("")}</div>`);
}
const NEWS_OPEN = new Set(); const AI_BUSY = new Set(); const AI_ERR = {};
const PRIO_ORDER = {"Urgente":0,"Haute":1,"Normale":2,"Basse":3};
function newsActions(n){ return Array.isArray(n.actions) ? n.actions.filter(a=>a && a.titre) : []; }
function allVeilleActions(){ return S.actualites.flatMap(n=>newsActions(n).map((a,k)=>({n,a,k}))).sort((x,y)=>String(x.a.echeance||"9").localeCompare(String(y.a.echeance||"9")) || (PRIO_ORDER[x.a.priorite]??9)-(PRIO_ORDER[y.a.priorite]??9)); }
function allJalons(){ return S.actualites.flatMap(n=>(Array.isArray(n.jalons)?n.jalons:[]).filter(j=>j&&j.date&&j.titre).map(j=>({n,j}))).sort((x,y)=>x.j.date.localeCompare(y.j.date)); }
const veilleKey = (n,k) => `${n.id}:${k}`;
const taskFor = (n,k) => S.taches.find(t=>t.veille===veilleKey(n,k));
function actionRow(n,a,k,compact){
  const t=taskFor(n,k), late=a.echeance && a.echeance<TODAY_ISO && !(t&&t.statut==="Terminée");
  return `<div class="nact"><span class="pill ${PRIO_CLS[a.priorite]||"prio-b"}">${esc(a.priorite||"—")}</span><span style="min-width:0"><b>${esc(a.titre)}</b>${a.detail?`<span class="sub">${esc(a.detail)}</span>`:""}<span class="sub">${esc([a.responsable?"Responsable suggéré : "+a.responsable:"", compact?"":"Source : "+n.titre].filter(Boolean).join(" · "))}${n.actionsIA?' · <span class="badge">Proposé par Claude</span>':""}</span></span>
    <span class="nwhen ${late?"late":""}">${a.echeance?shortD(a.echeance)+" "+a.echeance.slice(0,4):"—"}</span>
    ${t?`<button class="linkchip" data-open="taches:${t.id}">${CHECK.replace('width="14"','width="12"').replace('height="14"','height="12"')} ${t.statut==="Terminée"?"Terminée":"Dans vos tâches"}</button>`:canWrite?`<button class="btn sm" data-veille-task="${n.id}:${k}">${plus}Ajouter à mes tâches</button>`:"<span></span>"}</div>`;
}
function renderNewsPlan(){
  const A=allVeilleActions(), J=allJalons();
  const head = headerBlock("actualites", "Veille · plan d'action", "Plan d'action issu de la veille", "Les actions concrètes à mener pour tirer les conséquences de l'actualité, et leur calendrier.",
    `<button class="btn" data-plan="0">← Retour aux actualités</button>${A.length?`<button class="btn" id="exportPlan">${svg('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',16)}Exporter</button><button class="btn" id="printPlan">${svg('<path d="M6 9V3h12v6M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',16)}Imprimer ou PDF</button>`:""}${canWrite&&A.some(x=>!taskFor(x.n,x.k))?`<button class="btn primary" id="addAllVeille">${plus}Tout ajouter à mes tâches</button>`:""}`);
  if(!loaded.actualites) return head+'<p class="sub">Chargement…</p>';
  if(!A.length) return head+`<div class="panel"><div class="empty"><b>Aucune action pour l'instant</b><p>Ouvrez une actualité avec « Modifier » et saisissez ses actions à mener, une par ligne.</p></div></div>`;
  const prio=A.filter(x=>["Urgente","Haute"].includes(x.a.priorite));
  const in30=A.filter(x=>x.a.echeance && x.a.echeance<=addDays(30));
  const added=A.filter(x=>taskFor(x.n,x.k)).length;
  const first3=prio.slice(0,3);
  const end=A.reduce((m,x)=>x.a.echeance>m?x.a.echeance:m,"");
  const sumTxt = `${A.length} actions issues de ${new Set(A.map(x=>x.n.id)).size} actualités, à mener d'ici ${new Date(end+"T00:00:00").toLocaleDateString("fr-FR",{month:"long",year:"numeric"})}. ${prio.length} sont prioritaires et ${in30.length} arrivent à échéance dans les 30 prochains jours.`;
  // calendrier par mois
  const start=new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  const months=[]; for(let i=0;i<8;i++){ const d=new Date(start.getFullYear(), start.getMonth()+i, 1); months.push(d); }
  const mk = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
  const lastKey=mk(months[months.length-1]);
  const bucket = date => { const k=String(date||"").slice(0,7); if(!k) return "later"; if(k<mk(months[0])) return mk(months[0]); return k>lastKey?"later":k; };
  const cols=[...months.map(d=>({k:mk(d), l:d.toLocaleDateString("fr-FR",{month:"long",year:"numeric"})})), {k:"later", l:"Plus tard"}];
  const cal = cols.map(c=>{ const acts=A.filter(x=>bucket(x.a.echeance)===c.k), js=J.filter(x=>bucket(x.j.date)===c.k); if(c.k==="later" && !acts.length && !js.length) return "";
    return `<div class="mcol ${c.k===mk(months[0])?"now":""}"><div class="mh">${esc(c.l.replace(/^./,x=>x.toUpperCase()))}<span>${acts.length||""}</span></div>
      ${js.map(x=>`<div class="jalon" title="${esc(x.n.titre)}"><span class="dia"></span><span><b>${shortD(x.j.date)}</b> ${esc(x.j.titre)}</span></div>`).join("")}
      ${acts.map(x=>{ const t=taskFor(x.n,x.k); return `<button class="mev p-${(x.a.priorite||"").slice(0,1).toLowerCase()} ${t?"in":""}" data-plan-focus="${x.n.id}:${x.k}"><span class="d">${x.a.echeance?new Date(x.a.echeance+"T00:00:00").getDate():""}</span><span>${esc(x.a.titre)}</span>${t?`<span class="ok">${CHECK}</span>`:""}</button>`; }).join("")||(js.length?"":'<span class="sub">—</span>')}</div>`; }).join("");
  const byNews = S.actualites.filter(n=>newsActions(n).length).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  return head + `<section class="planhero"><div><div class="eyebrow">Synthèse</div><p class="big">${esc(sumTxt)}</p>
      ${first3.length?`<div class="eyebrow" style="margin-top:14px">Par où commencer</div><ol class="first3">${first3.map(x=>`<li><b>${esc(x.a.titre)}</b><span>${x.a.echeance?"avant le "+fmtD(x.a.echeance):""}${x.a.responsable?" · "+esc(x.a.responsable):""}</span></li>`).join("")}</ol>`:""}</div>
      <div class="planstats"><div><b>${A.length}</b><span>actions</span></div><div><b>${prio.length}</b><span>prioritaires</span></div><div><b>${in30.length}</b><span>sous 30 jours</span></div><div><b>${added}</b><span>dans vos tâches</span></div></div></section>
    <section class="panel" style="margin-bottom:20px"><div class="panel-head"><div><h2>Calendrier</h2><p>Échéances des actions par mois. Les losanges marquent les dates réglementaires à ne pas manquer.</p></div>
      <div class="legend" style="margin:0"><span><i class="prio-u" style="background:var(--crit)"></i>Urgente</span><span><i style="background:var(--warn)"></i>Haute</span><span><i style="background:var(--accent)"></i>Normale</span><span><i style="background:var(--muted)"></i>Basse</span></div></div>
      <div class="calwrap"><div class="cal">${cal}</div></div></section>
    ${byNews.map(n=>`<section class="panel planblock" id="pb-${esc(n.id)}" style="margin-bottom:16px"><div class="panel-head"><div><span class="th">${esc(n.theme||"")}</span><h2 style="margin-top:6px">${esc(n.titre)}</h2><p>${esc(n.source||"")} · ${fmtD(n.date)}</p></div></div>
      ${n.impact?`<p class="sub" style="font-size:14px;margin:-6px 0 12px">${esc(n.impact)}</p>`:""}<div class="nacts">${newsActions(n).map((a,k)=>actionRow(n,a,k,true)).join("")}</div></section>`).join("")}`;
}
function controllerMember(){ return findMember(PREFS.fonction||"") || S.equipe.find(m=>m.roleCI==="Contrôleur interne") || null; }
async function addVeilleTask(nid,k,quiet){
  const n=byId("actualites",nid); const a=newsActions(n||{})[k]; if(!n||!a||taskFor(n,k)) return false;
  const me=controllerMember();
  const data={ ref:nextRef("taches"), titre:a.titre, description:[a.detail, a.responsable?`Responsable suggéré : ${a.responsable}.`:"", `Issue de la veille : ${n.titre}.`].filter(Boolean).join(" "),
    priorite:PRIOS.includes(a.priorite)?a.priorite:"Normale", statut:"À faire", echeance:a.echeance||"", assigneId:me?.id||"", lien:`actualites:${n.id}`, veille:veilleKey(n,k), exemple:false, creeLe:new Date().toISOString(), modifieLe:new Date().toISOString() };
  try{ if(mode==="db") await db.collection("taches").doc().set(data); else { S.taches.push({...data,id:"m"+Math.random().toString(36).slice(2,9)}); }
    if(!quiet) toast("Action ajoutée à vos tâches"); return true; }
  catch(e){ toast(e&&e.code==="invalid_argument"?"Vous n'avez pas les droits de modification.":"Ajout impossible, réessayez"); return false; }
}
async function addAllVeille(btn){
  btn.disabled=true; btn.textContent="Ajout en cours…"; let n=0;
  for(const x of allVeilleActions()){ if(!taskFor(x.n,x.k)){ if(await addVeilleTask(x.n.id,x.k,true)) n++; else break; } }
  toast(`${n} ${plural(n,"action ajoutée","actions ajoutées")} à vos tâches`); render();
}
let samplerP = Promise.resolve(null);
/* ---- Actions de veille saisies à la main (version locale) ---- */
function actionsVersTexte(list){ return (Array.isArray(list)?list:[]).filter(a=>a&&a.titre).map(a=>{ const d=/^\d{4}-\d{2}-\d{2}$/.test(a.echeance||"")?a.echeance.split("-").reverse().join("/"):""; return [d, a.priorite||"Normale", a.titre, a.responsable||""].join(" ; "); }).join("\n"); }
function texteVersActions(txt, avant){
  const anciens = new Map((Array.isArray(avant)?avant:[]).map(a=>[norm(a.titre), a]));
  return String(txt||"").split(/\r?\n/).map(l=>l.trim()).filter(Boolean).map(l=>{
    const p=l.split(/\s*[;|]\s*/); let ech="", prio="Normale", titre="", resp="";
    const m=(p[0]||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/);
    if(m){ ech=`${m[3]}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}`; p.shift(); }
    if(PRIOS.includes((p[0]||"").replace(/^./,c=>c.toUpperCase()))){ prio=p.shift().replace(/^./,c=>c.toUpperCase()); }
    titre=(p.shift()||"").slice(0,140); resp=(p.join(" ; ")||"").slice(0,80);
    const old=anciens.get(norm(titre));
    return {titre, detail:old?.detail||"", echeance:ech, priorite:prio, responsable:resp||old?.responsable||""};
  }).filter(a=>a.titre);
}

async function proposeActions(nid){
  const n=byId("actualites",nid); if(!n) return;
  const sample = await samplerP;
  if(!sample || !sample.json){ AI_ERR[nid]="La proposition par Claude n'est pas disponible dans cet affichage."; render(); return; }
  AI_BUSY.add(nid); delete AI_ERR[nid]; render();
  const prompt = `Tu es expert en contrôle interne et en conformité dans une entreprise française. Nous sommes le ${TODAY_ISO}.
À partir de l'actualité ci-dessous, propose 2 à 4 actions concrètes, réalistes et datées qu'un contrôleur interne devrait mener ou faire mener.
Réponds uniquement par un tableau JSON d'objets de la forme :
[{"titre":"verbe à l'infinitif, 90 caractères maximum","detail":"une phrase qui précise comment faire","echeance":"AAAA-MM-JJ","priorite":"Urgente|Haute|Normale|Basse","responsable":"fonction concernée"}]
Les échéances doivent être postérieures au ${TODAY_ISO}, tenir compte des dates réglementaires citées et s'étaler sur 2 semaines à 9 mois.

Actualité :
Titre : ${n.titre}
Date : ${n.date||""}
Thème : ${n.theme||""}
Résumé : ${n.resume||""}
Ce que ça change : ${n.impact||""}`;
  try{
    const out = await sample.json(prompt, {modelTier:"default"});
    const list = (Array.isArray(out)?out:[]).map(a=>({ titre:String(a?.titre||"").slice(0,140), detail:String(a?.detail||"").slice(0,400), echeance:/^\d{4}-\d{2}-\d{2}$/.test(String(a?.echeance||""))?String(a.echeance):"", priorite:PRIOS.includes(a?.priorite)?a.priorite:"Normale", responsable:String(a?.responsable||"").slice(0,80) })).filter(a=>a.titre).slice(0,5);
    if(!list.length) throw {code:"invalid_json"};
    if(mode==="db") await db.collection("actualites").doc(nid).update({actions:list, actionsIA:true, modifieLe:new Date().toISOString()});
    else { n.actions=list; n.actionsIA=true; }
    NEWS_OPEN.add(nid); toast(`${list.length} actions proposées`);
  }catch(e){
    AI_ERR[nid] = e&&["not_granted","sampling_disabled","capability_disabled","capability_removed","not_declared"].includes(e.code) ? "La proposition par Claude n'est pas autorisée dans cet affichage." : e&&e.code==="rate_limited" ? "Trop de demandes pour l'instant. Réessayez dans un moment." : e&&e.code==="invalid_argument" ? "Vous n'avez pas les droits de modification." : "Claude n'a pas pu proposer d'actions. Réessayez.";
  }finally{ AI_BUSY.delete(nid); render(); }
}
async function exportPlan(){
  const cell=v=>{ const s=String(v??""); return /[;"\n\r]/.test(s)?`"${s.replace(/"/g,'""')}"`:s; };
  const rows=allVeilleActions().map(x=>[x.a.echeance, x.a.priorite, x.a.titre, x.a.detail, x.a.responsable, x.n.titre, x.n.source, taskFor(x.n,x.k)?"Oui":"Non"]);
  const csv="﻿"+[["Échéance","Priorité","Action","Détail","Responsable suggéré","Actualité","Source","Dans mes tâches"].join(";"), ...rows.map(r=>r.map(cell).join(";"))].join("\r\n");
  const dl=await downloadsP; if(!dl){ toast("Export indisponible dans cet affichage"); return; }
  try{ await dl.save({filename:`plan-action-veille-${TODAY_ISO}.csv`, data:csv}); toast("Plan exporté"); }catch(e){ if(e&&e.code!=="declined") toast("L'export n'a pas abouti"); }
}
function newsClick(t){
  const p=t.closest("[data-plan]"); if(p){ F.plan = p.dataset.plan==="1"; render(); window.scrollTo(0,0); return true; }
  const tg=t.closest("[data-news-toggle]"); if(tg){ const id=tg.dataset.newsToggle; NEWS_OPEN.has(id)?NEWS_OPEN.delete(id):NEWS_OPEN.add(id); render(); return true; }
  const ai=t.closest("[data-news-ai]"); if(ai){ openDrawer("actualites", ai.dataset.newsAi); return true; }
  if(t.closest("#printPlan")){ window.print(); return true; }
  const vt=t.closest("[data-veille-task]"); if(vt){ const [nid,k]=vt.dataset.veilleTask.split(":"); vt.disabled=true; addVeilleTask(nid,+k).then(()=>{ if(mode!=="db") render(); }); return true; }
  const pf=t.closest("[data-plan-focus]"); if(pf){ const nid=pf.dataset.planFocus.split(":")[0]; const el=document.getElementById("pb-"+nid); if(el){ el.scrollIntoView({block:"start", behavior:REDUCE?"auto":"smooth"}); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); } return true; }
  if(t.closest("#addAllVeille")){ addAllVeille(t.closest("#addAllVeille")); return true; }
  if(t.closest("#exportPlan")){ exportPlan(); return true; }
  return false;
}

/* =========================================================
   Tiroir de saisie
   ========================================================= */
let drawer = null;
function openDrawer(col, id, preset){
  closeOverlay();
  let existing = null;
  if(col==="moi") existing = {prenom:PREFS.prenom||"", fonction:PREFS.fonction||""};
  else if(id) existing = byId(col,id);
  if(id && !existing) return;
  const draft = existing ? JSON.parse(JSON.stringify(existing)) : {...defaults(col), ...(preset||{})};
  if(col==="actualites") draft.actionsTexte = actionsVersTexte(draft.actions);
  drawer = {col, id: col==="moi"?null:id, draft, armed:false, isMe: col==="moi"};
  paintDrawer();
}
function defaults(col){
  const d = {};
  if(col==="tests"){ d.resultat="Planifié"; d.typeTest="Efficacité opérationnelle"; d.date=TODAY_ISO; }
  if(col==="actions"){ d.statut="À lancer"; d.avancement=0; d.source="Test de contrôle"; }
  if(col==="risques"){ d.traitement="Réduire"; if(F.cat && CATEGORIES.includes(F.cat)) d.categorie=F.cat; }
  if(col==="controles"){ d.type="Préventif"; d.nature="Manuel"; d.frequence="Mensuelle"; }
  if(col==="exigences"){ d.statut="À évaluer"; }
  if(col==="actualites"){ d.date=TODAY_ISO; }
  if(col==="taches"){ d.statut="À faire"; d.priorite="Normale"; }
  return d;
}
function linkOptions(v){
  return LINKABLE.map(c=>{ const items=S[c].slice().sort(sortRef); if(!items.length) return ""; return `<optgroup label="${esc(SCHEMA[c].title)}">${items.map(o=>`<option value="${c}:${esc(o.id)}" ${v===c+":"+o.id?"selected":""}>${esc(o.ref)} — ${esc(o.titre)}</option>`).join("")}</optgroup>`; }).join("");
}
function paintDrawer(){
  const host=$("#drawerHost");
  if(!drawer){ host.innerHTML=""; return; }
  const {col,id,draft} = drawer, sc=SCHEMA[col], ro=!canWrite && col!=="moi";
  const body = sc.fields.map(f=>{
    if(f.sec) return `<div class="section-lbl">${f.sec}</div>`;
    const v = draft[f.k], fid="f_"+f.k, req=f.req?' <span aria-hidden="true" style="color:var(--crit)">*</span>':"";
    let input="";
    const hint = f.hint?`<span class="hint">${f.hint}</span>`:"";
    if(["text","url","email"].includes(f.t)) input=`<input type="${f.t}" id="${fid}" value="${esc(v)}" placeholder="${esc(f.ph||"")}" ${ro?"disabled":""}>`;
    else if(f.t==="person") input=`<input type="text" id="${fid}" value="${esc(v)}" list="peopleDL" placeholder="Nom ou fonction" autocomplete="off" ${ro?"disabled":""}>`;
    else if(f.t==="textarea") input=`<textarea id="${fid}" ${ro?"disabled":""}>${esc(v)}</textarea>`;
    else if(f.t==="date") input=`<input type="date" id="${fid}" value="${esc(v)}" ${ro?"disabled":""}>`;
    else if(f.t==="number") input=`<input type="number" id="${fid}" value="${v??""}" min="${f.min??0}" ${f.max!=null?`max="${f.max}"`:""} ${ro?"disabled":""}>`;
    else if(f.t==="select") input=`<select id="${fid}" ${ro?"disabled":""}><option value="">Choisir…</option>${f.o.map(o=>`<option ${v===o?"selected":""}>${esc(o)}</option>`).join("")}</select>`;
    else if(f.t==="ref"){ const opts=S[f.ref].filter(o=>!(col===f.ref && o.id===id)).slice().sort(col==="equipe"||f.ref==="equipe"?(a,b)=>String(a.nom).localeCompare(String(b.nom),"fr"):sortRef); input=`<select id="${fid}" ${ro?"disabled":""}><option value="">${f.req?"Choisir…":"Aucun"}</option>${opts.map(o=>`<option value="${esc(o.id)}" ${v===o.id?"selected":""}>${f.ref==="equipe"?esc(o.nom)+" — "+esc(o.fonction||""):esc(o.ref)+" — "+esc(o.titre)}</option>`).join("")}</select>`; }
    else if(f.t==="link") input=`<select id="${fid}" ${ro?"disabled":""}><option value="">Aucun</option>${linkOptions(v)}</select>`;
    else if(f.t==="check") return `<div class="field"><label class="check"><input type="checkbox" id="${fid}" ${v?"checked":""} ${ro?"disabled":""}> ${f.l}</label>${hint}</div>`;
    else if(f.t==="scale") input=`<div class="scale" role="group" aria-label="${esc(f.l)}" data-scale="${f.k}">${f.o.map((o,i)=>`<button type="button" data-val="${i+1}" aria-pressed="${v===i+1}" ${ro?"disabled":""}><b>${i+1}</b>${esc(o)}</button>`).join("")}</div>`;
    return `<div class="field ${f.half?"half":""}"><label for="${fid}">${f.l}${req}</label>${input}${hint}</div>`;
  }).join("");
  let computed="";
  if(col==="risques"){ const a=inh(draft), b=res(draft); computed=`<div class="computed">Criticité inhérente ${scoreChip(a)} ${level(a)?.n||""} <span style="margin-left:auto">Résiduelle ${scoreChip(b)} ${level(b)?.n||""}</span></div>`; }
  const title = drawer.isMe ? "Mon profil" : id ? (col==="equipe"?draft.nom:col==="actualites"?"Modifier l'actualité":`${draft.ref||""}`) : nouveau(col);
  const dl = `<datalist id="peopleDL">${S.equipe.map(m=>`<option value="${esc(m.nom)}">${esc(m.fonction||"")}</option>`).join("")}</datalist>`;
  host.innerHTML = `<div class="scrim" data-close></div>
  <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="dTitle">
    <header><div class="hl">${col==="equipe"&&id?avatar(draft,"lg"):tile(sc.view,"lg")}<div><div class="eyebrow">${esc(sc.title)}</div><h2 id="dTitle">${esc(title)}${draft.exemple?' <span class="ex">exemple</span>':""}</h2>${id&&draft.modifiePar?`<span class="sub">Modifié par ${esc(draft.modifiePar)} le ${new Date(draft.modifieLe).toLocaleString("fr-FR",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}</span>`:""}</div></div><button class="btn ghost icon" data-close aria-label="Fermer">${svg('<path d="M6 6l12 12M18 6L6 18"/>')}</button></header>
    <form class="body" id="dForm" novalidate>${col==="equipe"&&id?workloadBlock(byId("equipe",id)):""}${body}${computed}<div class="err" id="dErr" hidden></div>${relatedBlock(col,id)}${dl}</form>
    <footer>${id&&canWrite&&!drawer.isMe?`<button class="btn danger ${drawer.armed?"armed":""}" id="dDel">${drawer.armed?"Confirmer la suppression":"Supprimer"}</button>`:"<span></span>"}
      <span class="actions-row"><button class="btn" data-close>${ro?"Fermer":"Annuler"}</button>${!ro?`<button class="btn primary" id="dSave">${id||drawer.isMe?"Enregistrer":"Créer"}</button>`:""}</span></footer>
  </aside>`;
  const first = host.querySelector(".body input, .body select, .body textarea"); if(first && !id) first.focus();
}
function workloadBlock(m){ if(!m) return ""; const l=loadOf(m); return `<div class="workload"><div><b>${l.risques.length}</b><small>risques possédés</small></div><div><b>${l.controles.length}</b><small>contrôles</small></div><div><b>${l.actions.length}</b><small>actions ouvertes</small></div><div><b style="${l.late.length?"color:var(--crit)":""}">${l.late.length}</b><small>en retard</small></div></div>`; }
function relatedBlock(col,id){
  if(!id) return "";
  let items=[], lbl="";
  if(col==="risques"){ items=S.controles.filter(c=>c.risqueId===id).map(c=>["controles",c,c.titre]); lbl="Contrôles rattachés"; }
  if(col==="controles"){ items=S.tests.filter(t=>t.controleId===id).sort((a,b)=>String(b.date).localeCompare(String(a.date))).map(t=>["tests",t,`${t.typeTest||""} · ${fmtD(t.date)} · ${t.resultat||""}`]); lbl="Historique des tests"; }
  if(col==="tests"){ items=S.actions.filter(a=>a.controleId===byId("tests",id)?.controleId).map(a=>["actions",a,a.titre]); lbl="Constats sur ce contrôle"; }
  if(col==="equipe"){ const m=byId("equipe",id); if(!m) return ""; const l=loadOf(m); items=[...l.actions.map(a=>["actions",a,a.titre]), ...l.taches.map(t=>["taches",t,t.titre]), ...l.controles.map(c=>["controles",c,c.titre])]; lbl="Ses actions, tâches et contrôles";
    const reports=S.equipe.filter(x=>x.managerId===id); if(reports.length) items.push(...reports.map(r=>["equipe",r,r.nom+" — "+(r.fonction||"")])); }
  if(!lbl) return "";
  return `<div class="section-lbl">${lbl}</div><div class="field">${items.length?items.map(([c,o,t])=>`<button type="button" class="btn ghost" style="justify-content:flex-start;padding:6px 0;font-weight:500;text-align:left" data-open="${c}:${o.id}">${tile(SCHEMA[c].view,"sm")}<span class="mono">${esc(o.ref||"")}</span> ${esc(t)}</button>`).join(""):`<span class="hint">Aucun pour l'instant.</span>`}</div>`;
}
function readForm(){
  const {col,draft}=drawer, out={...draft};
  SCHEMA[col].fields.forEach(f=>{
    if(!f.k || f.t==="scale") return;
    const el=document.getElementById("f_"+f.k); if(!el) return;
    if(f.t==="check") out[f.k]=el.checked;
    else if(f.t==="number") out[f.k]= el.value===""? null : Number(el.value);
    else out[f.k]=el.value.trim();
  });
  return out;
}
let prefsChain = Promise.resolve();
async function saveDrawer(){
  const {col,id}=drawer; const data=readForm();
  const err=$("#dErr");
  if(drawer.isMe){
    PREFS = {...PREFS, prenom:data.prenom||"", fonction:data.fonction||""};
    if(prefsRef){ const body={prenom:PREFS.prenom, fonction:PREFS.fonction}; prefsChain = prefsChain.then(()=>prefsRef.set(body)).catch(()=>toast("Profil non enregistré, réessayez plus tard")); }
    drawer=null; paintDrawer(); render(); toast("Profil mis à jour"); return;
  }
  const missing = SCHEMA[col].fields.filter(f=>f.req && (data[f.k]===undefined||data[f.k]===""||data[f.k]===null)).map(f=>f.l);
  if(missing.length){ err.hidden=false; err.textContent=`À compléter : ${missing.join(", ")}.`; return; }
  if(col==="actualites" && data.url && !safeUrl(data.url)){ err.hidden=false; err.textContent="Le lien doit commencer par https:// ou http://."; return; }
  if(col==="actions" && data.avancement!=null) data.avancement=Math.max(0,Math.min(100,data.avancement));
  if(col==="actions" && ["Réalisé","Clôturé"].includes(data.statut)) data.avancement=100;
  if(col==="actualites"){ data.actions = texteVersActions(data.actionsTexte, data.actions); delete data.actionsTexte; }
  delete data.id;
  if(!id){ if(SCHEMA[col].prefix) data.ref=nextRef(col); data.exemple=false; data.creeLe=new Date().toISOString(); if(col==="actualites") data.ajouteLe=new Date().toISOString(); }
  data.modifieLe=new Date().toISOString();
  const btn=$("#dSave"); btn.disabled=true; btn.textContent="Enregistrement…";
  try{
    if(mode==="db"){ const ref = id ? db.collection(col).doc(id) : db.collection(col).doc(); await ref.set(data); }
    else { if(id){ const i=S[col].findIndex(x=>x.id===id); S[col][i]={...data,id}; } else S[col].push({...data,id:"m"+Math.random().toString(36).slice(2,9)}); render(); }
    drawer=null; paintDrawer(); toast(id?"Modifications enregistrées":`${data.ref||label(col,data)} ${SCHEMA[col].fem?"créée":"créé"}`);
  }catch(e){
    btn.disabled=false; btn.textContent=id?"Enregistrer":"Créer"; err.hidden=false;
    err.textContent = e && e.code==="invalid_argument" ? "Vous n'avez pas les droits de modification sur cette application." : e && e.code==="quota_exceeded" ? "Capacité de stockage atteinte : supprimez des éléments anciens pour en créer de nouveaux." : "L'enregistrement a échoué. Vérifiez votre connexion et réessayez.";
    if(e && e.code==="invalid_argument") canWrite=false;
  }
}
async function deleteCurrent(){
  const {col,id}=drawer; const o=byId(col,id); const nm=o?.ref||o?.nom;
  try{ if(mode==="db") await db.collection(col).doc(id).delete(); else { S[col]=S[col].filter(x=>x.id!==id); render(); }
    drawer=null; paintDrawer(); toast(`${nm||"Élément"} supprimé`); }
  catch(e){ const err=$("#dErr"); err.hidden=false; err.textContent="La suppression a échoué. Réessayez."; }
}
async function setExigence(id, statut){
  const e=byId("exigences",id); if(!e) return;
  const v = e.statut===statut ? "À évaluer" : statut;
  try{ if(mode==="db") await db.collection("exigences").doc(id).update({statut:v, modifieLe:new Date().toISOString()}); else { e.statut=v; render(); } }
  catch(err){ toast("Mise à jour impossible, réessayez"); }
}

/* =========================================================
   Recherche globale et menu Créer
   ========================================================= */
let pal = null;
function closeOverlay(){ if(pal || menuOpen){ $("#overlayHost").innerHTML=""; pal=null; menuOpen=false; } }
function paletteIndex(){
  const out=[];
  VIEW_IDS.forEach(v=>out.push({g:"Aller à", t:VNAME[v], s:"", ic:v, run:()=>go(v)}));
  if(canWrite) ["risques","controles","tests","actions","taches","equipe"].forEach(c=>out.push({g:"Créer", t:nouveau(c).replace(/^./,x=>x.toUpperCase()), s:"", ic:SCHEMA[c].view, run:()=>openDrawer(c)}));
  ["risques","controles","tests","actions","taches","exigences","actualites"].forEach(c=>S[c].forEach(o=>{ const ttl = c==="tests" ? `${byId("controles",o.controleId)?.titre||"Test"}` : o.titre; out.push({g:SCHEMA[c].title, t:ttl, s:[o.ref, c==="risques"?o.categorie:c==="actions"?o.responsable:c==="taches"?o.statut:""].filter(Boolean).join(" · "), ic:SCHEMA[c].view, run:()=>openDrawer(c,o.id)}); }));
  S.equipe.forEach(m=>out.push({g:"Équipe", t:m.nom, s:m.fonction||"", av:m, run:()=>openDrawer("equipe",m.id)}));
  FORMATIONS.forEach(p=>p.modules.forEach(m=>out.push({g:"Formations", t:m.titre, s:p.titre, ic:"formations", run:()=>{ go("formations",{keepCourse:1}); FS.p=p.id; FS.m=m.id; render(); }})));
  return out;
}
function openPalette(){
  closeOverlay(); if(drawer){ drawer=null; paintDrawer(); }
  pal = {all:paletteIndex(), q:"", sel:0, list:[]};
  $("#overlayHost").innerHTML = `<div class="scrim" data-close-ov style="z-index:50"></div><div class="palette" role="dialog" aria-modal="true" aria-label="Recherche"><div class="pin">${svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',18)}<input id="palQ" placeholder="Rechercher ou lancer une action…" autocomplete="off" aria-label="Rechercher"><span class="kbd">Échap</span></div><div class="res" id="palRes" role="listbox"></div><div class="foot"><span>↑ ↓ pour naviguer</span><span>Entrée pour ouvrir</span></div></div>`;
  paintPalette(); $("#palQ").focus();
}
function paintPalette(){
  const q=norm(pal.q).split(/\s+/).filter(Boolean);
  let list = q.length ? pal.all.filter(x=>{ const h=norm(x.t+" "+x.s+" "+x.g); return q.every(w=>h.includes(w)); }) : pal.all.filter(x=>x.g==="Aller à"||x.g==="Créer");
  list = list.slice(0,40); pal.list=list; if(pal.sel>=list.length) pal.sel=Math.max(0,list.length-1);
  let g="", html="";
  list.forEach((x,i)=>{ if(x.g!==g){ g=x.g; html+=`<div class="grp">${esc(g)}</div>`; }
    html+=`<button class="it" role="option" data-pi="${i}" aria-selected="${i===pal.sel}">${x.av?avatar(x.av,"sm"):tile(x.ic,"sm")}<span style="min-width:0"><b>${esc(x.t)}</b>${x.s?`<small>${esc(x.s)}</small>`:""}</span><span></span></button>`; });
  $("#palRes").innerHTML = html || `<div class="empty" style="padding:28px"><p>Aucun résultat.</p></div>`;
  const s=$("#palRes").querySelector('[aria-selected="true"]'); if(s) s.scrollIntoView({block:"nearest"});
}
let menuOpen=false;
function openCreate(btn){
  closeOverlay(); if(!canWrite){ toast("Vous consultez l'application en lecture seule."); return; }
  const r=btn.getBoundingClientRect(); menuOpen=true;
  const left=Math.max(12, Math.min(r.left, window.innerWidth-262));
  $("#overlayHost").innerHTML = `<div class="scrim" data-close-ov style="z-index:50;background:transparent;backdrop-filter:none"></div><div class="menu" role="menu" style="top:${r.bottom+8}px;left:${left}px">${["risques","controles","tests","actions","taches","equipe","exigences","actualites"].map(c=>`<button role="menuitem" data-menu-new="${c}">${tile(SCHEMA[c].view)}${nouveau(c).replace(/^./,x=>x.toUpperCase())}</button>`).join("")}</div>`;
  $("#overlayHost").querySelector("button[role=menuitem]").focus();
}
$("#openSearch").addEventListener("click", openPalette);
$("#openCreate").addEventListener("click", e=>openCreate(e.currentTarget));

/* =========================================================
   Événements
   ========================================================= */
document.addEventListener("click", e=>{
  const t=e.target;
  if(t.closest("[data-close-ov]")){ closeOverlay(); return; }
  if(learnClick(t)) return;
  if(newsClick(t)) return;
  const pi=t.closest("[data-pi]"); if(pi){ const x=pal.list[+pi.dataset.pi]; closeOverlay(); x.run(); return; }
  const mn=t.closest("[data-menu-new]"); if(mn){ closeOverlay(); openDrawer(mn.dataset.menuNew); return; }
  const dt=t.closest("[data-done-task]"); if(dt){ e.stopPropagation(); dt.setAttribute("aria-checked","true"); dt.innerHTML=CHECK; setTask(dt.dataset.doneTask,{statut:"Terminée"}); toast("Tâche terminée"); return; }
  const mt=t.closest("[data-mktask]"); if(mt){ const [c,id]=mt.dataset.mktask.split(":"); const o=byId(c,id); const it=urgentItems().find(x=>x.kind===c&&x.id===id);
    const me = findMember(PREFS.fonction||"Contrôleur interne") || S.equipe.find(m=>m.roleCI==="Contrôleur interne");
    openDrawer("taches", null, {titre: it?it.t:(o?.titre||""), priorite: it?.lvl==="u"?"Urgente":"Haute", lien:`${c}:${id}`, echeance: addDays(it?.lvl==="u"?1:5), assigneId: me?.id||""}); return; }
  const mv=t.closest("[data-move]"); if(mv){ const [id,st]=mv.dataset.move.split(":"); setTask(id,{statut:st}); return; }
  const nw=t.closest("[data-new]"); if(nw){ openDrawer(nw.dataset.new); return; }
  const ex=t.closest("[data-exi]"); if(ex){ setExigence(ex.dataset.exi, ex.dataset.s); return; }
  const op=t.closest("[data-open]"); if(op){ const [c,id]=op.dataset.open.split(":"); openDrawer(c,id); return; }
  if(t.closest("[data-close]")){ drawer=null; paintDrawer(); return; }
  const g=t.closest("[data-go]"); if(g){ go(g.dataset.go, g.dataset.f?JSON.parse(g.dataset.f):null); return; }
  const h=t.closest("[data-heat]"); if(h){ heatMode=h.dataset.heat; render(); return; }
  const og=t.closest("[data-org]"); if(og){ orgMode=og.dataset.org; render(); return; }
  const c=t.closest("[data-cell]"); if(c){ go("risques",{cell:c.dataset.cell}); return; }
  const ct=t.closest("button[data-cat]"); if(ct){ F.cat = F.cat===ct.dataset.cat ? "" : ct.dataset.cat; render(); return; }
  const th=t.closest("button[data-newstheme]"); if(th){ F.theme=th.dataset.newstheme; render(); return; }
  const sb=t.closest(".scale button"); if(sb && drawer){ const k=sb.parentElement.dataset.scale; Object.assign(drawer.draft, readForm()); drawer.draft[k]=Number(sb.dataset.val); paintDrawer(); return; }
  if(t.closest("#dSave")){ e.preventDefault(); saveDrawer(); return; }
  if(t.closest("#dDel")){ e.preventDefault(); if(drawer.armed) deleteCurrent(); else { Object.assign(drawer.draft, readForm()); drawer.armed=true; paintDrawer(); } return; }
  if(t.closest("#clearCell")){ F.cell=null; render(); return; }
  if(t.closest("#exportCsv")){ exportCsv(); return; }
  if(t.closest("#clearEx")){ clearExamples(t.closest("#clearEx")); return; }
});
function scrollLesson(){ const el=document.querySelector(".lesson"); if(el && window.innerWidth<1100) el.scrollIntoView({block:"start"}); else window.scrollTo(0,0); }
document.addEventListener("keydown", e=>{
  if(document.querySelector(".setup")) return;
  if(welcomeOn){ if(e.key==="Enter" || e.key==="Escape"){ e.preventDefault(); closeWelcome(); } return; }
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k"){ e.preventDefault(); pal?closeOverlay():openPalette(); return; }
  if(pal){
    if(e.key==="Escape"){ closeOverlay(); return; }
    if(e.key==="ArrowDown"){ e.preventDefault(); pal.sel=Math.min(pal.list.length-1,pal.sel+1); paintPalette(); return; }
    if(e.key==="ArrowUp"){ e.preventDefault(); pal.sel=Math.max(0,pal.sel-1); paintPalette(); return; }
    if(e.key==="Enter"){ e.preventDefault(); const x=pal.list[pal.sel]; if(x){ closeOverlay(); x.run(); } return; }
    return;
  }
  if(menuOpen && e.key==="Escape"){ closeOverlay(); return; }
  if(e.key==="Escape" && drawer){ drawer=null; paintDrawer(); return; }
  if(view==="formations" && FS.p && !drawer && LS.mid && !LS.fin && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||"") && curCourse().m.type==="lecon"){ if(e.key==="ArrowRight"){ goSlide(LS.i+1); return; } if(e.key==="ArrowLeft"){ goSlide(LS.i-1); return; } }
  if(e.key==="/" && !drawer && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||"")){ e.preventDefault(); openPalette(); return; }
  if(e.key==="Enter" && e.target.matches("[data-open][tabindex], [data-open][role=button]") && !e.target.matches("button")){ const [c,id]=e.target.dataset.open.split(":"); openDrawer(c,id); }
  if(e.key==="Enter" && e.target.matches("[data-go][role=button]")){ e.target.click(); }
});
document.addEventListener("submit", e=>{ if(!e.target || e.target.id!=="dForm") return; e.preventDefault(); if(drawer) saveDrawer(); });
document.addEventListener("input", e=>{
  if(e.target.id==="palQ"){ pal.q=e.target.value; pal.sel=0; paintPalette(); return; }
  if(e.target.id==="q"){ F.q=e.target.value; if(view==="taches"){ const pos=e.target.selectionStart; render(); const q=$("#q"); if(q){ q.focus(); try{q.setSelectionRange(pos,pos);}catch(_){} } } else renderListBody(); }
});
document.addEventListener("change", e=>{
  if(e.target.id==="fproc"){ F.processus=e.target.value; renderListBody(); }
  if(e.target.id==="fextra"){ F.extra=e.target.value; renderListBody(); }
  if(e.target.id==="fexi"){ F.exiStat=e.target.value; render(); }
  if(e.target.id==="fassign"){ F.assignee=e.target.value; render(); }
  if(e.target.id==="fprio"){ F.prio=e.target.value; render(); }
});
/* glisser-déposer des tâches */
let dragId=null;
document.addEventListener("dragstart", e=>{ const c=e.target.closest?.(".card[data-task]"); if(!c) return; dragId=c.dataset.task; c.classList.add("dragging"); try{ e.dataTransfer.setData("text/plain", dragId); e.dataTransfer.effectAllowed="move"; }catch(_){} });
document.addEventListener("dragend", e=>{ e.target.closest?.(".card")?.classList.remove("dragging"); document.querySelectorAll(".col.drop").forEach(x=>x.classList.remove("drop")); dragId=null; });
document.addEventListener("dragover", e=>{ const col=e.target.closest?.(".col[data-col]"); if(!col||!dragId) return; e.preventDefault(); document.querySelectorAll(".col.drop").forEach(x=>x!==col&&x.classList.remove("drop")); col.classList.add("drop"); });
document.addEventListener("drop", e=>{ const col=e.target.closest?.(".col[data-col]"); if(!col||!dragId) return; e.preventDefault(); const t=byId("taches",dragId); if(t && t.statut!==col.dataset.col) setTask(dragId,{statut:col.dataset.col}); col.classList.remove("drop"); });

let clearArmed=false;
async function clearExamples(btn){
  if(!clearArmed){ clearArmed=true; btn.textContent="Confirmer : effacer les exemples"; btn.classList.add("danger","armed"); setTimeout(()=>{clearArmed=false; if(btn.isConnected){btn.textContent="Effacer les exemples"; btn.classList.remove("danger","armed");}},5000); return; }
  clearArmed=false; btn.disabled=true; btn.textContent="Suppression…";
  try{
    for(const c of ["risques","controles","tests","actions","taches","equipe"]){ for(const o of S[c].filter(x=>x.exemple)){ if(mode==="db") await db.collection(c).doc(o.id).delete(); } if(mode!=="db") S[c]=S[c].filter(x=>!x.exemple); }
    if(mode!=="db") render(); toast("Exemples effacés : à vous de jouer");
  }catch(e){ toast("Effacement interrompu, réessayez"); render(); }
}

/* ---------- Export CSV ---------- */
const EXPORT = {
  risques:[["Réf.",o=>o.ref],["Risque",o=>o.titre],["Catégorie",o=>o.categorie],["Processus",o=>o.processus],["Propriétaire",o=>o.proprietaire],["Description",o=>o.description],["Probabilité",o=>o.proba],["Impact",o=>o.impact],["Criticité inhérente",o=>inh(o)||""],["Probabilité résiduelle",o=>o.probaR],["Impact résiduel",o=>o.impactR],["Criticité résiduelle",o=>res(o)||""],["Niveau résiduel",o=>level(res(o))?.n],["Traitement",o=>o.traitement],["Nb contrôles",o=>S.controles.filter(c=>c.risqueId===o.id).length]],
  controles:[["Réf.",o=>o.ref],["Contrôle",o=>o.titre],["Clé",o=>o.cle?"Oui":"Non"],["Risque",o=>byId("risques",o.risqueId)?.ref],["Catégorie",o=>byId("risques",o.risqueId)?.categorie],["Processus",o=>procOf(o,"controles")],["Description",o=>o.description],["Type",o=>o.type],["Nature",o=>o.nature],["Fréquence",o=>o.frequence],["Responsable",o=>o.proprietaire],["Preuve",o=>o.preuve],["Dernier résultat",o=>lastTest(o.id)?.resultat],["Date dernier test",o=>lastTest(o.id)?.date]],
  tests:[["Réf.",o=>o.ref],["Contrôle",o=>byId("controles",o.controleId)?.ref],["Intitulé contrôle",o=>byId("controles",o.controleId)?.titre],["Type de test",o=>o.typeTest],["Méthode",o=>o.methode],["Période",o=>o.periode],["Date",o=>o.date],["Testeur",o=>o.testeur],["Échantillon",o=>o.echantillon],["Exceptions",o=>o.exceptions],["Résultat",o=>o.resultat],["Conclusion",o=>o.commentaire]],
  actions:[["Réf.",o=>o.ref],["Constat",o=>o.titre],["Description",o=>o.description],["Contrôle",o=>byId("controles",o.controleId)?.ref],["Risque",o=>byId("risques",o.risqueId)?.ref],["Gravité",o=>o.gravite],["Origine",o=>o.source],["Action corrective",o=>o.recommandation],["Responsable",o=>o.responsable],["Échéance",o=>o.echeance],["Statut",o=>o.statut],["Avancement %",o=>o.avancement],["En retard",o=>isLate(o)?"Oui":"Non"]],
};
async function exportCsv(){
  const col=view, cols=EXPORT[col], rows=filtered(col).sort(sortRef);
  const cell=v=>{ const s=String(v??""); return /[;"\n\r]/.test(s)?`"${s.replace(/"/g,'""')}"`:s; };
  const csv="﻿"+[cols.map(c=>c[0]).join(";"), ...rows.map(o=>cols.map(c=>cell(c[1](o))).join(";"))].join("\r\n");
  const dl = await downloadsP;
  if(!dl){ toast("Export indisponible dans cet affichage"); return; }
  try{ await dl.save({filename:`${col}-controle-interne-${TODAY_ISO}.csv`, data:csv}); toast("Fichier exporté"); }
  catch(e){ if(e && e.code!=="declined") toast("L'export n'a pas abouti"); }
}

/* =========================================================
   Données
   ========================================================= */
let downloadsP = Promise.resolve({ save: async ({filename, data}) => Stockage.telecharger(filename, data) });
render(); startRadar(); setTimeout(()=>{ if(welcomeOn && !document.querySelector(".setup")) $("#wGo")?.focus({preventScroll:true}); }, 50);
Stockage.demarrer().then(({db:d, identite})=>{
  ME = {id: identite.poste, name: identite.nom}; uid = identite.poste;
  db = d; mode = "db";
  COLS.forEach(c=>{
    db.collection(c).onSnapshot(snap=>{
      S[c]=snap.docs.map(x=>({...x.data(), id:x.id})); loaded[c]=true;
      if(drawer && drawer.id && drawer.col===c && !byId(c, drawer.id)){ drawer=null; paintDrawer(); }
      scheduleRender();
    });
  });
  const mine = db.collection("data/users/"+uid);
  progRef = mine.doc("formation"); prefsRef = mine.doc("prefs");
  progRef.onSnapshot(s=>{ if(s.exists){ const d0=s.data()||{}; const p=d0.progress; if(p && typeof p==="object") PROG={...p}; const g=d0.game; if(g && typeof g==="object") GAME={xp:Number(g.xp)||0, w:(g.w&&typeof g.w==="object")?g.w:{}, days:Array.isArray(g.days)?g.days:[]}; } progLoaded=true; scheduleRender(); });
  prefsRef.onSnapshot(s=>{ const p=(s.exists&&s.data())||{}; PREFS={prenom:String(p.prenom||""), fonction:String(p.fonction||identite.fonction||"")}; scheduleRender(); });
});
function startMemory(){ mode="memory"; COLS.forEach(c=>loaded[c]=true); progLoaded=true; render(); }
let rq=0; function scheduleRender(){ cancelAnimationFrame(rq); rq=requestAnimationFrame(()=>{
  const ae=document.activeElement, qFocus = ae && ae.id==="q", pos = qFocus ? ae.selectionStart : null, y=window.scrollY;
  if(view==="formations" && FS.p){ renderNav(); renderWelcome(); return; }
  render(); window.scrollTo(0,y); if(qFocus){ const q=$("#q"); if(q){ q.focus(); try{q.setSelectionRange(pos,pos);}catch(_){} } }
}); }
})();
