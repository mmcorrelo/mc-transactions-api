import { Router, Request, Response } from 'express';

import * as TransactionsController from '@controllers/transactions.controller';
import { ITransactionInput } from '@models/transaction.model';
import * as TransactionsDTO from '@dto/transactions.dto';

export const router = Router();

router.post('/add', async (req: Request, res: Response) => {
  const payload: TransactionsDTO.ITransactionCreate = req.body;
  const transactionDTO: ITransactionInput = TransactionsDTO.toCreate(payload);
  const result = await TransactionsController.create(transactionDTO);

  return res.status(200).send(result);
});

router.get('/all', async (req: Request, res: Response) => res.status(200).send([{ result: 'hello' }]));


export default router;