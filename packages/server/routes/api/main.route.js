const router = require('express').Router();
import { renderToString } from 'react-dom/server';
import {MainPage} from '../../../client/src/pages'

router.get('/main', (req, res) => {
    const content = renderToString(<MainPage />);
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My App</title>
        </head>
        <body>
            <div id="app">${content}</div>
        </body>
        </html>
    `;
    res.send(html);
});