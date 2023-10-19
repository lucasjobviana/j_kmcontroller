import { Request, Router, Response } from 'express';

import BaseController from '../controllers/BaseController';
import WorkShopController from '../controllers/WorkShopController';
import { TBaseControllerWithSearchByName, TWorkShop } from '../interfaces';

const workShopController:TBaseControllerWithSearchByName<TWorkShop> = new WorkShopController();
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