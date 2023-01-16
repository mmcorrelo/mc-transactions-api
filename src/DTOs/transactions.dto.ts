import { ITransactionInput } from '@models/transaction.model';

interface ITransaction {
  id: number | undefined;
  paymentMethod: string;
  purchaseCategory: string;
  country: string;
  createdTime: Date;
  euroPrice: number;
  isFromExchange: boolean;
  feeRate: number;
  feeEstimates: number;
  hasAccount: boolean;
  satoshiAmount: number;
  userWallet: string;
  isWalletConnect: boolean;
  zeroConfTime: Date | undefined;
  timeToOnchainConf: number | undefined;
  exchangeName: string | undefined;
}

interface ITransactionCreate extends ITransaction { }

interface ITransactionFilter { }

const toCreate: (payload: ITransactionCreate) => ITransactionInput = (payload: ITransactionCreate) => {
  return {
    id: payload?.id,
    payment_method: payload.paymentMethod!,
    purchase_category: payload.purchaseCategory!,
    country: payload.country!,
    created_time: payload.createdTime!,
    euro_price: payload.euroPrice!,
    is_from_exchange: payload.isFromExchange!,
    fee_rate: payload.feeRate!,
    fee_estimates: payload.feeEstimates!,
    has_account: payload.hasAccount!,
    satoshi_amount: payload.satoshiAmount!,
    user_wallet: payload.userWallet!,
    is_walletconnect: payload.isWalletConnect!,
    zero_conf_time: payload?.zeroConfTime,
    time_to_onchain_conf: payload?.timeToOnchainConf,
    exchange_name: payload?.exchangeName,
  };
};

export {
  ITransactionCreate,
  ITransactionFilter,
  toCreate,
};