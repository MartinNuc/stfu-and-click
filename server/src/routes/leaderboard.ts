import express from 'express';
import { getAll } from '../controllers/leaderboard';

const router = express.Router();

router.get('/', async (_, res) => {
  const leaderboard = await getAll();
  res.json(leaderboard);
});

export default router;
