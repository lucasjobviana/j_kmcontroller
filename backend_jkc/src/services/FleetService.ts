import BaseService from './BaseService';
import BaseModel from '../models/BaseModel';
import FleetModel from '../models/FleetModel';
import { TVehicle } from '../interfaces';

export default class FleetService extends BaseService<TVehicle> {
  constructor(
    private fleetModel: BaseModel<TVehicle> = new FleetModel(),
  ) { super(fleetModel) }
} 