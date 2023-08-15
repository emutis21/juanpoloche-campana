const CACHE_NAME = 'my-cache-v2'; 

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/',
          '/favicon.png',
          '/imgs/bg1.webp',
          '/imgs/bg2.webp',
          '/imgs/bg3.webp',
        ]);
      })
      .catch(error => {
        console.log('Error al almacenar en caché:', error);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
