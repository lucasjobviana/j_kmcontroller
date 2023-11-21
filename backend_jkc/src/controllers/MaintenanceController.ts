import { ISearchAbleByVehicleNameAndWorkshopName, TMaintenance } from '../interfaces';
import { ISearchAbleByVehicleNameOrWorkshopName } from '../interfaces';
import { Request, Response } from 'express';
import { IControllerSearchAbleByVehicleNameOrWorkshopName } from '../interfaces/IControllerSearchAbleByVehicleNameOrWorkshopName';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import BaseService from '../services/BaseService';
import MaintenanceService from '../services/MaintenanceService';
import BaseController from './BaseController';

export default class MaintenanceController extends BaseController<TMaintenance> implements IControllerSearchAbleByVehicleNameOrWorkshopName{
  constructor(
    private maintenanceService: BaseService<TMaintenance> & ISearchAbleByVehicleNameOrWorkshopName & ISearchAbleByVehicleNameAndWorkshopName = new MaintenanceService(),
  ) { super(maintenanceService); }

  public async findAllLikeByVehicleNameOrWorkShopName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const search = req.query.search?.toString()||'';
    const split = search.split('/');

    if(split.length === 2 && split[1] !== ''){
      const data = await this.maintenanceService.findAllLikeByVehicleNameAndWorkshopName(split[0],split[1]);
      return res.status(200).json(data);
    }

    const data = await this.maintenanceService.findAllLikeByVehicleNameOrWorkshopName(split[0]);
    return res.status(200).json(data);
  }
}