import ReactDOM from 'react-dom/server';
import { App } from './app';

import './index.css';

export const render = () => ReactDOM.renderToString(<App />);
