import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import { IWorkShop, WorkShop } from '../../shared/Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IWorkShopContext  {
    workShops: IWorkShop[] | [];
    create: (name: string ) => Promise<boolean>;
    del: (id: number) => void;
    update: (workShop: WorkShop) => void;
    getAll: () => void;
    getById: (id: number) => void;
    getByName: (name: string) => Promise<boolean>;
    setWorkShops: React.Dispatch<React.SetStateAction<IWorkShop[] | []>>;
}

interface IWorkShopsProviderProps extends IReactRCProps {
}

const WorkShopContext = createContext({} as IWorkShopContext);

export const WorkShopProvider: React.FC<IWorkShopsProviderProps> = ({ children }) => {
  const defaultStorage = mapToDefaultStorage();
  const [workShops, setWorkShops] = useState<IWorkShop[]|[]>([]);

  const create = useCallback( async (name='Novo Veiculo',description='Sem placa', fullAddress='Sem endereço', phone='Sem phone' ) => {
    const workShop = new WorkShop(name, description, fullAddress, phone);
    const newWorkShop = await defaultStorage('createWorkShop', workShop);
    if(newWorkShop) {
      setWorkShops((workShops) => [...workShops, newWorkShop]);
      return newWorkShop.id;
    }
    return false;
  }, [workShops]);

  const update = useCallback( async (workShop: WorkShop) => {
    const hasUpdated = await defaultStorage('updateWorkShop', workShop);
    console.log('WorkShop updated', hasUpdated, workShop);
  }, [workShops]);

  const del = useCallback( async (id: number) => {
    const status = await defaultStorage('deleteWorkShop', id);
    if(status  === true) {
      const newWorkShops = workShops.filter((workShop) => Number(workShop.id) !== id);
      setWorkShops(newWorkShops);
      console.log('Workshop deleted', newWorkShops);

    }
  }, [workShops]);

  const getAll = useCallback( () => {
    console.log('get all WorkShop - not implemented');
  }, [workShops]);

  const getByName = useCallback( async (name: string) => {
    const workshops = await defaultStorage('getWorkShopsByName', { search:name });  
    if(workshops) {
      setWorkShops(workshops);
      return true;
    }
    return false;
  }, [workShops]);

  const getById = useCallback( (id: number) => {
    console.log('get workshop by id: ', id, ' - not implemented');
  }, [workShops]);

  return (
    <WorkShopContext.Provider value={{ workShops, create, del, update, getAll, getById, getByName, setWorkShops: setWorkShops  }}>
      {children}
    </WorkShopContext.Provider>
  );

};

export const useWorkShopContext = () => {
  return useContext(WorkShopContext);
};