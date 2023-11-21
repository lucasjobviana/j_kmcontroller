import { TMaintenance } from './types';

export interface ISearchAbleByVehicleName {
  findAllLikeByVehicleName(name:string):Promise<TMaintenance[]>,
}
