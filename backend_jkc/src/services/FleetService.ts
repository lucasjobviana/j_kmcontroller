import { TVehicle as TVehicle } from '../interfaces/types/TVehicle';
import FleetModel from '../models/FleetModel';
import { IVehicleModel } from '../interfaces/IVehicleModel';
import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';

export default class FleetService extends BaseService<TVehicle> {
  constructor(
    private fleetModel: BaseModel<TVehicle> = new FleetModel(),
  ) { super(fleetModel) }

  // public async findAllLikeByName(name:string): Promise<TVehicle[]> { console.log('executando pelo flletService')
  //   return super.findAllLikeByName(name);
  // }

  // public async delete(id:string): Promise<void> { console.log('executando pelo flletService')
  //   return super.delete(id);
  // }

  // public async update(id:string, vehicle:TVehicle): Promise<TVehicle> {
  //   return super.update(id, vehicle);
  // }

  // public async create(vehicle:TVehicle): Promise<TVehicle> {
  //  return super.create(vehicle);
  // }
}
