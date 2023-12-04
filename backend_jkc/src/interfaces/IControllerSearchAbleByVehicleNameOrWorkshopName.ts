import { Request, Response } from 'express';

export interface IControllerSearchAbleByVehicleNameOrWorkshopName {
  findAllLikeByVehicleNameOrWorkShopName(req:Request,res:Response):Promise<Response<any, Record<string, any>>>,
}
