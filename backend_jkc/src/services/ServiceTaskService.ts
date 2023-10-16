import ServiceTaskModel from '../models/ServiceTaskModel';
import { IServiceTaskModel } from '../interfaces/IServiceTaskModel';
import { TServiceTask } from '../interfaces/types/TServiceTask';

export default class ServiceTaskService {
  constructor(
    private serviceTaskModel: IServiceTaskModel = new ServiceTaskModel(),
  ) { }

  // public async getAll(): Promise<TVehicle[]> {
  //   const fleet = await this.placeModel.findAll({});
  //   return fleet;
  // }

  public async findAllLikeByName(name:string): Promise<TServiceTask[]> {
    const serviceTask = await this.serviceTaskModel.findAllLikeByName(name);
    return serviceTask;
  }

  public async deleteServiceTask(id:string): Promise<void> {
    await this.serviceTaskModel.deleteServiceTask(id); 
  }

  public async updateServiceTask(id:string, serviceTask:TServiceTask): Promise<TServiceTask> {
    const updatedTask = await this.serviceTaskModel.updateServiceTask(id, serviceTask);
    return updatedTask;
  }

  public async createServiceTask(serviceTask:TServiceTask): Promise<TServiceTask> {
    const createdTask = await this.serviceTaskModel.createServiceTask(serviceTask);
    return createdTask; 
  }
}
