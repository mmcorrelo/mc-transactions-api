
const fs = require('fs');

const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT as unknown as number || 5432,
});

const path: string = './src/scripts';

client.connect()
  .then(() => {
    // eslint-disable-next-line
    fs.readFile(`${path}/sql_export.json`, 'utf8', (fError: NodeJS.ErrnoException | null, fileData: string) => {
      if (fError) {
        console.log(`Error loading the file: ${fError}`);
        return;
      }

      const data: any = JSON.parse(fileData);

      data.rows.forEach((row: any, index: number) => {
        const zeroConfTime: string | null = row.zero_conf_time ? `'${row.zero_conf_time}'` : null;
        const createdTime: string | null = row.created_time ? `'${row.created_time}'` : null;
        const userWallet: string | null = row.user_wallet ? `'${row.user_wallet}'` : null;
        const exchangeName: string | null = row.exchange_name ? `'${row.exchange_name}'` : null;

        const query: string = `INSERT INTO transactions (payment_method, purchase_category, country, created_time, euro_price, zero_conf_time, time_to_onchain_conf, is_from_exchange, exchange_name, fee_rate, fee_estimates, has_account, satoshi_amount, user_wallet, is_walletconnect) VALUES (
                    '${row.payment_method}', 
                    '${row.purchase_category}', 
                    '${row.country}', 
                    ${createdTime}, 
                    ${row.euro_price}, 
                    ${zeroConfTime}, 
                    ${row.time_to_onchain_conf}, 
                    ${row.is_from_exchange === 1}, 
                    ${exchangeName},
                    ${row.fee_rate ? row.fee_rate : null}, 
                    ${row.fee_estimates ? row.fee_estimates : null}, 
                    ${row.has_account === 1}, 
                    ${row.satoshi_amount}, 
                    ${userWallet}, 
                    ${row.is_walletconnect === 'Y'}
        )`;

        client.query(query).then(() => {
          console.log(`Successfully inserted row id: ${row.ID}`);

          if (data.rows.length === index + 1) {
            process.exit(1); // eslint-disable-line
          }
        }).catch((err: Error) => {
          console.log(`Failed inserting data: ${err}`);
          console.log('---------------');
          console.log(query);
          console.log('---------------');
          console.log(row);

          process.exit(1); // eslint-disable-line
        });
      });
    });
  }).catch((err: Error) => {
    console.log(`Error connecting to PostgreSQL server. Error: ${err}`);
    process.exit(1); // eslint-disable-line
  });


