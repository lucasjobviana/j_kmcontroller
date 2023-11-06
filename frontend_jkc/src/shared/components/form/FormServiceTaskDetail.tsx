import React from 'react';
import { IReactRCProps } from '../../tools';
import { Form } from '@unform/web';
import { J_TextField } from './text-field';
import { Box, Button } from '@mui/material';
import { useServiceTaskContext } from '../../contexts';
import { ServiceTask } from '../../Entities';
import { useNavigate } from 'react-router-dom';

export interface IFormServiceTaskDetailProps extends IReactRCProps {
  serviceTaskId?: string;
  serviceTask?: ServiceTask;
}

export const FormServiceTaskDetail: React.FC<IFormServiceTaskDetailProps> = ({ children, serviceTaskId, serviceTask: serviceTask, ...rest }) => {
  const { update } = useServiceTaskContext(); 
  const navigate = useNavigate();

  if(serviceTask) {
    return (
      <Form {...rest} onSubmit={async (v) => {
        const place = new ServiceTask(v.name, v.description,Number(serviceTaskId));
         
        await update(place);
        navigate('/services');
      }} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1 }}>
          <J_TextField name='name' label='Nome' value={serviceTask.name} defaultV={serviceTask.name}  />
          <J_TextField name='description' label='Descrição' value={serviceTask.description} defaultV={serviceTask.description}  />
          <Button variant='outlined' type='submit'>Salvar</Button>
          {children}
        </Box>
      </Form>
    );
  }
};
