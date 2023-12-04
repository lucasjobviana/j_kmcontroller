import {  createTheme } from '@mui/material';
import { orange, green } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: green[400],
      dark: green[600],
      light: green[200],
      contrastText: '#924924',
    },
    secondary: {
      main: orange[400],
      dark: orange[600],
      light: orange[200],
      contrastText: '#924924',
    },
    background: {
      paper: '#fff  ',
      default: '#fff',
    },
  },
});