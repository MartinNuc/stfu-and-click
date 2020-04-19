import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import { LoggerStream } from './utils/logger';

import LeaderboardRoute from './routes/leaderboard';
import ClickRoute from './routes/click';

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny', { stream: new LoggerStream() }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1/leaderboard', LeaderboardRoute);
app.use('/api/v1/click', ClickRoute);

// when the stfu-and-click workspace is built the React is placed into public folder
app.get('/*', (_, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html')),
);
export default app;
