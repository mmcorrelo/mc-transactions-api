import { ITransactionInput, ITransactionOuput } from '@models/transaction.model';

import * as TransactionsDAL from '@dal/transactions.dal';

export const create = (payload: ITransactionInput): Promise<ITransactionOuput> => TransactionsDAL.create(payload);
