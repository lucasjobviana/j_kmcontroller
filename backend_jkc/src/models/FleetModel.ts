import { Op } from 'sequelize';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import { TVehicle } from '../interfaces/types/TVehicle';
import BaseModel from './BaseModel';

export default class VehicleModel extends BaseModel<TVehicle>{
  constructor(
  ) { super(SequelizeFleetModel,['id','name','licensePlate'])  }
  
  // async findAllLikeByName(name = "") {
  //   return super.findAllLikeByName(name);
  // }

  // async delete(id:string){ 
  //   return super.delete(id);
  // }

  // async update(id:string, vehicle:TVehicle) {
  //   return super.update(id, vehicle);
  // } 

  // async create(vehicle:TVehicle){
  //   return super.create(vehicle);
  // }

}
