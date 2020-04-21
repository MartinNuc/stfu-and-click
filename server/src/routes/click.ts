import { ClickRequest } from 'stfu-and-click-shared/src/click';
import express from 'express';
import { registerClick } from '../controllers/click';
import { getUserSummary } from '../controllers/summary';

const router = express.Router();

router.post('/', async (req, res) => {
  const click = req.body as ClickRequest;
  registerClick(click);

  const mySummary = await getUserSummary(click);
  res.json(mySummary);
});

export default router;
