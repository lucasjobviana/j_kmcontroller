import { Request, Router, Response } from 'express';
import FleetController from '../controllers/FleetController';

const teamController = new FleetController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => teamController.findAllLikeByName(req, res),
);

router.delete(
  '/:id',
  (req: Request, res: Response) => teamController.deleteVehicle(req, res),
);

router.put(
  '/:id',
  (req: Request, res: Response) => teamController.updateVehicle(req, res),
);

// router.get(
//   '/:id',
//   (req: Request, res: Response) => teamController.findById(req, res),
// );

export default router;
