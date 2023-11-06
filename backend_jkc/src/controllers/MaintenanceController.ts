import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import MaintenanceService from '../services/MaintenanceService';
import { ISearchAbleByVehicleId, TMaintenance } from '../interfaces';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default class MaintenanceController extends BaseController<TMaintenance> implements ISearchAbleByVehicleId {
  constructor(
    private maintenanceService: BaseService<TMaintenance> = new MaintenanceService(),
  ) { super(maintenanceService); }

  public async findAllLikeByVehicle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const maintenances =  await super.findAllLikeByFieldName('vehicleId', req, res);
    return maintenances;
  } 
}