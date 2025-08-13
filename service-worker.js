const cacheName = "secretive-pwa-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/qrma_review.html",
  "/qrma_create.html",
  "/result.html",
  "/history.html",
  "/client_problem.html",
  "/finish_client.html",
  "/client_schedule.html",
  "/style.css",
  "/js/app.js",
  "/assets/QRMA.txt"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});