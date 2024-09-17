/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'my-site-cache-v1';
const URLS = ['/', '/index.html'];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Opened cache");
        return cache.addAll(URLS);
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(fetchedResponse => {
        if (!fetchedResponse || fetchedResponse.status !== 200 || fetchedResponse.type !== 'basic') {
          return fetchedResponse;
        }

        const responseToCache = fetchedResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return fetchedResponse;
      });
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.filter(() => true)
        .map(name => caches.delete(name))
    ))
  );
});