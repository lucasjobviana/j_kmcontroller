import BaseController from '../../controllers/BaseController';
import { IControllerSearchAbleByVehicleNameOrWorkshopName } from '../IControllerSearchAbleByVehicleNameOrWorkshopName';
import { ISearchAbleByName } from '../ISearchAbleByName';
// import { ISearchAbleByVehicleId } from '../ISearchAbleByVehicleId';
// import { ISearchAbleByVehicleName } from '../ISearchAbleByVehicleName';

export type TBaseControllerWithSearchByName<T> = BaseController<T> & ISearchAbleByName;
export type TBaseControllerWithSearchByVehicle<T> = BaseController<T> & IControllerSearchAbleByVehicleNameOrWorkshopName;