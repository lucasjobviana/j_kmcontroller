import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { usePlaceContext } from '../../contexts';
import { Place } from '../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormPlaceDetailProps extends IReactRCProps {
  placeId?: string;
  place?: Place;
}

export const FormPlaceDetail: React.FC<IFormPlaceDetailProps> = ({ children, placeId, place, ...rest }) => {
  const { update } = usePlaceContext();
  const navigate = useNavigate();

  if(place) {
    return (
      <Form {...rest} onSubmit={async (v) => {
        const place = new Place(v.name, v.description,v.fullAddress,Number(placeId));
        console.log(place);
        // place.id = Number(vehicleId); 
        await update(place);
        navigate('/places');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='name' label='Nome' value={place.name} defaultV={place.name}  />
          <J_TextField name='description' label='Descrição' value={place.description} defaultV={place.description}  />
          <J_TextField name='fullAddress' label='Endereço' value={place.fullAddress} defaultV={place.fullAddress}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
