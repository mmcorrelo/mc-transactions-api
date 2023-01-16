import * as StatsDTO from '@dto/stats.dto';
import * as UtilsMiddleware from '@middlewares/utils.middleware';
import { Router, NextFunction, Request, Response } from 'express';

import * as StatsController from '@controllers/stats.controller';

export const router = Router();

// eslint-disable-next-line
router.post('/breakdown', [UtilsMiddleware.validateSearchableTransactionField], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.IBreakdownStats = req.body;
  const result: Array<StatsDTO.IBreakdownStatsResult> = await StatsController.breakdown(payload);

  return res.status(200).send(result);
});

// eslint-disable-next-line
router.post('/trend', [UtilsMiddleware.validateSearchableTransactionField, UtilsMiddleware.validatePeriodFieldValue], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.ITrendStats = req.body;
  const result: Array<StatsDTO.ITrendStatsResult> = await StatsController.trend(payload);

  return res.status(200).send(result);
});

// eslint-disable-next-line
router.post('/nullablePercentage', [UtilsMiddleware.validateSearchableTransactionField, UtilsMiddleware.validateNullableTransactionField], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.INUllableStats = req.body;
  const result: Array<StatsDTO.INUllableStatsResult> = await StatsController.nullablePercentage(payload);

  return res.status(200).send(result);
});

export default router;