import https from 'https';
import express, { Express, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import cors from 'cors';

import SQLInit from '@configs/init.config';
import AppRoutes from '@routes';

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors())

let certificatesPath = './certificates';

if (process.env.NODE_ENV === 'production') {
  certificatesPath = '/home/ubuntu/server/package'
}
console.log(certificatesPath)
const key = fs.readFileSync(`${certificatesPath}/private.key`);
const cert = fs.readFileSync(`${certificatesPath}/certificate.crt`);
const cred = { key, cert }

/** Routes */
router.use('/v1', AppRoutes);

/** Error Handling */
// TODO: Improve error handling & logs
// eslint-disable-next-line
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(`Router error: ${err}`);

  return res.status(400).json({
    code: 400,
    message: err.message,
  });
});


const httpServer = https.createServer(cred, router);
const { SERVER_PORT } = process.env;

SQLInit();
httpServer.listen(SERVER_PORT, () => console.log(`The server is running on port ${SERVER_PORT}`));
