import { Route, Routes } from 'react-router-dom';
import { Fleet, VehicleDetail, Places, PlaceDetail } from '../pages';
import { FleetProvider, PlaceProvider } from '../shared/contexts';

export const AppRoutes = () => {
  return (
    <FleetProvider>
      <PlaceProvider>
        <Routes> 
          <Route path="/frota" element={<Fleet />} />
          <Route path="/frota/details/:id" element={<VehicleDetail />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/details/:id" element={<PlaceDetail />} />
          {/* <Route path="*" element={<Navigate to="/Login"  />} /> */}
        </Routes>
      </PlaceProvider>
    </FleetProvider>
  );
};