import { TMaintenance } from './types';

export interface ISearchAbleByVehicleNameOrWorkshopName {
  findAllLikeByVehicleNameOrWorkshopName(name:string):Promise<TMaintenance[]>,
}
