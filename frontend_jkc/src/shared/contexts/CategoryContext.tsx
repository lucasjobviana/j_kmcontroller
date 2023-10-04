import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import { IVehicle, Vehicle } from '../Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IVehicleContext  {
    fleet: IVehicle[] | [];
    create: (name: string ) => Promise<boolean>;
    del: (id: number) => void;
    update: (vehicle: Vehicle) => void;
    getAll: () => void;
    getById: (id: number) => void;
    getByName: (name: string) => Promise<boolean>;
    setFleet: React.Dispatch<React.SetStateAction<IVehicle[] | []>>;
}

interface IFleetProviderProps extends IReactRCProps {
}

const FleetContext = createContext({} as IVehicleContext);

export const FleetProvider: React.FC<IFleetProviderProps> = ({ children }) => {
  const defaultStorage = mapToDefaultStorage();
  const [fleet, setFleet] = useState<IVehicle[]|[]>([]);

  const create = useCallback( async (name='Novo Veiculo') => {
    const vehicle = new Vehicle(name);
    const newVehicle = await defaultStorage('createVehicle', vehicle);
    if(newVehicle) {
      setFleet((fleet) => [...fleet, newVehicle]);
      return newVehicle.id;
    }
    return false;
  }, [fleet]);

  const update = useCallback( async (vehicle: Vehicle) => {
    const hasUpdated = await defaultStorage('updateVehicle', vehicle);
    console.log('Vehicle updated', hasUpdated);
  }, [fleet]);

  const del = useCallback( async (id: number) => {
    const status = await defaultStorage('deleteVehicle', id);
    if(status  === true) {
      const newFleet = fleet.filter((vehicle) => Number(vehicle.id) !== id);
      setFleet(newFleet);
      console.log('Vehicle deleted', newFleet);

    }
    console.log('del method deleted', status, status === true);
  }, [fleet]);

  const getAll = useCallback( () => {
    console.log('get all Vehicle');
  }, [fleet]);

  const getByName = useCallback( async (name: string) => {
    const fleet = await defaultStorage('getVehiclesByName', { search:name }); 
    if(fleet) {
      setFleet(fleet);
      return true;
    }
    return false;
  }, [fleet]);

  const getById = useCallback( (id: number) => {
    console.log('get vehicle by id: ', id);
  }, [fleet]);

  return (
    <FleetContext.Provider value={{ fleet, create, del, update, getAll, getById, getByName, setFleet  }}>
      {children}
    </FleetContext.Provider>
  );

};

export const useFleetContext = () => {
  return useContext(FleetContext);
};
