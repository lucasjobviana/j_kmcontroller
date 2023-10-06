import { IPlace } from './IPlace';

export class Place implements IPlace {
  id: number=0;
  name: string;
  description: string='Nova descrição';
  fullAddress: string='Novo endereço';

  constructor (name: string, description: string, fullAddress:string, id?: number) {
    this.name = name;
    this.fullAddress = fullAddress;
    this.description = description;
    if (id) {
      this.id = id;
    }
  }

  
}