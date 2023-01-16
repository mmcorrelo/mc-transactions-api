
import * as CatalogsDTO from '@dto/catalogs.dto';
import * as TransactionsCatalog from '@catalogs/transactions.catalog';

export const transactionsCatalog = (payload: Partial<CatalogsDTO.ITransactionCatalogPayload>): Array<CatalogsDTO.ITransactionCatalogResponse> => {
    return TransactionsCatalog.transactions
        .filter((t: CatalogsDTO.ITransactionCatalogResponse) => (payload.nullable == null || t.nullable === payload.nullable) && (payload.searchable == null || t.searchable === payload.searchable))
};

