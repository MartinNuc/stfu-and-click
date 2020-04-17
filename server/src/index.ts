import express from 'express';
import morgan from 'morgan';

import logger, { LoggerStream } from './utils/logger';

import LeaderboardRoute from './routes/leaderboard';
import ClickRoute from './routes/click';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny', { stream: new LoggerStream() }));

app.use('/api/v1/leaderboard', LeaderboardRoute);
app.use('/api/v1/click', ClickRoute);

app.listen(port, () => logger.info(`Listening on port ${port}.`));
