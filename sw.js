/* Offline cache so the site opens fast and works like an app */
const C = 'nawroz-v5';
const CORE = ['./', './index.html', './manifest.webmanifest', './standalone.js', './app.js', './icons/icon-192.png', './img/logo.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/api/')) return;
  if (u.pathname.includes('/img/') || u.pathname.includes('/icons/')) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cl = res.clone(); caches.open(C).then(c => c.put(e.request, cl)); return res; })));
    return;
  }
  e.respondWith(fetch(e.request).then(res => { const cl = res.clone(); caches.open(C).then(c => c.put(e.request, cl)); return res; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
