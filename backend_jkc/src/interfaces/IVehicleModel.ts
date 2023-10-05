import { IVehicle } from './IVehicle';

export interface IVehicleModel {
  findAll(whereOption:object): Promise<IVehicle[]>,
  findAllLikeByName(name:string):Promise<IVehicle[]>,
  // findById(id: number): Promise<ITeams>,
  // findTwoTeamsById(id1: number, id2: number): Promise<ITeams[]>,
  // findAllWithMatches(): Promise<ITeams[]>,
}
