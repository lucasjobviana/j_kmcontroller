import { IVehicle } from './IVehicle';

export class Vehicle implements IVehicle {
  id: number=0;
  name: string;
  description: string='Nova descrição';
  image: string='https://consorciomagalu.com.br/wp-content/uploads/2020/06/onibus-caminhao-consorcio-magalu05.jpg';
  licensePlate: string='sem placa';

  constructor (name: string, licensePlace: string, id?: number) {
    this.name = name;
    this.licensePlate = licensePlace;
    if (id) {
      this.id = id;
    }
  }

  
}