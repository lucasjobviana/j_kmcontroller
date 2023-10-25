import { Request, Router, Response } from 'express';

import MaintenanceController from '../controllers/MaintenanceController';
import { TBaseControllerWithSearchByVehicle,TMaintenance } from '../interfaces';

const maintenanceController:TBaseControllerWithSearchByVehicle<TMaintenance> = new MaintenanceController();
const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => maintenanceController.findAllLikeByVehicle(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => {console.log('jsjdklfjsadoifos');maintenanceController.delete(req, res);},
);

router.put(
  '/:id',
  (req: Request, res: Response) => {console.log('fadsfdas');maintenanceController.update(req, res)},
);

router.post(
  '/',
  (req: Request, res: Response) => maintenanceController.create(req, res),
);

export default router;
