import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useFleetContext } from '../shared/contexts';
import { FormVehicleDetail } from '../shared/components/form';

export function VehicleDetail() {
  const { id = 'nova' } = useParams<'id'>();
  const { create, del, fleet } = useFleetContext();
  const navigate = useNavigate();
  const vehicle = fleet.find((vehicle) => Number(vehicle.id) === Number(id)) || undefined;

  const handleDelete = async () => {
    if (confirm(`Deseja excluir o veiculo ${id} `)) {
      await del(Number(id));
      navigate('/frota');
    }
  };
  return (
    <LayoutBase
      title="Frota - Detalhes"
      toolBar=
        {
          <J_ToolBar
            addButtonEnabled
            deleteButtonEnabled
            backTo="/frota"
            handleClickDelete={ handleDelete }
            handleClickAdd={ async () => { const id = await create('Novo Veículo'); navigate(`/frota/details/${id}`); } }
          /> 
        }
    >

      <Box height={ 30 } display="flex" flexDirection="row" justifyContent="center" alignItems="center" marginBottom={ 1 } component={ Paper } variant="outlined">
        <Typography variant="h6" component="h1">
          {
            vehicle
              ? `${id || 'nova'} - ${vehicle.name}`
              : 'Veiculo não encontrado'
          }
        </Typography>
      </Box>

      <Box component={ Paper } variant="outlined" sx={ { height: 'auto', width: '100%' } }>
        {
          vehicle
            ? <FormVehicleDetail vehicleId={ id } vehicle={ vehicle } />
            : 'Veiculo não encontrado'
        }
      </Box>
    </LayoutBase>
  );
}