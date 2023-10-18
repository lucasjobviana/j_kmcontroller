import { Request, Router, Response } from 'express';

import BaseController from '../controllers/BaseController';
import FleetController from '../controllers/FleetController';
import { TVehicle } from '../interfaces/types/TVehicle';

const teamController:BaseController<TVehicle> = new FleetController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => teamController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => teamController.delete(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => teamController.update(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => teamController.create(req, res),
);

export default router;
