import Transaction from '@models/transaction.model';

const alter: boolean = Boolean(process.env.DB_ALTER);

const SQLInit: () => void = () => {
  Transaction.sync({ alter, force: true });
};

export default SQLInit;