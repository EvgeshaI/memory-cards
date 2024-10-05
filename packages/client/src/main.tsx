import { createRoot } from 'react-dom/client';
import { App } from './app';
import { subscribeToPush } from './shared/api/subscribeToPush';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    subscribeToPush(registration);
  });
}

root.render(<App />);
