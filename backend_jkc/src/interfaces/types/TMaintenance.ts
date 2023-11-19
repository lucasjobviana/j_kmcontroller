import { TServiceTask } from './TServiceTask';

export type TMaintenance = {
    id: number,
    description?: string,
    initialDate: Date,
    endDate: Date,
    workshopId: number,
    vehicleId: number,
    serviceId?: number[],
    services?: TServiceTask[],
    maintenance_service_association?: {
        maintenanceId: number,
        serviceId: number,
        totalPrice: number,
        description: string,
    }[],
};
