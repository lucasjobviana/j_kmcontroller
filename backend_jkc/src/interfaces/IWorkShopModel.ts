import { TWorkShop } from './types/TWorkShop';

export interface IWorkShopModel {
  findAll(whereOption:object): Promise<TWorkShop[]>,
  findAllLikeByName(name:string):Promise<TWorkShop[]>,
  updateWorkShop(id:string, workshop:TWorkShop): Promise<TWorkShop>,
  deleteWorkShop(id:string): Promise<void>,
  createWorkShop(workshop:TWorkShop): Promise<TWorkShop>,
}
