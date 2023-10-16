import { Op } from 'sequelize';
import { IServiceTaskModel } from '../interfaces/IServiceTaskModel';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import { TServiceTask } from '../interfaces/types/TServiceTask';

export default class ServiceTaskModel implements IServiceTaskModel{
  private model = SequelizeServiceTaskModel;

  // async findAll(whereOption = {}): Promise<TVehicle[]> {
  //   const dbData = await this.model.findAll({ ...whereOption });
  //   return dbData.map(({ id, name, licensePlate }) => (
  //     { id, name, licensePlate }
  //   ));
  // }

  async findAllLikeByName(name = ""): Promise<TServiceTask[]> {
    
    const dbData = await this.model.findAll({where: {
      name: {
          [Op.like]: `%${name}%`,
      }
  },});
   
    return dbData.map(({ id, name, description }) => (
      { id, name, description }
    ));
  }

  async deleteServiceTask(id:string): Promise<void> { 
    await this.model.destroy({where: {id}});
  }

  async updateServiceTask(id:string, serviceTask:TServiceTask): Promise<TServiceTask> {
    const updatedTask = await this.model.update(serviceTask, {where: {id}});
    if(updatedTask[0] === 0) {
      throw new Error('ServiceTask not found');
    }
    return serviceTask;
  } 

  async createServiceTask(serviceTask:TServiceTask): Promise<TServiceTask> {
    const createdTask = await this.model.create(serviceTask);
    return createdTask;
  }

}
