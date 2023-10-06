import { TPlace } from './types/TPlace';
import { TVehicle } from './types/TVehicle';

export interface IPlaceModel {
  // findAll(whereOption:object): Promise<TVehicle[]>,
  findAllLikeByName(name:string):Promise<TPlace[]>,
  updatePlace(id:string, place:TPlace): Promise<TPlace>,
  deletePlace(id:string): Promise<void>,
  createPlace(place:TPlace): Promise<TPlace>,
}
