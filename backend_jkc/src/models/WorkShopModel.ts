import { Op } from 'sequelize';
import SequelizeWorkShopModel from '../database/models/SequelizeWorkShopModel';
import { TWorkShop } from '../interfaces/types/TWorkShop';
import { IWorkShopModel } from '../interfaces/IWorkShopModel';

export default class WorkShopModel implements IWorkShopModel{
  private model = SequelizeWorkShopModel;

  async findAll(whereOption = {}): Promise<TWorkShop[]> {
    const dbData = await this.model.findAll({ ...whereOption });
    return dbData.map(({ id, name, description, fullAddress, phone }) => (
      { id, name, description, fullAddress, phone }
    ));
  }

  async findAllLikeByName(name = ""): Promise<TWorkShop[]> {
    const dbData = await SequelizeWorkShopModel.findAll({where: {
      name: {
          [Op.like]: `%${name}%`,
      }
  },});
    return dbData.map(({ id, name, description, fullAddress, phone }) => (
      { id, name, description, fullAddress, phone }
    ));
  }

  async deleteWorkShop(id:string): Promise<void> { 
    await this.model.destroy({where: {id}});
  }

  async updateWorkShop(id:string, vehicle:TWorkShop): Promise<TWorkShop> {
    const updatedVehicle = await this.model.update(vehicle, {where: {id}});
    if(updatedVehicle[0] === 0) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  } 

  async createWorkShop(vehicle:TWorkShop): Promise<TWorkShop> {
    const createdVehicle = await this.model.create(vehicle);
    return createdVehicle;
  }

}
