require('dotenv').config();
const express = require('express');
const expressConfig = require('./config/express');
import cors from 'cors';
import { createClientAndConnect } from './db';
import { Response } from 'express';
const mainPageRoute = require('./routes/api/main.route');

const app = express();
expressConfig(app);
app.use(cors());

createClientAndConnect();

app.use('/api/main', mainPageRoute);
app.get('/debug', (res: Response) => {
  res.send('Debugging information in console');
});

const port = Number(process.env.SERVER_PORT) || 3001;
app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
