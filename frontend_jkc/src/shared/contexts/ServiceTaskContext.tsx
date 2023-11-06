import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import {  IServiceTask, ServiceTask } from '../Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IServiceTaskContext  {
    serviceTasks: IServiceTask[] | []; 
    create: (name: string ) => Promise<boolean>;
    del: (id: number) => void; 
    update: (serviceTask: ServiceTask) => void;
    // getAll: () => void;
    // getById: (id: number) => void;
    getByName: (name: string) => Promise<boolean>;
    setServices: React.Dispatch<React.SetStateAction<IServiceTask[] | []>>;
}

interface IServiceTaskProviderProps extends IReactRCProps {
}

const ServiceTaskContext = createContext({} as IServiceTaskContext);

export const ServiceTaskProvider: React.FC<IServiceTaskProviderProps> = ({ children }) => {
  const defaultStorage = mapToDefaultStorage();
  const [serviceTasks, setServices] = useState<IServiceTask[]|[]>([]); 

  const create = useCallback( async (name='Novo Serviço', description='Descrição do novo serviço' ) => {
    const serviceTask = new ServiceTask(name, description);
    const newServiceTask = await defaultStorage('createServiceTask', serviceTask);
    if(newServiceTask) {
      setServices((service) => [...service, newServiceTask]);
      return newServiceTask.id;
    }
    return false;
  }, [serviceTasks]);

  const update = useCallback( async (serviceTask: ServiceTask) => {
    const hasUpdated = await defaultStorage('updateServiceTask', serviceTask);
    console.log('ServiceTask updated', hasUpdated);
  }, [serviceTasks]);

  const del = useCallback( async (id: number) => {
    const status = await defaultStorage('deleteServiceTask', id);
    if(status  === true) {
      const newServiceTask = serviceTasks.filter((service) => Number(service.id) !== id);
      setServices(newServiceTask);
      console.log('ServiceTask deleted', newServiceTask);
    }
  }, [serviceTasks]);


  const getByName = useCallback( async (name: string) => {
    const serviceTask = await defaultStorage('getServiceTasksByName', { search:name });   

    if(serviceTask) {
      setServices(serviceTask);
      return true;
    }
    return false;
  }, [serviceTasks]);

  return (
    <ServiceTaskContext.Provider value={{ serviceTasks, getByName, setServices, del, update, create }}>
      {children}
    </ServiceTaskContext.Provider>
  );

};

export const useServiceTaskContext = () => {
  return useContext(ServiceTaskContext);
};
