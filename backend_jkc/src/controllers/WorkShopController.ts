import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import WorkShopService from '../services/WorkShopService';
import { TWorkShop } from '../interfaces'; 

export default class WorkShopController extends BaseController<TWorkShop> {
  constructor(
    private workShopService: BaseService<TWorkShop> = new WorkShopService(),
  ) { super(workShopService) }
}