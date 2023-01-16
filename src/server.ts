import http from 'http';

import express, { Express, Request, Response, NextFunction } from 'express';

import SQLInit from '@configs/init.config';
import AppRoutes from '@routes';

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With,Content-Type,Accept, Authorization',
  );

  // set the CORS method headers
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }

  return next();
});


/** Routes */
router.use('/v1', AppRoutes);

/** Error Handling */
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(`Router error: ${err}`);
  next();
});


const httpServer = http.createServer(router);
const { SERVER_PORT } = process.env;

SQLInit();
httpServer.listen(SERVER_PORT, () => console.log(`The server is running on port ${SERVER_PORT}`));
