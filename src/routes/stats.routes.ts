import * as StatsDTO from '@dto/stats.dto';
import * as UtilsMiddleware from '@middlewares/utils.middleware';
import { Router, NextFunction, Request, Response } from 'express';

import * as StatsController from '@controllers/stats.controller';

export const router = Router();

// eslint-disable-next-line
router.post('/breakdown', [UtilsMiddleware.validateSearchableTransactionField], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.IBreakdownStatsPayload = req.body;
  const result: Array<StatsDTO.IBreakdownStatsResponse> = await StatsController.breakdown(payload);

  return res.status(200).send(result);
});

// eslint-disable-next-line
router.post('/trend', [UtilsMiddleware.validateSearchableTransactionField, UtilsMiddleware.validatePeriodFieldValue], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.ITrendStatsPayload = req.body;
  const result: Array<StatsDTO.ITrendStatsResponse> = await StatsController.trend(payload);

  return res.status(200).send(result);
});

// eslint-disable-next-line
router.post('/nullablePercentage', [UtilsMiddleware.validateSearchableTransactionField, UtilsMiddleware.validateNullableTransactionField], async (req: Request, res: Response, next: NextFunction) => {
  const payload: StatsDTO.INUllableStatsPayload = req.body;
  const result: Array<StatsDTO.INUllableStatsResponse> = await StatsController.nullablePercentage(payload);

  return res.status(200).send(result);
});

export default router;