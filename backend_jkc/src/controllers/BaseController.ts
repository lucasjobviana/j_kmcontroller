import { Request, Response } from 'express';
import FleetService from '../services/FleetService';
import BaseService from '../services/BaseService';
import { TVehicle } from '../interfaces/types/TVehicle';

export default abstract class BaseController<T> {
  constructor(
    private service: BaseService<T>,
  ) { }

  public async findAllLikeByName(req: Request, res: Response) { console.log('executando pelo baseController')
    const { search } = req.query;
    const data = await this.service.findAllLikeByName(search?.toString()||'');
    res.status(200).json(data);
  }

  public async delete(req: Request, res:Response) {
    const { id } = req.params;
    await this.service.delete(id);
    return res.status(204).json({hasDeleted:true})
  }

  public async update(req: Request, res:Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedObject = await this.service.update(id,data);
    return res.status(200).json(updatedObject)
  }

  public async create(req: Request, res:Response) {
    const data = req.body; 
    const createdObject = await this.service.create(data);
    return res.status(201).json(createdObject) 
  }

}

  // public async findById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const team = await this.fleetService.getById(Number(id));
  //   res.status(200).json(team);
  // }

  // protected async findAll(_req: Request, res: Response) {
  //   const data = await this.service.getAll();
  //   res.status(200).json(data);
  // }
