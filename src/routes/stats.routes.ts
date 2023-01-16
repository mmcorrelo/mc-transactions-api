import * as StatsDTO from '@dto/stats.dto';
import * as UtilsMiddleware from '@middlewares/utils.middleware';
import { Router, NextFunction, Request, Response } from 'express';

import * as StatsController from '@controllers/stats.controller';

export const router = Router();

// eslint-disable-next-line
router.post('/breakdown', [UtilsMiddleware.validateTransactionFieldValue], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.IBreakdownStats = req.body;

  const result = await StatsController.breakdown(payload);

  return res.status(200).send(result);
});

// eslint-disable-next-line
router.post('/trend', [UtilsMiddleware.validateTransactionFieldValue, UtilsMiddleware.validatePeriodFieldValue], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.ITrendStats = req.body;
  const result = await StatsController.trend(payload);

  return res.status(200).send(result);
});

export default router;