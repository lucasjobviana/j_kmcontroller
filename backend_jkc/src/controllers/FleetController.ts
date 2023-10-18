import BaseController from './BaseController';
import BaseService from '../services/BaseService';
import FleetService from '../services/FleetService';
import { TVehicle } from '../interfaces/types/TVehicle';

export default class FleetController extends BaseController<TVehicle> {
  constructor(
    private fleetService: BaseService<TVehicle> = new FleetService(),
  ) { super(fleetService) }
}