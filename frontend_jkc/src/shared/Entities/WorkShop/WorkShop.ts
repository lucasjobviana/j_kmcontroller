import { IWorkShop } from './IWorkShop';

export class WorkShop implements IWorkShop {
  id: number=0;
  name: string;
  description: string='Sem descrição';
  fullAddress: string='Sem endereço';
  phone: string='Sem telefone';

  constructor (name: string, description: string, fullAddress:string, phone:string,  id?: number) {
    this.name = name;
    this.description = description;
    this.fullAddress = fullAddress;
    this.phone = phone;
    if (id) {
      this.id = id;
    }
  }
}