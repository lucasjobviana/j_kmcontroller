import { Request, Router, Response } from 'express';

import BaseController from '../controllers/BaseController';
import ServiceTaskController from '../controllers/ServiceTaskController';
import { TServiceTask } from '../interfaces';

const serviceTaskController:BaseController<TServiceTask>  = new ServiceTaskController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => serviceTaskController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => serviceTaskController.delete(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => serviceTaskController.update(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => serviceTaskController.create(req, res),
);

export default router;
