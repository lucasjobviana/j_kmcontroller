import { TMaintenance } from '../interfaces';
import { ISearchAbleByVehicleName } from '../interfaces';
import { Request, Response } from 'express';
import { IControllerSearchAbleByVehicleName } from '../interfaces/IControllerSearchAbleByVehicleName';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import BaseService from '../services/BaseService';
import MaintenanceService from '../services/MaintenanceService';
import BaseController from './BaseController';

export default class MaintenanceController extends BaseController<TMaintenance> implements IControllerSearchAbleByVehicleName{
  constructor(
    private maintenanceService: BaseService<TMaintenance> & ISearchAbleByVehicleName = new MaintenanceService(),
  ) { super(maintenanceService); }

  public async findAllLikeByVehicleName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const data = await this.maintenanceService.findAllLikeByVehicleName(req.query.search?.toString()||'');
    return res.status(200).json(data);
  }
}