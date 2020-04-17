import express from 'express';
import { getAll } from '../controllers/leaderboard';

const router = express.Router();

router.get('/', (_, res) => {
  const leaderboard = getAll();
  res.json(leaderboard);
});

export default router;
