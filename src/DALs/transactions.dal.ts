import Transaction, { ITransactionInput, ITransactionOuput } from '@models/transaction.model';

export const create = async (payload: ITransactionInput): Promise<ITransactionOuput> => Transaction.create(payload);
