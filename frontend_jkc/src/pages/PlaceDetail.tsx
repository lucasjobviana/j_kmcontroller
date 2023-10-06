import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { usePlaceContext } from '../shared/contexts';
import { FormPlaceDetail } from '../shared/components/form';

export const PlaceDetail = () => {
  const { del, create } = usePlaceContext();
  const { id='nova' } = useParams<'id'>();
  const { places } = usePlaceContext();
  const navigate = useNavigate();
  const place = places.find((category) => Number(category.id) === Number(id));

  const handleDelete = async () => {
    if(confirm(`Deseja excluir o destino ${id} `)) {
      await del(Number(id));
      navigate('/places');
    }
  };
  return (
    <>
      <LayoutBase title='Destino - Detalhes' toolBar={<J_ToolBar
        addButtonEnabled
        deleteButtonEnabled
        backTo='/places'
        handleClickDelete={ handleDelete}
        handleClickAdd={async () => {const id = await create('Novo destino');navigate(`/places/details/${id}`);}}
      />}  >

        <Box height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={1} component={Paper} variant='outlined' >
          <Typography variant='h6' component='h1' >
            {
              place ?
                `${id||'nova'} - ${place.name}` :
                'Destino não encontrado'
            }
          </Typography>
        </Box>

        <Box component={Paper} variant='outlined' sx={ { height: 'auto', width: '100%' } }>
          {
            place ?
              <FormPlaceDetail placeId={id} place={place} />
              : 'Destino não encontrado'
          }
        </Box>
      </LayoutBase>
    </>
  );
};