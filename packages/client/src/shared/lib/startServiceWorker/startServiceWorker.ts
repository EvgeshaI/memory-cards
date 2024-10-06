export const startServiceWorker = (path: string): void => {
  if (typeof navigator !== 'undefined') {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(path)
          .then((registration) => {
            console.log(
              'ServiceWorker registration successful with scope: ',
              registration.scope,
            );
          })
          .catch((error) => {
            console.log('ServiceWorker registration failed:', error);
          });
      });
    }
  }
};
