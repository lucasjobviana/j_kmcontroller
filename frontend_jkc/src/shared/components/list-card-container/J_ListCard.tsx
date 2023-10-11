import React from 'react';
import { J_Card } from './j_card';
import { Container, Grid } from '@mui/material';
import { IVehicle } from '../../Entities';

interface IListCardProps{
  list: IVehicle[],
  handleClickCard?: (vehicle: IVehicle) => void;
}

export const J_ListCard: React.FC<IListCardProps> = ({list}) => {
  const mock = list;
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {
            mock.map((obj)=>(<J_Card key={obj.name} to="asd" obj={obj} />))
          } 
        </Grid>
      </Container> 
    </>
  );
};