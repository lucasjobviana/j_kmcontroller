import { TMaintenance } from './types';

export interface ISearchAbleByVehicleNameAndWorkshopName {
  findAllLikeByVehicleNameAndWorkshopName(vehicleName:string, workshopName:string):Promise<TMaintenance[]>,
}
