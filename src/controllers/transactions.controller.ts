import * as TransactionsDAL from '@dal/transactions.dal';

import { ITransactionInput, ITransactionOuput } from '@models/transaction.model';


export const create = (payload: ITransactionInput): Promise<ITransactionOuput> => TransactionsDAL.create(payload);
