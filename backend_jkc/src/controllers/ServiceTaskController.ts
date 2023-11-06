import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import ServiceTaskService from '../services/ServiceTaskService';
import { ISearchAbleByName, TServiceTask } from '../interfaces';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default class ServiceTaskController extends BaseController<TServiceTask> implements ISearchAbleByName {
  constructor(
    private taskService: BaseService<TServiceTask> = new ServiceTaskService(),
  ) { super(taskService); }

  public findAllLikeByName(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    return super.findAllLikeByFieldName('name', req, res);
  }
} 