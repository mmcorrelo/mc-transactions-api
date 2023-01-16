import { Router } from 'express';

import TransactionsRoutes from './transactions.routes';

const router = Router();

router.use('/transactions', TransactionsRoutes);

export default router;