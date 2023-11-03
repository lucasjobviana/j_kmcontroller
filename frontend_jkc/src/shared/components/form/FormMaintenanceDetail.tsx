import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field'; 
import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMaintenanceContext } from '../../contexts';
import { Maintenance, ServiceTask } from '../../Entities';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteVehicles } from '../auto-complete-vehicles';
import { AutoCompleteWorkshops } from '../auto-complete-workshops';
import { J_DataPicker } from '../j-data-picker';
import { useArray } from 'react-hanger';
import { Delete, Add } from '@mui/icons-material';
import { AutoCompleteServiceTask } from '../auto-complete-services';

export interface IFormMaintenanceDetailProps extends IReactRCProps {
  maintenanceId?: string;
  maintenance?: Maintenance;
}

export const FormMaintenanceDetail: React.FC<IFormMaintenanceDetailProps> = ({ children, maintenanceId, maintenance, ...rest }) => {
  const { update } = useMaintenanceContext();
  const theme = useTheme();
  const isBiggerThanSM = !useMediaQuery(theme.breakpoints.down('sm'));
  const isBiggerThanMD = !useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const services = maintenance?.services ? maintenance.services : [];
  const servicesList = useArray<ServiceTask|[]>(services);

  if(maintenance) {  
    // const vehicleId = maintenance.vehicle ? maintenance.vehicle.id : 55;
    // const workshopName = maintenance.workshop ? maintenance.workshop.name : 'Desconhecido';
    // const workshopId = maintenance.workshop ? maintenance.workshop.id : 55;
     
     
    console.clear();
    console.log(maintenance);
    console.log(servicesList.value);


    return (
      <Form {...rest} onSubmit={async (v) => {
        const mt = new Maintenance();
        mt.id = Number(maintenanceId);
        mt.description = v.description;
        mt.initialDate = v.initialDateJS.toDate(); 
        mt.endDate = v.endDateJ.toDate(); 
        mt.vehicleId = v.vehicleId;
        mt.workshopId = v.workshopId;
        mt.services = Object.keys(v).filter((key)=>key.includes('serviceId_')).map((key)=>new ServiceTask(v[key],v[key],Number(v[key])));
        console.log('mt');
        console.log(mt);
        console.log('v');
        console.log(v);
        await update(mt);
        navigate('/maintenances');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='description' label='Descrição' value={maintenance.description} defaultV={maintenance.description}  />
          <AutoCompleteVehicles id={maintenance.vehicleId} name='vehicleId' label='Veículo' value={maintenance.vehicleId.toString()} defaultValue={maintenance.vehicleId.toString()}  />
          <AutoCompleteWorkshops id={maintenance.workshopId} name={maintenance.workshop?.name}  />
          <J_DataPicker  value={maintenance.initialDate} name='initialDateJS'  />
          <J_DataPicker value={maintenance.endDate} name='endDateJ' /> 
         
          Serviços:<br />
          {/* <AutoCompleteServiceTask id={0} name={'fgh'}  /> */}
          <Button variant='contained' color='primary' onClick={()=>servicesList.add(new ServiceTask('Selecione o serviço','Serviço não selecionado'))} ><Add /></Button>      
          <Box component={Paper} variant='outlined' paddingX={1}  display='flex' flexDirection='column' bgcolor={theme.palette.background.paper}  color={theme.palette.text.primary} gap={2} width={'100'} >

            {
              services && services.length > 0 && servicesList.value.map((service,index)=>
                <>
                  <Box display={'flex'} height={
                    isBiggerThanSM ? isBiggerThanMD ? theme.spacing(6) : theme.spacing(4) : theme.spacing(2)
                  }  justifyContent={'space-between'} alignItems={'center'} gap={1}  >
               
                    <Typography
                      component='h6'
                      flex={1}
                      textAlign={'center'}
                      whiteSpace={'nowrap'}
                      overflow={'hidden'}
                      textOverflow={'ellipsis'}
                      variant={isBiggerThanSM ? 'h4' : 'h5'}
                    >
                      <AutoCompleteServiceTask propName={`serviceId_${index}`} id={service.id} name={service.name}  />
                    </Typography>
      
                    <Button variant='contained' color='primary' onClick={()=>servicesList.removeIndex(index)} ><Delete /></Button>      
          
                  </Box>
                  <Box flex={1}  >{children}</Box>
                </>
             
              )
            }
          </Box>
          
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
