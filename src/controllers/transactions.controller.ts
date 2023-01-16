import * as TransactionsDAL from '@dal/transactions.dal';
import * as TransactionsDTO from '@dto/transactions.dto';
import { ITransactionInput } from '@models/transaction.model';

export const create = (payload: ITransactionInput): Promise<TransactionsDTO.ITransactionCreateResponse> => TransactionsDAL.create(payload);
