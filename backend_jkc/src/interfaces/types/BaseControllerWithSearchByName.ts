import BaseController from "../../controllers/BaseController";
import { ISearchAbleByName } from "../ISearchAbleByName";

export type TBaseControllerWithSearchByName<T> = BaseController<T> & ISearchAbleByName;