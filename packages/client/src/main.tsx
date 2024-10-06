import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { subscribeToPush } from './shared/api/subscribeToPush';

const container = document.getElementById('root') as HTMLElement;

if (typeof navigator !== 'undefined') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      subscribeToPush(registration);
    });
  }
}

ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
