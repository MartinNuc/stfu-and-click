import express from 'express';

const router = express.Router();

const leaderboardMock = [
  {
    "order": 1,
    "team": "Applifting s.r.o.",
    "clicks": 17
  },
  {
    "order": 2,
    "team": "Martin Nuc",
    "clicks": 15
  }
];

router.get('/', (_, res) => {
  res.json(leaderboardMock);
})

export default router;