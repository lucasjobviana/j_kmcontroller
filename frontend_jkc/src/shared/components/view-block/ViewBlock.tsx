import React from 'react';
import { IReactRCProps } from '../../tools';
import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Add, Close, Delete, Edit, Minimize, MinimizeOutlined, MinimizeRounded, MinimizeTwoTone, MinorCrash } from '@mui/icons-material';
// import { J_ToolBar } from '..';

export const ViewBlock: React.FC<IReactRCProps> = function ({children}) {
  const theme = useTheme();
  const isBiggerThanSM = !useMediaQuery(theme.breakpoints.down('sm'));
  const isBiggerThanMD = !useMediaQuery(theme.breakpoints.down('md'));
 
  return(
    // <Box paddingX={2} display='flex' flexDirection='column'  bgcolor={'red'} gap={2} width={'100'} >
    <Box component={Paper} variant='outlined' paddingX={1}  display='flex' flexDirection='column' bgcolor={theme.palette.background.paper}  color={theme.palette.text.primary} gap={2} width={'100'} >
      <Box display={'flex'} height={
        isBiggerThanSM ? isBiggerThanMD ? theme.spacing(6) : theme.spacing(4) : theme.spacing(2)
      }  justifyContent={'space-between'} alignItems={'center'} gap={1}  >
         
        <Typography
          component='h1'
          flex={1}
          textAlign={'center'}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          variant={isBiggerThanSM ? 'h4' : 'h5'}
        >
          {'title'}
        </Typography>

        <Button  variant='contained' color='primary'><Add /></Button>
        <Button  variant='contained' color='primary'><Edit /></Button>
        <Button  variant='contained' color='primary'><Delete /></Button>
        <Button  variant='contained' color='primary'><Minimize /></Button>
        <Button  variant='contained' color='primary'><MinorCrash /></Button>
        <Button  variant='contained' color='primary'><Close /></Button>

      
      </Box>
      <Box flex={1}  >{children}</Box>
    </Box>
  );
};