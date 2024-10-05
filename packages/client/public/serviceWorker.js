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
  const { url } = event.request;

  const currentOrigin = self.location.origin;

  if (url.includes('/save-last-game-time') || url.includes('/subscribe') || url.includes(currentOrigin)) {
    return;
  }

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

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.filter(() => true)
        .map(name => caches.delete(name))
    ))
  );
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || 'Memory cards';
  const body = data.body || 'Вы не тренировались сегодня. Заходите и поиграйте!';
  const icon = data.icon || './notification-icon.png';

  const options = {
    body,
    icon
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
