import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { useWorkShopContext } from '../../contexts';
import { WorkShop } from '../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormWorkShopDetailProps extends IReactRCProps {
  workShopId?: string;
  workShop?: WorkShop;
}

export const FormWorkShopDetail: React.FC<IFormWorkShopDetailProps> = ({ children, workShopId: workShopId, workShop: workShop, ...rest }) => {
  const {  update } = useWorkShopContext();
  const navigate = useNavigate();

  if(workShop) {
    return (
      <Form {...rest} onSubmit={async (v) => {
        const workShop = new WorkShop(v.name, v.description, v.fullAddress, v.phone,Number(workShopId));
         
        await update(workShop);
        navigate('/workShops');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='name' label='Nome' value={workShop.name} defaultV={workShop.name}  />
          <J_TextField name='description' label='Descrição' value={workShop.description} defaultV={workShop.description}  />
          <J_TextField name='fullAddress' label='Endereço' value={workShop.fullAddress} defaultV={workShop.fullAddress}  />
          <J_TextField name='description' label='Contato' value={workShop.phone} defaultV={workShop.phone}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
