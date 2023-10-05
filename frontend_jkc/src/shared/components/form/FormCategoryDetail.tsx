import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { useFleetContext } from '../../contexts';
import { Vehicle } from './../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormCategoryDetailProps extends IReactRCProps {
  categoryId?: string;
  category?: Vehicle;
}

export const FormCategoryDetail: React.FC<IFormCategoryDetailProps> = ({ children, categoryId, category, ...rest }) => {
  const {  update } = useFleetContext();
  const navigate = useNavigate();

  if(category) {
    return (
      <Form {...rest} onSubmit={async (v) => {
        const category = new Vehicle(v.name);
        category.id = Number(categoryId);
        await update(category);
        navigate('/frota');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='name' label='Nome' value={category.name} defaultV={category.name}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
