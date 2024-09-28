/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'my-site-cache-v1';
const URLS = ['/', '/index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.filter(() => true).map((name) => caches.delete(name)),
        ),
      ),
  );
});

