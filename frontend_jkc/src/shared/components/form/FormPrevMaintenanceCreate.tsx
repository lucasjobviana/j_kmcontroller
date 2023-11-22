import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
// import { J_TextField } from './text-field'; 
import { Box, Button } from '@mui/material';
// import { useMaintenanceContext } from '../../contexts';
import { Maintenance } from '../../Entities';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteVehicles } from '../auto-complete-vehicles';
import { AutoCompleteWorkshops } from '../auto-complete-workshops';
import { useMaintenanceContext } from '../../contexts';
// import { J_DataPicker } from '../j-data-picker';
// import { useArray } from 'react-hanger';
// import { Delete, Add } from '@mui/icons-material';
// import { AutoCompleteServiceTask } from '../auto-complete-services';
// import { useServiceTaskContext } from '../../contexts';

export interface IFormPrevMaintenanceCreateProps extends IReactRCProps {
  maintenanceId?: string;
  maintenance?: Maintenance;
}

 
export const FormPrevMaintenanceCreate: React.FC<IFormPrevMaintenanceCreateProps> = ({ children, ...rest }) => {
  // const theme = useTheme();
  // const isBiggerThanSM = !useMediaQuery(theme.breakpoints.down('sm'));
  // const isBiggerThanMD = !useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { create } = useMaintenanceContext();
   
  return (
    <Form {...rest} onSubmit={async (v) => {
      const vehicleId = Number(v.vehicleId);
      const workshopId = Number(v.workshopId);
      if(!vehicleId || !workshopId) {
        alert('Selecione um veículo e uma oficina para a manutenção');
        return;
      } 

      const id = await create(vehicleId, workshopId);
      console.log('id',id);
      
      // console.log('vehicleId',vehicleId);
      // console.log('workshopId',workshopId);
      navigate(`edit/${id}`);
    }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
        <AutoCompleteVehicles id={0} name='vehicleId'    />
        <AutoCompleteWorkshops id={0} name={'workshopId'}  /> 
        <Button variant='outlined' type='submit'>Salvar</Button>
        {children}
      </Box>
    </Form>
  );
  
};
