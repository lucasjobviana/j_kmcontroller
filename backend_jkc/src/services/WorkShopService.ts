import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import WorkShopModel from '../models/WorkShopModel';
import { TWorkShop } from '../interfaces';
import MaintenanceModel from '../models/MaintenanceModel';
import AppResponseError from '../AppResponseError';

export default class WorkShopService extends BaseService<TWorkShop> {
  constructor(
    private workShopModel: BaseModel<TWorkShop> = new WorkShopModel(),
  ) { super(workShopModel); }

  public async delete(id:string): Promise<void> { 
    const model = new MaintenanceModel();
    const maintenances = await model.findAllLikeByFieldName('workshopId', id, ['id']);

    if(maintenances.length > 0) {
      throw new AppResponseError('Workshop is associated with one or more Maintenance');
    }
    await super.delete(id);
  }
}