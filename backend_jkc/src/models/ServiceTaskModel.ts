import BaseModel from './BaseModel';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import { TServiceTask } from '../interfaces';

export default class ServiceTaskModel extends BaseModel<TServiceTask>{
  constructor(
  ) { super(SequelizeServiceTaskModel,['id','name','description']);  }

  // public async delete(id:string): Promise<void> { 
  //   // MaintenanceServiceAssociation.findOne({where: {serviceId: id}})
  //   if(await MaintenanceServiceAssociation.findOne({where: {serviceId: id}})) {
  //     throw new Error('Service is associated with one or more Maintenance');
  //   }
  //   await this.model.destroy({where: {id}});
  // }
}  