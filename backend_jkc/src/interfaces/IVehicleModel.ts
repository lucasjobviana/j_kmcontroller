import { TVehicle } from './types/TVehicle';

export interface IVehicleModel {
  findAll(whereOption:object): Promise<TVehicle[]>,
  findAllLikeByName(name:string):Promise<TVehicle[]>,
  updateVehicle(id:string, vehicle:TVehicle): Promise<TVehicle>,
  deleteVehicle(id:string): Promise<void>,
  // findById(id: number): Promise<ITeams>,
  // findTwoTeamsById(id1: number, id2: number): Promise<ITeams[]>,
  // findAllWithMatches(): Promise<ITeams[]>,
}
