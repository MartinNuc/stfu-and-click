import { ClickRequest } from 'stfu-and-click-shared/src/click';
import express from 'express';
import { registerClick } from '../controllers/click';
import { getUsersSummary } from '../controllers/summary';

const router = express.Router();

router.post('/', (req, res) => {
  const click = req.body as ClickRequest;
  registerClick(click);

  const mySummary = getUsersSummary(click.session);
  res.json(mySummary);
});

export default router;
