import { TVehicle } from '../interfaces/types/TVehicle';
import FleetModel from '../models/FleetModel';
import { IVehicleModel } from '../interfaces/IVehicleModel';
import BaseModel from '../models/BaseModel';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';

export default abstract class BaseService<T> {
  constructor(
    private model: BaseModel<T>,
  ) { }

  public async findAllLikeByName(name:string) {console.log('executando pelo baseService')
    const data = await this.model.findAllLikeByName(name);
    return data;
  }

  public async delete(id:string) { console.log('executando pelo baseService')
    await this.model.delete(id); 
  }

  public async update(id:string, obj:T){
    const updatedObj = await this.model.update(id, obj);
    return updatedObj;
  }

  public async create(obj:T){
    const createdVehicle = await this.model.create(obj);
    return createdVehicle; 
  }
}
