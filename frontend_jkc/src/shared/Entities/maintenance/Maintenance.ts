import { IServiceTask, IVehicle, IWorkShop } from '..';
import { IMaintenance } from './IMaintenance';

type TMaintenance_service_association = {
  maintenanceId: number;
  serviceId: number;
  totalPrice: number;
  description: string;
}

export class Maintenance implements IMaintenance {
  id: number=0;
  description?: string | undefined = 'Nova manutenção em veiculo x, oficina y, com os serviços z, ...';
  initialDate: Date=new Date();
  endDate: Date=new Date();
  workshopId=0;
  vehicleId=0;
  serviceId?: number[] | undefined;
  vehicle?: IVehicle;
  workshop?: IWorkShop;
  services?: IServiceTask[];
  maintenance_service_association?: TMaintenance_service_association[] = [];
  
  constructor (id?: number) {
    if (id) {
      this.id = id;
    }
  }

}