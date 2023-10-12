import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Fleet, VehicleDetail, Places, PlaceDetail, WorkShops, WorkShopEdit } from '../pages';
import { FleetProvider, PlaceProvider, WorkShopProvider } from '../shared/contexts';


export const AppRoutes = () => {
  return (
    <FleetProvider>
      <PlaceProvider>
        <WorkShopProvider>
          <Routes> 
            <Route path="/frota" element={<Fleet />} />
            <Route path="/frota/details/:id" element={<VehicleDetail />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/details/:id" element={<PlaceDetail />} />
            <Route path="/workshops" element={<WorkShops />} />
            <Route path="/workshops/edit/:id" element={<WorkShopEdit />} />
            {/* <Route path="*" element={<Navigate to="/Login"  />} /> */}
          </Routes>
        </WorkShopProvider>
      </PlaceProvider>
    </FleetProvider>
  );
};