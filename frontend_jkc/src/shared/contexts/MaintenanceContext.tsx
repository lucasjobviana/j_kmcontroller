import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import { IMaintenance, Maintenance } from '../Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IMaintenanceContext  {
    maintenances: IMaintenance[] | []; 
    create: (vehicleId: number, workshopId:number ) => Promise<boolean>;
    del: (id: number) => void; 
    update: (maintenance: Maintenance) => void;
    // getAll: () => void;
    // getById: (id: number) => void;
    getAll: () => Promise<boolean>;
    getByVehicleName: (name?: string) => Promise<boolean>;
    setMaintenances: React.Dispatch<React.SetStateAction<IMaintenance[] | []>>;
}

interface IMaintenancesProviderProps extends IReactRCProps {
}

const MaintenanceContext = createContext({} as IMaintenanceContext);

export const MaintenanceProvider: React.FC<IMaintenancesProviderProps> = ({ children }) => {
  const defaultStorage = mapToDefaultStorage();
  const [maintenances, setMaintenances] = useState<IMaintenance[]|[]>([]); 

  const create = useCallback( async ( vehicleId:number, workshopId:number ) => {
    const maintenance = new Maintenance();
    maintenance.vehicleId = vehicleId;
    maintenance.workshopId = workshopId;
    const newMaintenance = await defaultStorage('createMaintenance', maintenance);
    if(newMaintenance) {
      setMaintenances((main) => [...main, newMaintenance]);
      return newMaintenance.id;
    }
    return false;
  }, [maintenances]); 

  const update = useCallback( async (maintenance: Maintenance) => {
    const hasUpdated = await defaultStorage('updateMaintenance', maintenance);
    console.log('Maintenance updated', hasUpdated);
  }, [maintenances]);

  const del = useCallback( async (id: number) => {
    const status = await defaultStorage('deleteMaintenance', id);
    if(status  === true) {
      const newMaintenance = maintenances.filter((m) => Number(m.id) !== id);
      setMaintenances(newMaintenance);
      console.log('Maintenance deleted', newMaintenance);
    }
  }, [maintenances]);
 
  const getAll = useCallback( async () => {
    console.clear();
    console.log('get all Maintenance');
    console.log(maintenances);
    console.log(name);
    const maintenance = await defaultStorage('getAllMaintenances', { search:name });    

    if(maintenance) {
      setMaintenances(maintenance);
      console.log('Maintenance get all', maintenance);
      return true;
    }
    return false;
  }, [maintenances]);

  const getByVehicleName = useCallback( async (name: string='') => { 
    const maintenances = await defaultStorage('getMaintenancesByVehicleName', { search:name });
     
    if(maintenances) {
      // const newFleet = maintenances.map((v:IVehicle) => {
      //   return new Vehicle(v.name, v.licensePlate, v.id);
      // });
      setMaintenances(maintenances);
      return true;
    }
    return false;
  }, [maintenances]);

  // const getByName = useCallback( async (name: string) => {
  //   const serviceTask = await defaultStorage('getServiceTasksByName', { search:name });   

  //   if(serviceTask) {
  //     setMaintenances(serviceTask);
  //     return true;
  //   }
  //   return false;
  // }, [maintenances]);

  // const getById = useCallback( (id: number) => {
  //   console.log('get vehicle by id: ', id);
  // }, [fleet]);

  return (
    <MaintenanceContext.Provider value={{ maintenances: maintenances, getAll, getByVehicleName, setMaintenances: setMaintenances, del, update, create }}>
      {children}
    </MaintenanceContext.Provider>
  );

};

export const useMaintenanceContext = () => {
  return useContext(MaintenanceContext);
};
