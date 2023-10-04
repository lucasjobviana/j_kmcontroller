import { IVehicle } from './IVehicle';

export class Vehicle implements IVehicle {
  id: number=0;
  name: string;
  description: string='Nova descrição';
  image: string='https://w7.pngwing.com/pngs/434/1006/png-transparent-compact-car-audi-computer-icons-sports-car-car-compact-car-angle-vintage-car.png';
  userId: number=0;

  constructor (name: string) {
    this.name = name;
  }
}