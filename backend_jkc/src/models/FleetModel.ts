import BaseModel from './BaseModel';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import { TVehicle } from '../interfaces/types/TVehicle';

export default class VehicleModel extends BaseModel<TVehicle>{
  constructor(
  ) { super(SequelizeFleetModel,['id','name','licensePlate'])  }
} 