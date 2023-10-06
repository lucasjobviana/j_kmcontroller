import { Request, Response } from 'express';
import PlaceService from '../services/PlaceService';

export default class PlaceController {
  constructor(
    private placeService = new PlaceService(),
  ) { }

  // public async findById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const team = await this.fleetService.getById(Number(id));
  //   res.status(200).json(team);
  // }

  // public async findAll(_req: Request, res: Response) {
  //   const fleet = await this.fleetService.getAll();
  //   res.status(200).json(fleet);
  // }

  public async findAllLikeByName(req: Request, res: Response) {
    console.log('hellllo ', req.query)
    const { search } = req.query;//search?.toString()||''
    const fleet = await this.placeService.findAllLikeByName(search?.toString()||'');
    res.status(200).json(fleet);
  }

  public async deletePlace(req: Request, res:Response) {
    const { id } = req.params;
    await this.placeService.deleteVehicle(id);
    return res.status(204).json({hasDeleted:true})
  }

  public async updatePlace(req: Request, res:Response) {
    const { id } = req.params;
    const place = req.body;
    const updatedPlace = await this.placeService.updatePlace(id,place);
    return res.status(200).json(updatedPlace)
  }

  // public async createVehicle(req: Request, res:Response) {
  //   const vehicle = req.body;
  //   const createdVehicle = await this.fleetService.createVehicle(vehicle);
  //   return res.status(201).json(createdVehicle) 
  // }

}
