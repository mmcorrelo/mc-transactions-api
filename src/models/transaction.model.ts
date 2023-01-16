import { DataTypes, Model, Optional } from 'sequelize';

import SQLConnection from '@configs/db.config';

interface ITransactionAttributes {
  ID: number;
  payment_method: string;
  purchase_category: string;
  country: string;
  created_time: Date;
  euro_price: number;
  zero_conf_time?: Date;
  time_to_onchain_conf?: number;
  is_from_exchange: boolean;
  exchange_name?: string;
  fee_rate: number;
  fee_estimates: number;
  has_account: boolean;
  satoshi_amount: number;
  user_wallet: string;
  is_walletconnect: boolean;
}

export interface ITransactionInput extends Optional<ITransactionAttributes, 'ID'> { }
export interface ITransactionOuput extends Required<ITransactionAttributes> { }

class Transaction extends Model<ITransactionAttributes, ITransactionInput> implements ITransactionAttributes {
  declare ID: number;

  declare payment_method: string;

  declare purchase_category: string;

  declare country: string;

  declare created_time: Date;

  declare euro_price: number;

  declare is_from_exchange: boolean;

  declare fee_rate: number;

  declare fee_estimates: number;

  declare has_account: boolean;

  declare satoshi_amount: number;

  declare user_wallet: string;

  declare is_walletconnect: boolean;

  declare zero_conf_time: Date;

  declare time_to_onchain_conf: number;

  declare exchange_name: string;
}

Transaction.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchase_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    euro_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    zero_conf_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    time_to_onchain_conf: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_from_exchange: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    exchange_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fee_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fee_estimates: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    has_account: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    satoshi_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_wallet: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_walletconnect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    sequelize: SQLConnection,
    paranoid: false,
    modelName: 'transactions',
  },
);

export default Transaction;

