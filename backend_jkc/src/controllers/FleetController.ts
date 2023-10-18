import { Request, Response } from 'express';
import FleetService from '../services/FleetService';
import BaseController from './BaseController';
import { TVehicle } from '../interfaces/types/TVehicle';
import BaseService from '../services/BaseService';

export default class FleetController extends BaseController<TVehicle> {
  constructor(
    private fleetService: BaseService<TVehicle> = new FleetService(),
  ) { super(fleetService) }

  // public async findAllLikeByName(req: Request, res: Response) { console.log('executando pelo fleetController')
  //   return super.findAllLikeByName(req,res);
  // }

  // public async delete(req: Request, res:Response) {
  //   return super.delete(req,res);
  // }

  // public async update(req: Request, res:Response) {
  //   return super.update(req,res);
  // }

  // public async create(req: Request, res:Response) {
  //   return super.create(req,res);
  // }
}
