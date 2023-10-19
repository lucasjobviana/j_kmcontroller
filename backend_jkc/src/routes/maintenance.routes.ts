import { Request, Router, Response } from 'express';

import BaseController from '../controllers/BaseController';
import MaintenanceController from '../controllers/MaintenanceController';
import { TMaintenance } from '../interfaces';

const maintenanceController:BaseController<TMaintenance> = new MaintenanceController();
const router = Router();

// router.get(
//   '/name',
//   (req: Request, res: Response) => maintenanceController.findAllLikeByFieldName('name', req, res),
// ); 

router.delete(
  '/:id',
  (req: Request, res: Response) => maintenanceController.delete(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => maintenanceController.update(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => maintenanceController.create(req, res),
);

export default router;
