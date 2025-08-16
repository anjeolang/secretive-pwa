self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('secretive-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/qrma_review.html',
        '/qrma_create.html',
        '/history.html',
        '/client_problem.html',
        '/finish_client.html',
        '/client_schedule.html',
        '/style.css',
        '/script.js',
        '/assets/QRMA.txt'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

