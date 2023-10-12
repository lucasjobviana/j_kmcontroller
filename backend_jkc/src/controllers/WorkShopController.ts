import { Request, Response } from 'express';
import WorkShopService from '../services/WorkShopService';

export default class WorkShopController {
  constructor(
    private workShopService = new WorkShopService(),
  ) { }

  // public async findById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const team = await this.fleetService.getById(Number(id));
  //   res.status(200).json(team);
  // }

  public async findAll(_req: Request, res: Response) {
    const workShop = await this.workShopService.getAll();
    res.status(200).json(workShop);
  }

  public async findAllLikeByName(req: Request, res: Response) {
    const { search } = req.query;
    const workShop = await this.workShopService.findAllLikeByName(search?.toString()||'');
    res.status(200).json(workShop);
  }

  public async deleteWorkShop(req: Request, res:Response) {
    const { id } = req.params;
    await this.workShopService.deleteWorkShop(id);
    return res.status(204).json({hasDeleted:true})
  }

  public async updateWorkShop(req: Request, res:Response) {
    const { id } = req.params;
    const workShop = req.body;
    const updatedWorkShop = await this.workShopService.updateWorkShop(id,workShop);
    return res.status(200).json(updatedWorkShop)
  }

  public async createVehicle(req: Request, res:Response) {
    const workShop = req.body;
    const createdWorkShop = await this.workShopService.createWorkShop(workShop);
    return res.status(201).json(createdWorkShop) 
  }
  
}
