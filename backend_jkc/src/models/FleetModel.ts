import { Op } from 'sequelize';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import { TVehicle } from '../interfaces/types/TVehicle';
import { IVehicleModel } from '../interfaces/IVehicleModel';
// import SequelizeMatchModel from '../database/models/SequelizeMatchModel';

export default class TeamModel implements IVehicleModel {
  private model = SequelizeFleetModel;

  // async findById(id: number): Promise<ITeams> {
  //   const dbData = await this.model.findByPk(id);
  //   if (!dbData) {
  //     throw new Error('Team not found');
  //   }
  //   return { id: dbData.id, teamName: dbData.teamName };
  // }

  async findAll(whereOption = {}): Promise<TVehicle[]> {
    const dbData = await this.model.findAll({ ...whereOption });
    return dbData.map(({ id, name }) => (
      { id, name }
    ));
  }//

  async findAllLikeByName(name = ""): Promise<TVehicle[]> {
    const dbData = await this.model.findAll({where: {
      name: {
          [Op.like]: `%${name}%`,
      }
  },});
    return dbData.map(({ id, name }) => (
      { id, name }
    ));
  }

  async deleteVehicle(id:string): Promise<void> {
    await this.model.destroy({where: {id}});
  }

  async updateVehicle(id:string, vehicle:TVehicle): Promise<TVehicle> {
    const updatedVehicle = await this.model.update(vehicle, {where: {id}});
    if(updatedVehicle[0] === 0) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  }

  // async findTwoTeamsById(id1: number, id2: number): Promise<ITeams[]> {
  //   const dbData = await this.findAll({ where: { id: [id1, id2] } });
  //   return dbData.map(({ id, teamName }) => (
  //     { id, teamName }
  //   ));
  // }

  // async findAllWithMatches():Promise<ITeams[]> {
  //   console.log('heelo again');
  //   const dbData = await this.model.findAll({
  //     where: { id: 1 },
  //     include: [{ model: SequelizeMatchModel, as: 'matches' }],
  //   });
  //   console.log('heelo');
  //   console.log(dbData);
  //   return dbData.map(({ id, teamName }) => (
  //     { id, teamName }
  //   ));
  // }
}
