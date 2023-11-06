import { IServiceTask, IVehicle, IWorkShop } from '..';

export interface IMaintenance {
    id: number,
    description?: string,
    initialDate: Date,
    endDate: Date,
    workshopId: number,
    vehicleId: number,
    serviceId?: number[],
    vehicle?: IVehicle,
    workshop?: IWorkShop,
    services?: IServiceTask[]
}