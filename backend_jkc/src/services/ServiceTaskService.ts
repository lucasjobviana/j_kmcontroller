import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import ServiceTaskModel from '../models/ServiceTaskModel';
import { TServiceTask } from '../interfaces/types/TServiceTask';

export default class ServiceTaskService extends BaseService<TServiceTask> {
  constructor(
    private fleetModel: BaseModel<TServiceTask> = new ServiceTaskModel(),
  ) { super(fleetModel) }
} 