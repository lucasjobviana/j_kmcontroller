import BaseModel from './BaseModel';
import SequelizeServiceTaskModel from '../database/models/SequelizeServiceTaskModel';
import { TServiceTask } from '../interfaces';

export default class ServiceTaskModel extends BaseModel<TServiceTask>{
  constructor(
  ) { super(SequelizeServiceTaskModel,['id','name','description']);  }
}  