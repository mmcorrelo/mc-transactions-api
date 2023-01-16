import { Router } from 'express';

import StatsRoutes from './stats.routes';
import TransactionsRoutes from './transactions.routes';

const router = Router();

router.use('/transactions', TransactionsRoutes);
router.use('/stats', StatsRoutes);

export default router;