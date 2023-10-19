import { Request, Router, Response } from 'express';

import FleetController from '../controllers/FleetController';
import { TBaseControllerWithSearchByName, TVehicle } from '../interfaces';

const vehicleController:TBaseControllerWithSearchByName<TVehicle> = new FleetController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => vehicleController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => vehicleController.delete(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => vehicleController.update(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => vehicleController.create(req, res),
);

export default router;