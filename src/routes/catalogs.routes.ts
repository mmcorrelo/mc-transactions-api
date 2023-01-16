import { Router, Request, Response } from 'express';

import * as CatalogsDTO from '@dto/catalogs.dto';
import * as CatalogsController from '@controllers/catalogs.controller';

export const router = Router();

router.post('/filter', async (req: Request, res: Response) => {
  const payload: CatalogsDTO.ITransactionCatalogPayload = req.body;
  const result: Array<CatalogsDTO.ITransactionCatalogResponse> = await CatalogsController.transactionsCatalog(payload)

  return res.status(200).send(result);
});

export default router;