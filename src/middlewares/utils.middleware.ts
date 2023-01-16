import { NextFunction, Request, Response } from 'express';

import { ITransactionInput } from '@models/transaction.model';

const validatePayloadField = async (field: string, fieldKey: string, allowedKeys: Array<string>, req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (!field || !allowedKeys.includes(field)) {
    next(new Error(`The payload field '${fieldKey}' has the invalid value '${field}'`));
  } else {
    next();
  }
};

const validateTransactionFieldValue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { field: keyof ITransactionInput } = req.body as any;
  const allowedKeys: Array<keyof ITransactionInput> = ['ID', 'payment_method', 'purchase_category', 'country', 'created_time', 'euro_price', 'zero_conf_time', 'time_to_onchain_conf', 'is_from_exchange', 'exchange_name', 'fee_rate', 'fee_estimates', 'has_account', 'satoshi_amount', 'user_wallet', 'is_walletconnect'];

  validatePayloadField(payload.field, 'field', allowedKeys, req, res, next);
};

const validatePeriodFieldValue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { period: 'days' | 'week' | 'month' | 'year' } = req.body as any;
  const allowedKeys: Array<string> = ['days', 'week', 'month', 'year'];

  validatePayloadField(payload.period, 'period', allowedKeys, req, res, next);
};

export {
  validateTransactionFieldValue,
  validatePeriodFieldValue,
};