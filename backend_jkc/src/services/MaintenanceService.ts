import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import MaintenanceModel from '../models/MaintenanceModel';
import { ISearchAbleByVehicleNameAndWorkshopName, ISearchAbleByVehicleNameOrWorkshopName, TMaintenance } from '../interfaces';

export default class MaintenanceService extends BaseService<TMaintenance> implements ISearchAbleByVehicleNameOrWorkshopName, ISearchAbleByVehicleNameAndWorkshopName {
  constructor(
    private maintenanceModel: BaseModel<TMaintenance> & ISearchAbleByVehicleNameOrWorkshopName & ISearchAbleByVehicleNameAndWorkshopName = new MaintenanceModel(),
  ) { super(maintenanceModel); }

  public async findAllLikeByVehicleNameOrWorkshopName(name: string): Promise<TMaintenance[]> {
    const maintenance = await this.maintenanceModel.findAllLikeByVehicleNameOrWorkshopName(name);
    return maintenance;
  }

  public async findAllLikeByVehicleNameAndWorkshopName(vehicleName: string,workshopName:string): Promise<TMaintenance[]> {
    const maintenance = await this.maintenanceModel.findAllLikeByVehicleNameAndWorkshopName(vehicleName, workshopName);
    return maintenance;
  }
  
} 