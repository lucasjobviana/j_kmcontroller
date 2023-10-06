import { TVehicle } from '../interfaces/types/TVehicle';
import PlaceModel from '../models/PlaceModel';
import { IPlaceModel } from '../interfaces/IPlaceModel';
import { TPlace } from '../interfaces/types/TPlace';

export default class PlaceService {
  constructor(
    private placeModel: IPlaceModel = new PlaceModel(),
  ) { }

  // public async getAll(): Promise<TVehicle[]> {
  //   const fleet = await this.placeModel.findAll({});
  //   return fleet;
  // }

  public async findAllLikeByName(name:string): Promise<TPlace[]> {
    const place = await this.placeModel.findAllLikeByName(name);
    return place;
  }

  // public async deleteVehicle(id:string): Promise<void> {
  //   await this.placeModel.deleteVehicle(id); 
  // }

  // public async updateVehicle(id:string, vehicle:TVehicle): Promise<TVehicle> {
  //   const updatedVehicle = await this.placeModel.updateVehicle(id, vehicle);
  //   return updatedVehicle;
  // }

  // public async createVehicle(vehicle:TVehicle): Promise<TVehicle> {
  //   const createdVehicle = await this.placeModel.createVehicle(vehicle);
  //   return createdVehicle; 
  // }
}
