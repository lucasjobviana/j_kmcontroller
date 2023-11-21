import { Request, Response } from 'express';

import BaseService from '../services/BaseService';

export default abstract class BaseController<T> {
  constructor(
    private service: BaseService<T>,
  ) { }

  protected async findAllLikeByFieldName(fieldName:string, req: Request, res: Response) { 
    const { search } = req.query;
    console.log('fieldName', fieldName);
    console.log('minha query', search);
    const data = await this.service.findAllLikeByFieldName(fieldName,search?.toString()||'');
    return res.status(200).json(data);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.delete(id);
    return res.status(204).json({hasDeleted:true});
  }

  public async update(req: Request, res:Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedObject = await this.service.update(id,data);
    return res.status(200).json(updatedObject);
  }

  public async create(req: Request, res:Response) {
    const data = req.body; 
    const createdObject = await this.service.create(data);
    return res.status(201).json(createdObject); 
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
  