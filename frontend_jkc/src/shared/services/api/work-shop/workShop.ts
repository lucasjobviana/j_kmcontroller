import { api } from '..';
import { WorkShop } from '../../../Entities';

// export const getAllVehicles = async () => {
//   const categories = await api.get('/categories').then((response) => {
//     return response.data;
//   });
//   return categories; 
// }; 

export const getWorkShopsByName = async ({ search }) => {

  const token = JSON.parse(localStorage.getItem('token')) ;
  const workShops = await api.get(`/workshop/name?search=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return workShops;
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

export const createWorkShop = async (workShop: WorkShop) => {
  try{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const newPlace = await api.post('/workshop', workShop, {
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

export const updateWorkShop = async (workShop: WorkShop) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const updatedWorkShop = await api.put(`/workshop/${workShop.id}`, workShop, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return updatedWorkShop;
};

export const deleteWorkShop = async (id: number) => {
  console.log('id para deletar no api . delete;', id);
  const token = JSON.parse(localStorage.getItem('token')) ;
  const deletedWorkShop = await api.delete(`/workshop/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 204) {
      return true;
    }
    return response.data;
  });
  console.log('workshop deleted:', deletedWorkShop);
  return deletedWorkShop;
};
