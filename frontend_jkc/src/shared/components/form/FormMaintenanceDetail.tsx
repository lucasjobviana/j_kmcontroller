import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field'; 
import { Box, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useMaintenanceContext } from '../../contexts';
import { Maintenance, ServiceTask } from '../../Entities';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteVehicles } from '../auto-complete-vehicles';
import { AutoCompleteWorkshops } from '../auto-complete-workshops';
import { J_DataPicker } from '../j-data-picker';
import { useArray } from 'react-hanger';
import { Delete, Add } from '@mui/icons-material';
import { AutoCompleteServiceTask } from '../auto-complete-services';
import { useServiceTaskContext } from '../../contexts';

export interface IFormMaintenanceDetailProps extends IReactRCProps {
  maintenanceId?: string;
  maintenance?: Maintenance;
}

type  TMaintenanceService = {id: number, name:string, price?: number, description?: string};
export const FormMaintenanceDetail: React.FC<IFormMaintenanceDetailProps> = ({ children, maintenanceId, maintenance, ...rest }) => {
  const { update } = useMaintenanceContext();
  const { serviceTasks } = useServiceTaskContext();
  const theme = useTheme();
  const isBiggerThanSM = !useMediaQuery(theme.breakpoints.down('sm'));
  const isBiggerThanMD = !useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const services = maintenance?.services ? maintenance.services : [];
  const serviceWithMaintenance = services.map((service)=> {
    return {
      id: service.id,
      name: service.name,
      price: service.maintenance_service_association.totalPrice,
      description: service.maintenance_service_association.description,
    };
    
  });
  const servicesList = useArray<TMaintenanceService>(serviceWithMaintenance);

  const handleSelectService = (id: number, indexOnList:number) => {
    if (!servicesList.value.find((service)=>service.id===id)){
      // servicesList.removeIndex(indexOnList);
      const name = serviceTasks.find((service)=>service.id===id)?.name || '';
      servicesList.value[indexOnList] = {id, name, price:0,description:'Descrição do serviço nesta manutenção'};
      // const service = new ServiceTask('Selecione o serviço','Serviço não selecionado',id);
      // servicesList.add({id, name:'', price:0,description:'Descrição do serviço nesta manutenção'});
    }else{
      alert('Serviço já adicionado');
    }
  }; 

  console.log('main',servicesList.value);

  if(maintenance) {  
    return (
      <Form {...rest} onSubmit={async (v) => {
        const mt = new Maintenance();
        mt.id = Number(maintenanceId);
        mt.description = v.description;
        mt.initialDate = v.initialDateJS.toDate(); 
        mt.endDate = v.endDateJ.toDate(); 
        mt.vehicleId = v.vehicleId;
        mt.workshopId = v.workshopId;
        const allServices = Object.keys(v).filter((key)=>key.includes('serviceId_')).map((key)=>new ServiceTask(v[key],v[key],Number(v[key])));
        mt.services = allServices.filter((service,index)=>{
          if(service.id>0){
            console.log('maintenance_service_association',service.id, v[`price_${index}`], v[`descService_${index}`]);
            mt.maintenance_service_association?.push({
              maintenanceId: mt.id,
              serviceId: service.id,
              description: v[`descService_${index}`],
              totalPrice: Number(v[`price_${index}`]) ,
            });
            return { 
              id: service.id,
              // maintenance_service_association: {
              //   description: v[`descService_${index}`],
              //   totalPrice: v[`price_${index}`],
              // },
            };
          }
        });
        // mt.services = allServices.filter((service)=>service.id>0);
        console.log('v',v);
        console.log('mt',mt);
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
          
          <Box component={Paper} variant='outlined'  display='flex' flexDirection='column' bgcolor={theme.palette.background.paper}  color={theme.palette.text.primary} gap={2} width={'100'} >
            <Button variant='contained' color='primary' onClick={()=>servicesList.add(new ServiceTask('Selecione o serviço','Serviço não selecionado'))} ><Add /></Button>      

            { 
              servicesList && servicesList.value.length > 0 && servicesList.value.map((_,index)=>
                <>
                  <Box display={'flex'} height={
                    isBiggerThanSM ? isBiggerThanMD ? theme.spacing(6) : theme.spacing(4) : theme.spacing(2)
                  }  justifyContent={'space-between'} alignItems={'center'} gap={1}  >
               
                    {/* <Typography
                      component='h6'
                      flex={1}
                      textAlign={'center'}
                      whiteSpace={'nowrap'}
                      overflow={'hidden'}
                      textOverflow={'ellipsis'}
                      variant={isBiggerThanSM ? 'h4' : 'h5'}
                    >
                    </Typography> */}
                    <AutoCompleteServiceTask propName={`serviceId_${index}`} id={servicesList.value[index].id} name={servicesList.value[index].name} onSelect={handleSelectService} selectedList={servicesList.value.map((s)=>s.id)} />
                    <J_TextField name={`descService_${index}`} label='Descrição' value={servicesList.value[index].description} defaultV={servicesList.value[index].description}  fullWidth />
                    <J_TextField name={`price_${index}`} label='Preço total' value={servicesList.value[index].price} defaultV={servicesList.value[index].price?.toString()} type='number' size='small' sx={{maxWidth:95}} />
      
          
                    <Button variant='contained' color='primary' onClick={()=>{console.log(index,servicesList,servicesList.value[index]);servicesList.removeIndex(index);}} ><Delete /></Button>      
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
