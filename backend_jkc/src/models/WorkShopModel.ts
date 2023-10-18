import BaseModel from './BaseModel';
import SequelizeWorkShopModel from '../database/models/SequelizeWorkShopModel';
import { TWorkShop } from '../interfaces/types/TWorkShop';

export default class WorkShopModel  extends BaseModel<TWorkShop>{
  constructor(
  ) { super(SequelizeWorkShopModel,['id','name','description','fullAddress','phone'])  }
}