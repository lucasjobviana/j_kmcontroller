import { TVehicle } from './types/TVehicle';

export interface IVehicleModel {
  findAll(whereOption:object): Promise<TVehicle[]>,
  findAllLikeByName(name:string):Promise<TVehicle[]>,
  updateVehicle(id:string, vehicle:TVehicle): Promise<TVehicle>,
  deleteVehicle(id:string): Promise<void>,
  createVehicle(vehicle:TVehicle): Promise<TVehicle>,
}
