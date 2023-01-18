import { NextFunction, Request, Response } from 'express';

import { ITransactionInput } from '@models/transaction.model';
import * as TransactionsCatalog from '@catalogs/transactions.catalog';

const validatePayloadField = async (field: string, fieldKey: string, allowedKeys: Array<string>, req: Request, res: Response, next: NextFunction): Promise<void> => {  
  if (!field || !allowedKeys.includes(field)) {
    next(new Error(`The payload field '${fieldKey}' has the invalid value '${field}'`));
  } else {
    next();
  }
};

const validateSearchableTransactionField = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { field: keyof ITransactionInput } = req.body as any;
  const allowedKeys: Array<keyof ITransactionInput> = TransactionsCatalog.transactions
    .filter((t: TransactionsCatalog.ITransactionCatalog) => t.searchable)
    .map((t: TransactionsCatalog.ITransactionCatalog) => t.key)

  validatePayloadField(payload.field, 'field', allowedKeys, req, res, next);
};

const validateNullableTransactionField = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { nullableField: keyof ITransactionInput } = req.body as any;
  const allowedKeys: Array<keyof ITransactionInput> = TransactionsCatalog.transactions
    .filter((t: TransactionsCatalog.ITransactionCatalog) => t.nullable)
    .map((t: TransactionsCatalog.ITransactionCatalog) => t.key)

  validatePayloadField(payload.nullableField, 'nullableField', allowedKeys, req, res, next);
};

const validatePeriodFieldValue = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const payload: { period: 'days' | 'week' | 'month' | 'year' } = req.body as any;
  const allowedKeys: Array<string> = ['day', 'week', 'month', 'year'];

  validatePayloadField(payload.period, 'period', allowedKeys, req, res, next);
};

export {
  validateSearchableTransactionField,
  validatePeriodFieldValue,
  validateNullableTransactionField,
};