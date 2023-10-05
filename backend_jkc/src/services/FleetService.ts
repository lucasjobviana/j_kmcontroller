// import { IMatchModel } from '../interfaces/IMatchModel';
// import MatchModel from '../models/MatchModel';
import { IVehicle } from '../interfaces/IVehicle';
import FleetModel from '../models/FleetModel';
import { IVehicleModel } from '../interfaces/IVehicleModel';
// import { ITeamWithMatchesDetails } from '../interfaces/ITeamWithMatchesDetails';
// import TeamDetails from './TeamDetails';
// import { IMatch } from '../interfaces/IMatch';

export default class FleetService {
  constructor(
    private fleetModel: IVehicleModel = new FleetModel(),
    // private matchModel: IMatchModel = new MatchModel(),
  ) { }

  // public async getById(id: number): Promise<IFleet> {
  //   const oneTeam = await this.teamModel.findById(id);
  //   return oneTeam;
  // }

  public async getAll(): Promise<IVehicle[]> {
    const fleet = await this.fleetModel.findAll({});
    return fleet;
  }

  public async findAllLikeByName(name:string): Promise<IVehicle[]> {
    const fleet = await this.fleetModel.findAllLikeByName(name);
    return fleet;
  }

  public async deleteVehicle(id:string): Promise<void> {
    await this.fleetModel.deleteVehicle(id);
  }

  public async updateVehicle(id:string, vehicle:IVehicle): Promise<IVehicle> {
    const updatedVehicle = await this.fleetModel.updateVehicle(id, vehicle);
    return updatedVehicle;
  }
}
