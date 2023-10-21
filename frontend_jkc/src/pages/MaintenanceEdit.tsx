import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useMaintenanceContext } from '../shared/contexts';
import { FormMaintenanceDetail } from '../shared/components';

export const MaintenanceEdit = () => {
  const { del, create } = useMaintenanceContext();
  const { id='nova' } = useParams<'id'>();
  const { maintenances } = useMaintenanceContext();
  const navigate = useNavigate();
  const maintenance = maintenances.find((maintenance) => Number(maintenance.id) === Number(id));

  const handleDelete = async () => {
    if(confirm(`Realmente deseja excluir a manutenção ${id}?`)) {
      await del(Number(id));
      navigate('/maintenances');
    }
  };
  return (
    <>
      <LayoutBase title='Manutenções - Editar' toolBar={<J_ToolBar
        addButtonEnabled
        deleteButtonEnabled
        backTo='/maintenances'
        handleClickDelete={ handleDelete}
        handleClickAdd={async () => {const id = await create('Nova Manutenção');navigate(`/maintenances/edit/${id}`);}}
      />}  >

        <Box height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={1} component={Paper} variant='outlined' >
          <Typography variant='h6' component='h1' >
            {
              maintenance ?
                `${id||'nova'} - ${maintenance.id}` :
                'Manutenção não encontrada'
            }
          </Typography>
        </Box>

        <Box component={Paper} variant='outlined' sx={ { height: 'auto', width: '100%' } }>
          {
            maintenance ?
              <FormMaintenanceDetail maintenanceId={id} maintenance={maintenance} />
              : 'Manutenção não encontrada'
          }
        </Box>
      </LayoutBase>
    </>
  );
};