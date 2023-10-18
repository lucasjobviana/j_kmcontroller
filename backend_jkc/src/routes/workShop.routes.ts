import { Request, Router, Response } from 'express';

import BaseController from '../controllers/BaseController';
import WorkShopController from '../controllers/WorkShopController';
import { TWorkShop } from '../interfaces/types/TWorkShop';

const workShopController:BaseController<TWorkShop> = new WorkShopController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => workShopController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => workShopController.delete(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => workShopController.update(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => workShopController.create(req, res),
);

export default router;