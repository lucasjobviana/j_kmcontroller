import { IServiceTask, IVehicle, IWorkShop } from '..';
import { IMaintenance } from './IMaintenance';

export class Maintenance implements IMaintenance {
  id: number=0;
  description?: string | undefined = 'Nova manutenção em veiculo x, oficina y, com os serviços z, ...';
  initialDate: Date=new Date();
  endDate: Date=new Date();
  workshopId: number=0;
  vehicleId: number=0;
  serviceId?: number[] | undefined;
  vehicle?: IVehicle;
  workshop?: IWorkShop;
  services?: IServiceTask[];
  
  constructor (id?: number) {
    if (id) {
      this.id = id;
    }
  }

}