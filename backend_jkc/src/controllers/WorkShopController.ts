import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import WorkShopService from '../services/WorkShopService';
import { ISearchAbleByName, TWorkShop } from '../interfaces'; 
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default class WorkShopController extends BaseController<TWorkShop> implements ISearchAbleByName {
  constructor(
    private workShopService: BaseService<TWorkShop> = new WorkShopService(),
  ) { super(workShopService) }

  public findAllLikeByName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    return super.findAllLikeByFieldName('name', req, res);
  }
}