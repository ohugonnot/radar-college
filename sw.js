// Service worker minimal — cache-first pour les ressources locales,
// network-first pour les CDN (avec fallback cache).
const CACHE_NAME = 'quizcollege-20260424-180102';
// SPA : un seul HTML. Les anciens {matiere}-{niveau}.html n'existent plus.
const LOCAL_ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(LOCAL_ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Ne pas mettre en cache save.php (POST d'ailleurs) ni load.php (données utilisateur dynamiques)
  // ni les requêtes non-GET
  if (event.request.method !== 'GET') return;
  if (url.pathname.endsWith('save.php') || url.pathname.endsWith('load.php') || url.pathname.endsWith('results.log')) return;

  // Stratégie : network-first pour le HTML (index.html + navigations) pour éviter qu'un
  // build cassé reste figé côté client. Fallback cache si offline. SWR pour le reste.
  const isHtml = event.request.mode === 'navigate'
              || url.pathname.endsWith('/')
              || url.pathname.endsWith('.html');

  if (isHtml) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match(event.request).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
