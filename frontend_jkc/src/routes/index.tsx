import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Fleet, VehicleDetail, ServiceTasks, ServiceTaskEdit, WorkShops, WorkShopEdit } from '../pages';
import { FleetProvider, ServiceTaskProvider, WorkShopProvider } from '../shared/contexts';


export const AppRoutes = () => {
  return (
    <FleetProvider>
      <ServiceTaskProvider>
        <WorkShopProvider>
          <Routes> 
            <Route path="/frota" element={<Fleet />} />
            <Route path="/frota/details/:id" element={<VehicleDetail />} />
            <Route path="/services" element={<ServiceTasks />} />
            <Route path="/services/edit/:id" element={<ServiceTaskEdit />} />
            <Route path="/workshops" element={<WorkShops />} />
            <Route path="/workshops/edit/:id" element={<WorkShopEdit />} />
            {/* <Route path="*" element={<Navigate to="/Login"  />} /> */}
          </Routes>
        </WorkShopProvider>
      </ServiceTaskProvider>
    </FleetProvider>
  );
};