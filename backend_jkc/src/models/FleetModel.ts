import { Op } from 'sequelize';
import SequelizeFleetModel from '../database/models/SequelizeFleetModel';
import { TVehicle } from '../interfaces/types/TVehicle';
import { IVehicleModel } from '../interfaces/IVehicleModel';

export default class TeamModel implements IVehicleModel{
  private model = SequelizeFleetModel;

  async findAll(whereOption = {}): Promise<TVehicle[]> {
    const dbData = await this.model.findAll({ ...whereOption });
    return dbData.map(({ id, name, licensePlate }) => (
      { id, name, licensePlate }
    ));
  }

  async findAllLikeByName(name = ""): Promise<TVehicle[]> {
    const dbData = await SequelizeFleetModel.findAll({where: {
      name: {
          [Op.like]: `%${name}%`,
      }
  },});
    return dbData.map(({ id, name, licensePlate }) => (
      { id, name, licensePlate }
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

  async createVehicle(vehicle:TVehicle): Promise<TVehicle> {
    const createdVehicle = await this.model.create(vehicle);
    return createdVehicle;
  }

}
