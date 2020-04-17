import express from 'express';

const router = express.Router();

router.post('/', (_, res) => {
  res.json({
    "yourClicks": 1,
    "teamClicks": 5
  });
})

export default router;