import { api } from '..';
import { Maintenance } from '../../../Entities';

export const getAllMaintenances = async () => { console.log('getAllMaintenances');
  const maintenances = await api.get('/maintenance').then((response) => {
    return response.data;
  }); 
  console.log('maintenences:', maintenances);
  return maintenances; 
}; 

// export const getMaintenancesByName = async ({ search }) => {
//   const token = JSON.parse(localStorage.getItem('token')) ;
//   const maintenances = await api.get(`/maintenance/name?search=${search}`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }).then((response) => {
//     return response.data;
//   });
//   return maintenances;
// };

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

export const createMaintenance = async (maintenance: Maintenance) => {
  try{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const newMaintenance = await api.post('/maintenance', maintenance, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      return response.data;
    });
    return newMaintenance; 
  } catch (error) {
    console.log(error);
  }
};

export const updateMaintenance = async (maintenance: Maintenance) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  console.log('updateMaintenance da api:', maintenance);
  const updatedMaintenance = await api.put(`/maintenance/${maintenance.id}`, maintenance, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    return response.data;
  });
  console.log('Maintenance updated:', updatedMaintenance);
  return updatedMaintenance;
};

export const deleteMaintenance = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token')) ;
  const deletedMaintenance = await api.delete(`/maintenance/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 204) {
      return true;
    }
    return response.data;
  });
  console.log('Maintenance deleted:', deletedMaintenance);
  return deletedMaintenance;
};
