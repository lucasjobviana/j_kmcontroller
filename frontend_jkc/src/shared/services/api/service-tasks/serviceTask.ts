import { api } from '..';
import { ServiceTask } from '../../../Entities';

// export const getAllVehicles = async () => {
//   const categories = await api.get('/categories').then((response) => {
//     return response.data;
//   });
//   return categories; 
// }; 

export const getServiceTasksByName = async ({ search }) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const serviceTasks = await api.get(`/services/name?search=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return serviceTasks;
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

export const createServiceTask = async (serviceTask: ServiceTask) => {
  try{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const newServiceTask = await api.post('/services', serviceTask, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      return response.data;
    });
    return newServiceTask;
  } catch (error) {
    console.log(error);
  }
};

export const updateServiceTask = async (serviceTask: ServiceTask) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const updatedService = await api.put(`/services/${serviceTask.id}`, serviceTask, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  return updatedService;
};

export const deleteServiceTask = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const deletedService = await api.delete(`/services/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 204) {
      return true;
    }
    return response.data;
  }).catch((error) => {
    console.log(error);
    alert(error.message);
    return false;
  });
  console.log('ServiceTask deleted:', deletedService);
  return deletedService;
};
