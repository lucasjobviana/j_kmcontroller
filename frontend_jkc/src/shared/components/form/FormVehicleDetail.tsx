import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { useFleetContext } from '../../contexts';
import { Vehicle } from '../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormVehicleDetailProps extends IReactRCProps {
  vehicleId?: string;
  vehicle?: Vehicle;
}

export const FormVehicleDetail: React.FC<IFormVehicleDetailProps> = ({ children, vehicleId, vehicle, ...rest }) => {
  const {  update } = useFleetContext();
  const navigate = useNavigate();
  console.log('vehicleId no meu form vehicle detail: ', vehicleId);
  console.log(vehicle);
  if(vehicle) {
    console.log('dentro do if');
    return (
      <Form {...rest} onSubmit={async (v) => {
        const vehicle = new Vehicle(v.name, v.licensePlate);
        vehicle.id = Number(vehicleId); 
        vehicle.licensePlate = v.licensePlate;
        await update(vehicle);
        navigate('/frota');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='name' label='Nome' value={vehicle.name} defaultV={vehicle.name}  />
          <J_TextField name='licensePlate' label='Placa' value={vehicle.licensePlate} defaultV={vehicle.licensePlate}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
  return (
    <>fdsf</>);
};
