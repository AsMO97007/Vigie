/* Vigie — service worker : permet d'ouvrir l'application sans connexion.
   Les fichiers de l'application sont toujours repris du réseau quand il est disponible,
   pour que chacun reçoive automatiquement les mises à jour publiées sur GitHub. */
const CACHE = "vigie-v6";
const COQUILLE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(COQUILLE.map(f => c.add(f).catch(() => null)))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(fetch(req, {cache: "no-cache"}).then(r => { const copie = r.clone(); caches.open(CACHE).then(c => c.put(req, copie)); return r; }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(n => { const copie = n.clone(); caches.open(CACHE).then(c => c.put(req, copie)); return n; })));
  }
});
