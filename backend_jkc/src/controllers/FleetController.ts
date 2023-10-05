import { Request, Response } from 'express';
import FleetService from '../services/FleetService';

export default class FleetController {
  constructor(
    private fleetService = new FleetService(),
  ) { }

  // public async findById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const team = await this.fleetService.getById(Number(id));
  //   res.status(200).json(team);
  // }

  public async findAll(_req: Request, res: Response) {
    const fleet = await this.fleetService.getAll();
    res.status(200).json(fleet);
  }

  public async findAllLikeByName(req: Request, res: Response) {
    const { search } = req.query;
    const fleet = await this.fleetService.findAllLikeByName(search?.toString()||'');
    res.status(200).json(fleet);
  }

  // public async findAllHomeWithMatchesDetails(_req: Request, res: Response) {
  //   const teams = await this.fleetService.getAllHomeWithMatchesDetails();
  //   res.status(200).json(teams);
  // }

  // public async findAllAwayWithMatchesDetails(_req: Request, res: Response) {
  //   const teams = await this.fleetService.getAllAwayWithMatchesDetails();
  //   res.status(200).json(teams);
  // }

  // public async findAllWithMatchesDetails(_req: Request, res: Response) {
  //   const teams = await this.fleetService.getAllWithMatchesDetails();
  //   res.status(200).json(teams);
  // }
}
