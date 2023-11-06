import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import FleetService from '../services/FleetService';
import { TVehicle } from '../interfaces';
import { Request, Response } from 'express';
import { ISearchAbleByName } from '../interfaces/ISearchAbleByName';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';


export default class FleetController extends BaseController<TVehicle> implements ISearchAbleByName{
  constructor(
    private fleetService: BaseService<TVehicle> = new FleetService(),
  ) { super(fleetService); }

  public findAllLikeByName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    return super.findAllLikeByFieldName('name', req, res);
  } 
}