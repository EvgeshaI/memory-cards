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

self.addEventListener('message', async (event) => {
  if (event.data && event.data.type === 'SET_LAST_GAME_TIME') {
    const lastGameTime = event.data.lastGameTime;
    console.log('Получено время последней игры:', lastGameTime);

    await setLastGameTime(lastGameTime);
  }
});

async function setLastGameTime(time) {
  try {
    const db = await openDB();
    const tx = db.transaction('gameData', 'readwrite');
    const store = tx.objectStore('gameData');
    console.log('Сохраняем время:', time);
    await store.put(time, 'lastGameTime');
    await tx.complete;
    console.log('Время последней игры сохранено');
  } catch (error) {
    console.error('Ошибка при сохранении времени игры:', error);
  }
}

async function getLastGameTime() {
  try {
    const db = await openDB();
    const tx = db.transaction('gameData', 'readonly');
    const store = tx.objectStore('gameData');
    const request = store.get('lastGameTime');

    return new Promise((resolve, reject) => {
      request.onsuccess = function () {
        console.log('Извлеченное время игры:', request.result);
        resolve(request.result);
      };

      request.onerror = function () {
        console.error('Ошибка при получении времени игры:', request.error);
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Ошибка при получении времени игры:', error);
    return null;
  }
}

async function sendNotification() {
  if (Notification.permission !== 'granted') {
    console.log('Уведомления не разрешены');
    return;
  }

  try {
    console.log('Попытка отправить уведомление');
    await self.registration.showNotification('Memory cards', {
      body: 'Вы не тренировались сегодня. Заходите и поиграйте',
      icon: './notification-icon.png',
    });
    console.log('Уведомление отправлено успешно');
  } catch (error) {
    console.error('Ошибка при отправке уведомления:', error);
  }
}
async function checkLastGameTime() {
  const lastGameTime = await getLastGameTime();
  if (lastGameTime) {
    const now = new Date();
    const lastGameDate = new Date(lastGameTime);

    if (isNaN(lastGameDate.getTime())) {
      console.error('Некорректное значение даты:', lastGameTime);
    } else {
      console.log('Текущее время:', now);
      console.log('Время последней игры:', lastGameDate);

      const timeDiff = now - lastGameDate;
      console.log('Разница во времени (мс):', timeDiff);

      if (timeDiff > 1 * 60 * 1000) {
        sendNotification();
      }
    }
  } else {
    sendNotification();
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('gameDB', 1);
    
    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('gameData')) {
        db.createObjectStore('gameData');
      }
    };

    request.onsuccess = function(event) {
      resolve(event.target.result);
    };

    request.onerror = function(event) {
      reject(event.target.error);
    };
  });
}

//setInterval(checkLastGameTime, 24 * 60 * 60 * 1000);
setInterval(() => {
  console.log('Запускаем проверку времени последней игры');
  checkLastGameTime();
}, 60 * 1000);
