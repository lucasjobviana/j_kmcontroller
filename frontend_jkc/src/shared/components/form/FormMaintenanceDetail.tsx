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

export interface IFormMaintenanceDetailProps extends IReactRCProps {
  maintenanceId?: string;
  maintenance?: Maintenance;
}

export const FormMaintenanceDetail: React.FC<IFormMaintenanceDetailProps> = ({ children, maintenanceId, maintenance, ...rest }) => {
  const { update } = useMaintenanceContext();
  const navigate = useNavigate();

  if(maintenance) { console.log('maintenance       no form: ',maintenance);
    const vehicleName = maintenance.vehicle ? maintenance.vehicle.name : 'Desconhecido';
    const vehicleId = maintenance.vehicle ? maintenance.vehicle.id : 0;
    const workshopName = maintenance.workshop ? maintenance.workshop.name : 'Desconhecido';
    const workshopId = maintenance.workshop ? maintenance.workshop.id : 0;

    return (
      <Form {...rest} onSubmit={async (v) => {
        const mt = new Maintenance();
        mt.id = Number(maintenanceId);
        mt.description = v.description;
        mt.initialDate = v.initialDate;
        mt.endDate = v.endDate;
        // console.log('Resultado no meu formulario ',mt);
        // console.log(v.name,v.description,v.fullAddress,v.phone,maintenanceId);
        // console.log('v do form: ',v);
        await update(mt);
        navigate('/workShops');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='description' label='Descrição' value={maintenance.description} defaultV={maintenance.description}  />
          <AutoCompleteVehicles id={vehicleId}  />
          <AutoCompleteWorkshops id={workshopId}  />
          <J_TextField name='initialDate' label='Inicio' value={maintenance.initialDate} defaultV={maintenance.initialDate.toString()}  />
          <J_TextField name='endDate' label='Fim' value={maintenance.endDate} defaultV={maintenance.endDate.toString()}  />
          <J_TextField name='vehicle' label='Veiculo' value={vehicleName} defaultV={vehicleName}  />
          <J_TextField name='workshop' label='Oficina' value={workshopName} defaultV={workshopName}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
