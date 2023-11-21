import { Request, Response } from 'express';
import { TMaintenance } from './types';

export interface IControllerSearchAbleByVehicleName {
  findAllLikeByVehicleName(req:Request,res:Response):Promise<Response<any, Record<string, any>>>,
}
