import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field'; 
import { Box, Button } from '@mui/material';
import { useMaintenanceContext } from '../../contexts';
import { Maintenance } from '../../Entities';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteVehicles } from '../auto-complete-vehicles';
import { AutoCompleteWorkshops } from '../auto-complete-workshops';
import { J_DataPicker } from '../j-data-picker';


export interface IFormMaintenanceDetailProps extends IReactRCProps {
  maintenanceId?: string;
  maintenance?: Maintenance;
}

export const FormMaintenanceDetail: React.FC<IFormMaintenanceDetailProps> = ({ children, maintenanceId, maintenance, ...rest }) => {
  const { update } = useMaintenanceContext();
  const navigate = useNavigate();

  if(maintenance) {  
    const vehicleId = maintenance.vehicle ? maintenance.vehicle.id : 0;
    const workshopName = maintenance.workshop ? maintenance.workshop.name : 'Desconhecido';
    const workshopId = maintenance.workshop ? maintenance.workshop.id : 0;


    return (
      <Form {...rest} onSubmit={async (v) => {
        const mt = new Maintenance();
        mt.id = Number(maintenanceId);
        mt.description = v.description;
        mt.initialDate = v.initialDateJS.toDate(); 
        mt.endDate = v.endDateJ.toDate(); 
        mt.vehicleId = v.vehiclesIds;
        mt.workshopId = v.workshopsIds;
        await update(mt);
        navigate('/maintenances');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='description' label='Descrição' value={maintenance.description} defaultV={maintenance.description}  />
          <AutoCompleteVehicles id={vehicleId} name='vehicleId' label='Veículo' value={maintenance.vehicleId.toString()} defaultValue={maintenance.vehicleId.toString()}  />
          <AutoCompleteWorkshops id={workshopId} name={workshopName}  />
          <J_DataPicker  value={maintenance.initialDate} name='initialDateJS'  />
          <J_DataPicker value={maintenance.endDate} name='endDateJ' />   
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
