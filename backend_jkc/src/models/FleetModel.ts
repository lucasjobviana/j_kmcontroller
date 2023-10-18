import BaseModel from './BaseModel';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import { TVehicle } from '../interfaces';

export default class VehicleModel extends BaseModel<TVehicle>{
  constructor(
  ) { super(SequelizeFleetModel,['id','name','licensePlate'])  }
} 