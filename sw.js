// Service worker minimal — cache-first pour les ressources locales,
// network-first pour les CDN (avec fallback cache).
const CACHE_NAME = 'quizcollege-20260423-101545';
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
  // Ne pas mettre en cache save.php (POST d'ailleurs), ni les requêtes non-GET
  if (event.request.method !== 'GET') return;
  if (url.pathname.endsWith('save.php') || url.pathname.endsWith('results.log')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        // Ne pas cacher les erreurs
        if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        }
        return response;
      }).catch(() => cached);
      // Stratégie : cache-first pour réponse rapide, refresh en tâche de fond
      return cached || fetchPromise;
    })
  );
});
