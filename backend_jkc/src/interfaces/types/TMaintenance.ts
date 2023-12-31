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
};
