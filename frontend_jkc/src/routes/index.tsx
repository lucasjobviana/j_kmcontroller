import { Route, Routes } from 'react-router-dom';
import { Fleet, VehicleDetail } from '../pages';
import { FleetProvider } from '../shared/contexts';

export const AppRoutes = () => {
  return (
    <FleetProvider>
        <Routes> 
          <Route path="/frota" element={<Fleet />} />
          <Route path="/frota/details/:id" element={<VehicleDetail />} />
          {/* <Route path="*" element={<Navigate to="/Login"  />} /> */}
        </Routes>
    </FleetProvider>
  );
};