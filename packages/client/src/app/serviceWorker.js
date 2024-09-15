export const CACHE_NAME = 'my-site-cache-v1';
export const URLS = [
    '/',
    '/index.html',
    '/app.tsx',
]

function startServiceWorker(){
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
navigator.serviceWorker.register('/sw.js').then(registration => {
console.log('SeviceWorker registration sucessful with scope: ', registration.scope);

}).catch((error)=>{
    console.log('ServiceWorker registration failed:', error);
});
})
}
}

this.addEventListener('install', event => {
    event.waitUtil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            console.log('Open cache');
            return cache.addAll(URLS)
        })
        .catch(err =>{
            console.log(err);
            throw err;
        })
    )
});

this.addEventListener('fetch', event => {
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

this.addEventListener("activate", (event) => { 
    event.waitUntil( 
        caches.keys().then(cacheNames => Promise.all( 
                cacheNames.filter(() => true)  // Adjust filtering logic as necessary
                    .map(name => caches.delete(name))
            ))
    ); 
}); 

startServiceWorker()
