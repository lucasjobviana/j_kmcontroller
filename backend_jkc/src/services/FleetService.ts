import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import FleetModel from '../models/FleetModel';
import { TVehicle } from '../interfaces';
// import MaintenanceServiceAssociation from '../database/models/SequelizeMaintenanceServiceAssModel';
import MaintenanceModel from '../models/MaintenanceModel';
import AppResponseError from '../AppResponseError';

export default class FleetService extends BaseService<TVehicle> {
  constructor(
    private fleetModel: BaseModel<TVehicle> = new FleetModel(),
  ) { super(fleetModel); }

  public async delete(id:string): Promise<void> { 
    const model = new MaintenanceModel();
    const maintenances = await model.findAllLikeByFieldName('vehicleId', id, ['id']);
    if(maintenances.length > 0) {
      throw new AppResponseError('Vehicle is associated with one or more Maintenance');
    }
    await super.delete(id);
  }
} 