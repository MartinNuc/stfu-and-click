import express from 'express';
import Leaderboard from './routes/leaderboard';
import Click from './routes/click';

const app = express();

app.use('/api/v1/leaderboard', Leaderboard);
app.use('/api/v1/click', Click);

app.listen(process.env.PORT || 3000);