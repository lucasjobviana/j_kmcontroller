import { TVehicle } from '../interfaces/types/TVehicle';
import FleetModel from '../models/FleetModel';
import { IVehicleModel } from '../interfaces/IVehicleModel';

export default class FleetService {
  constructor(
    private fleetModel: IVehicleModel = new FleetModel(),
  ) { }

  public async getAll(): Promise<TVehicle[]> {
    const fleet = await this.fleetModel.findAll({});
    return fleet;
  }

  public async findAllLikeByName(name:string): Promise<TVehicle[]> {
    const fleet = await this.fleetModel.findAllLikeByName(name);
    return fleet;
  }

  public async deleteVehicle(id:string): Promise<void> {
    await this.fleetModel.deleteVehicle(id); 
  }

  public async updateVehicle(id:string, vehicle:TVehicle): Promise<TVehicle> {
    const updatedVehicle = await this.fleetModel.updateVehicle(id, vehicle);
    return updatedVehicle;
  }

  public async createVehicle(vehicle:TVehicle): Promise<TVehicle> {
    const createdVehicle = await this.fleetModel.createVehicle(vehicle);
    return createdVehicle; 
  }
}
