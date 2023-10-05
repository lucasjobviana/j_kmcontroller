import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { useFleetContext } from '../../contexts';
import { Vehicle } from './../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormVehicleDetailProps extends IReactRCProps {
  vehicleId?: string;
  vehicle?: Vehicle;
}

export const FormCategoryDetail: React.FC<IFormVehicleDetailProps> = ({ children, vehicleId, vehicle, ...rest }) => {
  const {  update } = useFleetContext();
  const navigate = useNavigate();

  if(vehicle) {
    return (
      <Form {...rest} onSubmit={async (v) => {
        const category = new Vehicle(v.name);
        category.id = Number(vehicleId);
        category.licensePlate = v.licensePlate;
        await update(category);
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
};
