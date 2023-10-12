import { Request, Router, Response } from 'express';
import WorkShopController from '../controllers/WorkShopController';

const workShopController = new WorkShopController();
const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => workShopController.findAll(req, res),
); 

router.get(
  '/name',
  (req: Request, res: Response) => workShopController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => workShopController.deleteWorkShop(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => workShopController.updateWorkShop(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => workShopController.createVehicle(req, res),
);

export default router;
