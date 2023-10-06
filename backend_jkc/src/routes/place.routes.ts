import { Request, Router, Response } from 'express';
import PlaceController from '../controllers/PlaceController';

const placeController = new PlaceController();
const router = Router();

router.get(
  '/name',
  (req: Request, res: Response) => placeController.findAllLikeByName(req, res),
); 

// router.delete(
//   '/:id',
//   (req: Request, res: Response) => placeController.deleteVehicle(req, res),
// );

// router.put(
//   '/:id',
//   (req: Request, res: Response) => placeController.updateVehicle(req, res),
// );

// router.post(
//   '/',
//   (req: Request, res: Response) => placeController.createVehicle(req, res),
// );

export default router;
