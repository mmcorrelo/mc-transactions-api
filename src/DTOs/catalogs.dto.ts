import { ITransactionInput } from "@models/transaction.model";

interface ITransactionCatalogPayload {
  nullable: boolean;
  searchable: boolean;
}

interface ITransactionCatalogResponse extends ITransactionCatalogPayload {
  key: keyof ITransactionInput;
  title: string;
  type: string;
}

export {
  ITransactionCatalogPayload,
  ITransactionCatalogResponse
};