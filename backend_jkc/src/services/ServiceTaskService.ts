import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import ServiceTaskModel from '../models/ServiceTaskModel';
import { TServiceTask } from '../interfaces/types/TServiceTask';
import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';
import AppResponseError from '../AppResponseError';

export default class ServiceTaskService extends BaseService<TServiceTask> {
  constructor(
    private fleetModel: BaseModel<TServiceTask> = new ServiceTaskModel(),
  ) { super(fleetModel); }

  public async delete(id:string): Promise<void> { 
    if(await MaintenanceServiceAssociation.findOne({where: {serviceId: id}})) {
      // throw new Error('Service is associated with one or more Maintenance');
      throw new AppResponseError('Service is associated with one or more Maintenance');
    }
    await super.delete(id);
  }
} 