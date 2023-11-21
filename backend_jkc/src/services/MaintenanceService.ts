import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import MaintenanceModel from '../models/MaintenanceModel';
import { ISearchAbleByVehicleName, TMaintenance } from '../interfaces';

export default class MaintenanceService extends BaseService<TMaintenance> implements ISearchAbleByVehicleName {
  constructor(
    private maintenanceModel: BaseModel<TMaintenance> & ISearchAbleByVehicleName = new MaintenanceModel(),
  ) { super(maintenanceModel); }

  public async findAllLikeByVehicleName(name: string): Promise<TMaintenance[]> {
    const maintenance = await this.maintenanceModel.findAllLikeByVehicleName(name);
    return maintenance;
  }
  
} 