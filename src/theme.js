import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#5ce1e6',
        dark: '#90caf9',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f3940c',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  export default theme;