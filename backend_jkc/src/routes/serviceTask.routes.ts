import { Request, Router, Response } from 'express';
import ServiceTaskController from '../controllers/ServiceTaskController';

const serviceTaskController = new ServiceTaskController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => serviceTaskController.findAllLikeByName(req, res),
); 

router.delete(
  '/:id',
  (req: Request, res: Response) => serviceTaskController.deleteServiceTask(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => serviceTaskController.updateServiceTask(req, res),
);

router.post(
  '/',
  (req: Request, res: Response) => serviceTaskController.createServiceTask(req, res),
);

export default router;
