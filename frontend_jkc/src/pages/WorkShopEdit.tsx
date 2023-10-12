import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useWorkShopContext } from '../shared/contexts';
import { FormWorkShopDetail } from '../shared/components/form';

export function WorkShopEdit() {
  const { id = 'nova' } = useParams<'id'>();
  const { create, del, workShops } = useWorkShopContext();
  const navigate = useNavigate();
  const workShop = workShops.find((ws) => Number(ws.id) === Number(id)) || undefined;

  const handleDelete = async () => {
    if (confirm(`Deseja excluir a oficina ${id} `)) {
      await del(Number(id));
      navigate('/workshops');
    }
  };
  return (
    <LayoutBase
      title="Oficina - Edição"
      toolBar=
        {
          <J_ToolBar
            addButtonEnabled
            deleteButtonEnabled
            backTo="/workshops"
            handleClickDelete={ handleDelete }
            handleClickAdd={ async () => { const id = await create('Nova Oficina'); navigate(`/workshops/edit/${id}`); } }
          /> 
        }
    >

      <Box height={ 30 } display="flex" flexDirection="row" justifyContent="center" alignItems="center" marginBottom={ 1 } component={ Paper } variant="outlined">
        <Typography variant="h6" component="h1">
          {
            workShop
              ? `${id || 'nova'} - ${workShop.name}`
              : 'Oficina não encontrada'
          }
        </Typography>
      </Box>

      <Box component={ Paper } variant="outlined" sx={ { height: 'auto', width: '100%' } }>
        {
          workShop
            ? <FormWorkShopDetail workShopId={ id } workShop={ workShop } />
            : 'Oficina não encontrada'
        }
      </Box>
    </LayoutBase>
  );
}