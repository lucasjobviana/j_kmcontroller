import { api } from '..';
import { Vehicle } from '../../../Entities';

export const getAllVehicles = async () => {
  const categories = await api.get('/categories').then((response) => {
    return response.data;
  });
  return categories;
};

export const getVehiclesByName = async ({ search }) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const categories = await api.get(`/categories/name?search=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return categories;
};

export const getVehicleById = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const category = await api.get(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return category;
};

export const createVehicle = async (category: Vehicle) => {
  try{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const newCategory = await api.post('/categories', category, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      return response.data;
    });
    return newCategory;
  } catch (error) {
    console.log(error);
  }
};

export const updateVehicle = async (category: Vehicle) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const updatedCategory = await api.put(`/categories/${category.id}`, category, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return updatedCategory;
};

export const deleteVehicle = async (id: number) => {
  console.log('id para deletar no api . delete;', id);
  const token = JSON.parse(localStorage.getItem('token')) ;
  const deletedCategory = await api.delete(`/categories/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 204) {
      return true;
    }
    return response.data;
  });
  console.log('category deleted:', deletedCategory);
  return deletedCategory;
};
