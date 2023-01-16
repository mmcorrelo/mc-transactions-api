import { Router } from 'express';

import StatsRoutes from './stats.routes';
import TransactionsRoutes from './transactions.routes';
import CatalogsRoutes from './catalogs.routes';

const router = Router();

router.use('/transactions', TransactionsRoutes);
router.use('/stats', StatsRoutes);
router.use('/catalogs', CatalogsRoutes);

export default router;