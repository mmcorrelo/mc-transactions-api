import Transaction from '@models/transaction.model';

const alter: boolean = Boolean(parseInt(process.env.DB_ALTER || ''));
const force: boolean = Boolean(parseInt(process.env.DB_DROP_TABLES || ''));

const SQLInit: () => void = () => {
  Transaction.sync({ alter, force });
};

export default SQLInit;