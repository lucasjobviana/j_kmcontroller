import React, { createContext, useCallback, useState, useContext } from 'react';
import { IReactRCProps } from '../tools';
import {  IPlace, Place } from '../../shared/Entities';
import  { mapToDefaultStorage }  from '../tools';

interface IPlaceContext  {
    places: IPlace[] | [];
    create: (name: string ) => Promise<boolean>;
    del: (id: number) => void;
    update: (place: Place) => void;
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

  const create = useCallback( async (name='Novo Veiculo', description='Ausente' ,fullAddress='Ausente') => {
    const place = new Place(name, description,fullAddress);
    const newPlace = await defaultStorage('createPlace', place);
    if(newPlace) {
      setPlaces((place) => [...place, newPlace]);
      return newPlace.id;
    }
    return false;
  }, [places]);

  const update = useCallback( async (place: Place) => {
    const hasUpdated = await defaultStorage('updatePlace', place);
    console.log('Place updated', hasUpdated);
  }, [places]);

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
    <PlaceContext.Provider value={{ places, getByName, setPlaces, del, update, create }}>
      {children}
    </PlaceContext.Provider>
  );

};

export const usePlaceContext = () => {
  return useContext(PlaceContext);
};
