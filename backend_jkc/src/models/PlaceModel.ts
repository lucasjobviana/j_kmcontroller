import { Op } from 'sequelize';
import { IPlaceModel } from '../interfaces/IPlaceModel';
import SequelizePlaceModel from '../database/models/SequelizePlaceModel';
import { TPlace } from '../interfaces/types/TPlace';

export default class PlaceModel implements IPlaceModel{
  private model = SequelizePlaceModel;

  // async findAll(whereOption = {}): Promise<TVehicle[]> {
  //   const dbData = await this.model.findAll({ ...whereOption });
  //   return dbData.map(({ id, name, licensePlate }) => (
  //     { id, name, licensePlate }
  //   ));
  // }

  async findAllLikeByName(name = ""): Promise<TPlace[]> {
    console.log('vou procurar por: ', name)
    const dbData = await this.model.findAll({where: {
      name: {
          [Op.like]: `%${name}%`,
      }
  },});
  console.log('esse eh meu retorno: ', dbData)
    return dbData.map(({ id, name, description, fullAddress }) => (
      { id, name, description, fullAddress }
    ));
  }

  async deletePlace(id:string): Promise<void> { 
    await this.model.destroy({where: {id}});
  }

  async updatePlace(id:string, place:TPlace): Promise<TPlace> {
    const updatedPlace = await this.model.update(place, {where: {id}});
    if(updatedPlace[0] === 0) {
      throw new Error('Place not found');
    }
    return place;
  } 

  // async createVehicle(vehicle:TVehicle): Promise<TVehicle> {
  //   const createdVehicle = await this.model.create(vehicle);
  //   return createdVehicle;
  // }

}
