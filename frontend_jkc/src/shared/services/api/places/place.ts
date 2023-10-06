import { api } from '..';
import { Place } from '../../../Entities';

// export const getAllVehicles = async () => {
//   const categories = await api.get('/categories').then((response) => {
//     return response.data;
//   });
//   return categories; 
// }; 

export const getPlacesByName = async ({ search }) => {
  console.log('cheguei no diabo aqui:', search);
  const token = JSON.parse(localStorage.getItem('token')) ;
  const places = await api.get(`/places/name?search=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return places;
};

// export const getVehicleById = async (id: number) => {
//   const token = JSON.parse(localStorage.getItem('token')) ;
//   const category = await api.get(`/fleet/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }).then((response) => {
//     return response.data;
//   });
//   return category;
// };

export const createPlace = async (place: Place) => {
  try{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const newPlace = await api.post('/places', place, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      return response.data;
    });
    return newPlace;
  } catch (error) {
    console.log(error);
  }
};

export const updatePlace = async (place: Place) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const updatedPlace = await api.put(`/places/${place.id}`, place, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return updatedPlace;
};

export const deletePlace = async (id: number) => {
  console.log('id para deletar no api . delete;', id);
  const token = JSON.parse(localStorage.getItem('token')) ;
  const deletedPlace = await api.delete(`/places/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 204) {
      return true;
    }
    return response.data;
  });
  console.log('category deleted:', deletedPlace);
  return deletedPlace;
};
