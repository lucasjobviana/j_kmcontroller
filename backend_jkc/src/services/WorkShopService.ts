import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import WorkShopModel from '../models/WorkShopModel';
import { TWorkShop } from '../interfaces/types/TWorkShop';

export default class WorkShopService extends BaseService<TWorkShop> {
  constructor(
    private workShopModel: BaseModel<TWorkShop> = new WorkShopModel(),
  ) { super(workShopModel) }
}