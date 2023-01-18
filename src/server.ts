import http from 'http';

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import SQLInit from '@configs/init.config';
import AppRoutes from '@routes';

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors())

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


const httpServer = http.createServer(router);
const { SERVER_PORT } = process.env;

SQLInit();
httpServer.listen(SERVER_PORT, () => console.log(`The server is running on port ${SERVER_PORT}`));
