import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import {  IPlace } from '../../shared/Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IPlaceContext  {
    places: IPlace[] | [];
    // create: (name: string ) => Promise<boolean>;
    del: (id: number) => void;
    // update: (vehicle: Place) => void;
    // getAll: () => void;
    // getById: (id: number) => void;
    getByName: (name: string) => Promise<boolean>;
    setPlaces: React.Dispatch<React.SetStateAction<IPlace[] | []>>;
}

interface IPlaceProviderProps extends IReactRCProps {
}

const PlaceContext = createContext({} as IPlaceContext);

export const PlaceProvider: React.FC<IPlaceProviderProps> = ({ children }) => {
  const defaultStorage = mapToDefaultStorage();
  const [places, setPlaces] = useState<IPlace[]|[]>([]); 

  // const create = useCallback( async (name='Novo Veiculo') => {
  //   const vehicle = new Place(name);
  //   const newVehicle = await defaultStorage('createVehicle', vehicle);
  //   if(newVehicle) {
  //     setFleet((fleet) => [...fleet, newVehicle]);
  //     return newVehicle.id;
  //   }
  //   return false;
  // }, [fleet]);

  // const update = useCallback( async (vehicle: Place) => {
  //   const hasUpdated = await defaultStorage('updateVehicle', vehicle);
  //   console.log('Vehicle updated', hasUpdated);
  // }, [fleet]);

  const del = useCallback( async (id: number) => {
    const status = await defaultStorage('deletePlace', id);
    if(status  === true) {
      const newPlace = places.filter((place) => Number(place.id) !== id);
      setPlaces(newPlace);
      console.log('Place deleted', newPlace);

    }
    console.log('del method deleted', status, status === true);
  }, [places]);

  // const getAll = useCallback( () => {
  //   console.log('get all Vehicle');
  // }, [fleet]);

  const getByName = useCallback( async (name: string) => {
    console.log('chamarei mapToDefaultStorage',name)
    const place = await defaultStorage('getPlacesByName', { search:name });   
    console.log('retornei',place)
    if(place) {
      setPlaces(place);
      return true;
    }
    return false;
  }, [places]);

  // const getById = useCallback( (id: number) => {
  //   console.log('get vehicle by id: ', id);
  // }, [fleet]);

  return (
    <PlaceContext.Provider value={{ places, getByName, setPlaces, del }}>
      {children}
    </PlaceContext.Provider>
  );

};

export const usePlaceContext = () => {
  return useContext(PlaceContext);
};
