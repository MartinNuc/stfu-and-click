import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { LoggerStream } from './utils/logger';

import LeaderboardRoute from './routes/leaderboard';
import ClickRoute from './routes/click';

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny', { stream: new LoggerStream() }));

app.use('/api/v1/leaderboard', LeaderboardRoute);
app.use('/api/v1/click', ClickRoute);

export default app;