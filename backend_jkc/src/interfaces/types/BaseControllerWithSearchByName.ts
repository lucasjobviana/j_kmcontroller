import BaseController from "../../controllers/BaseController";
import { ISearchAbleByName } from "../ISearchAbleByName";
import { ISearchAbleByVehicleId } from "../ISearchAbleByVehicleId";

export type TBaseControllerWithSearchByName<T> = BaseController<T> & ISearchAbleByName;
export type TBaseControllerWithSearchByVehicle<T> = BaseController<T> & ISearchAbleByVehicleId;