import { NextFunction, Request, Response } from 'express';

import { ITransactionInput } from '@models/transaction.model';

const validatePayloadField = async (field: string, fieldKey: string, allowedKeys: Array<string>, req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (!field || !allowedKeys.includes(field)) {
    next(new Error(`The payload field '${fieldKey}' has the invalid value '${field}'`));
  } else {
    next();
  }
};

const validateSearchableTransactionField = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { field: keyof ITransactionInput } = req.body as any;
  const allowedKeys: Array<keyof ITransactionInput> = ['payment_method', 'purchase_category', 'country', 'euro_price', 'exchange_name', 'user_wallet'];

  validatePayloadField(payload.field, 'field', allowedKeys, req, res, next);
};

const validateNullableTransactionField = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { nullableField: keyof ITransactionInput } = req.body as any;
  const allowedKeys: Array<keyof ITransactionInput> = ['zero_conf_time', 'time_to_onchain_conf', 'exchange_name', 'fee_rate', 'fee_estimates', 'user_wallet'];

  validatePayloadField(payload.nullableField, 'nullableField', allowedKeys, req, res, next);
};

const validatePeriodFieldValue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { period: 'days' | 'week' | 'month' | 'year' } = req.body as any;
  const allowedKeys: Array<string> = ['days', 'week', 'month', 'year'];

  validatePayloadField(payload.period, 'period', allowedKeys, req, res, next);
};

export {
  validateSearchableTransactionField,
  validatePeriodFieldValue,
  validateNullableTransactionField,
};