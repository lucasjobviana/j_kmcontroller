import { api } from '..';
// import { Place } from '../../../Entities';

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

// export const createVehicle = async (category: Place) => {
//   try{
//     const token = JSON.parse(localStorage.getItem('token')) ;
//     const newCategory = await api.post('/fleet', category, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }).then((response) => {
//       return response.data;
//     });
//     return newCategory;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateVehicle = async (vehicle: Place) => {
//   const token = JSON.parse(localStorage.getItem('token')) ;
//   const updatedCategory = await api.put(`/fleet/${vehicle.id}`, vehicle, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }).then((response) => {
//     return response.data;
//   });
//   return updatedCategory;
// };

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
