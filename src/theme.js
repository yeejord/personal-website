import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e3b17',
      light: '#1a5a28',
      dark: '#082310',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#646cff',
    },
  },
});

export default theme;