import { Request, Response } from 'express';

export interface ISearchAbleByVehicleId {
  findAllLikeByVehicle(req: Request, res:Response):Promise<Response<any, Record<string, any>>>,
}
