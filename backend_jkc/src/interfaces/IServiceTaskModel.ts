import { TServiceTask } from './types/TServiceTask';

export interface IServiceTaskModel {
  // findAll(whereOption:object): Promise<TVehicle[]>,
  findAllLikeByName(name:string):Promise<TServiceTask[]>,
  updateServiceTask(id:string, serviceTask:TServiceTask): Promise<TServiceTask>,
  deleteServiceTask(id:string): Promise<void>,
  createServiceTask(serviceTask:TServiceTask): Promise<TServiceTask>,
}
