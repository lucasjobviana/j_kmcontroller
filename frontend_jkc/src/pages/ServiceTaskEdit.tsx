import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useServiceTaskContext } from '../shared/contexts';
import { FormServiceTaskDetail } from '../shared/components/form';

export const ServiceTaskEdit = () => {
  const { del, create } = useServiceTaskContext();
  const { id='nova' } = useParams<'id'>();
  const { serviceTasks } = useServiceTaskContext();
  const navigate = useNavigate();
  const serviceTask = serviceTasks.find((service) => Number(service.id) === Number(id));

  const handleDelete = async () => {
    if(confirm(`Realmente deseja excluir o serviço ${id} ?`)) {
      await del(Number(id));
      navigate('/services');
    }
  };
  return (
    <>
      <LayoutBase title='Serviços - Detalhes' toolBar={<J_ToolBar
        addButtonEnabled
        deleteButtonEnabled
        backTo='/services'
        handleClickDelete={ handleDelete}
        handleClickAdd={async () => {await create('Novo Serviço');navigate('/services/edit');}}
      />}  >

        <Box height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={1} component={Paper} variant='outlined' >
          <Typography variant='h6' component='h1' >
            {
              serviceTask ?
                `${id||'nova'} - ${serviceTask.name}` :
                'Serviço não encontrado'
            }
          </Typography>
        </Box>

        <Box component={Paper} variant='outlined' sx={ { height: 'auto', width: '100%' } }>
          {
            serviceTask ?
              <FormServiceTaskDetail serviceTaskId={id} serviceTask={serviceTask} />
              : 'Serviço não encontrado'
          }
        </Box>
      </LayoutBase>
    </>
  );
};