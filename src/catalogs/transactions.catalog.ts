import { ITransactionCatalogResponse } from "@dto/catalogs.dto";

interface ITransactionCatalog extends ITransactionCatalogResponse {}

const transactions: Array<ITransactionCatalog> = [
    {
        key: 'ID',
        title: 'Id',
        nullable: false,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'payment_method',
        title: 'Payment Method',
        nullable: false,
        searchable: true,
        type: 'STRING'
    },
    {
        key: 'purchase_category',
        title: 'Purchase Category',
        nullable: false,
        searchable: true,
        type: 'STRING'
    },
    {
        key: 'country',
        title: 'Country',
        nullable: false,
        searchable: true,
        type: 'STRING'
    },
    {
        key: 'created_time',
        title: 'Created Time',
        nullable: false,
        searchable: false,
        type: 'DATE'
    },
    {
        key: 'euro_price',
        title: 'Euro Price',
        nullable: false,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'zero_conf_time',
        title: 'Zero Conf Time',
        nullable: true,
        searchable: false,
        type: 'DATE'
    },
    {
        key: 'time_to_onchain_conf',
        title: 'Time to Onchain Conf',
        nullable: true,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'is_from_exchange',
        title: 'Is From Exchange',
        nullable: false,
        searchable: false,
        type: 'BOOLEAN'
    },
    {
        key: 'exchange_name',
        title: 'Exchange Name',
        nullable: true,
        searchable: true,
        type: 'STRING'
    },
    {
        key: 'fee_rate',
        title: 'Fee Rate',
        nullable: true,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'fee_estimates',
        title: 'Fee Estimates',
        nullable: true,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'has_account',
        title: 'Has Account',
        nullable: false,
        searchable: false,
        type: 'BOOLEAN'
    },
    {
        key: 'satoshi_amount',
        title: 'Satoshi Amount',
        nullable: false,
        searchable: false,
        type: 'INTEGER'
    },
    {
        key: 'user_wallet',
        title: 'User Wallet',
        nullable: true,
        searchable: true,
        type: 'STRING'
    },
    {
        key: 'is_walletconnect',
        title: 'Is Wallet Connect',
        nullable: false,
        searchable: false,
        type: 'BOOLEAN'
    }
];

export {
    ITransactionCatalog,
    transactions
}