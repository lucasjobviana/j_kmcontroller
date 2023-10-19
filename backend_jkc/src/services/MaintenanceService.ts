import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import MaintenanceModel from '../models/MaintenanceModel';
import { TMaintenance } from '../interfaces';

export default class MaintenanceService extends BaseService<TMaintenance> {
  constructor(
    private maintenanceModel: BaseModel<TMaintenance> = new MaintenanceModel(),
  ) { super(maintenanceModel) }
} 