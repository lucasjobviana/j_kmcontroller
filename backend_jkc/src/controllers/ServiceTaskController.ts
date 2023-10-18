import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import ServiceTaskService from '../services/ServiceTaskService';
import { TServiceTask } from '../interfaces';

export default class ServiceTaskController extends BaseController<TServiceTask> {
  constructor(
    private taskService: BaseService<TServiceTask> = new ServiceTaskService(),
  ) { super(taskService) }
} 