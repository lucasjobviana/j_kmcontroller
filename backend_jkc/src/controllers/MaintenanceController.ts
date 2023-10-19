import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import MaintenanceService from '../services/MaintenanceService';
import { TMaintenance } from '../interfaces';


export default class MaintenanceController extends BaseController<TMaintenance> {
  constructor(
    private maintenanceService: BaseService<TMaintenance> = new MaintenanceService(),
  ) { super(maintenanceService) }
}