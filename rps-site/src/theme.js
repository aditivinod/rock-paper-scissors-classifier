/*import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#15616D',
    },
    secondary: {
      main: '#78290F',
    },
    text: {
      primary: '#001524',
      secondary: '#78290F',
      disabled: '#FF7D00',
    },
    background: {
      default: '#FFECD1',
      paper: '#FFECD1',
    },
  },
};

export default themeOptions;*/
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 /* palette: {
    mode: 'light',
    primary: {
      main: '#15616D',
    },
    secondary: {
      main: '#78290F',
    },
    text: {
      primary: '#001524',
      secondary: '#78290F',
      disabled: '#FF7D00',
    },
    background: {
      default: '#FFECD1',
      paper: '#FFECD1',
    },
  },
});*/
  palette: {
    mode: 'light',
    primary: {
      main: '#15616D',
    },
    secondary: {
      main: '#CCC5B9',
    },
    background: {
      default: '#FFFCF2',
      paper: '#FFFCF2',
    },
    text: {
      primary: '#001524',
      secondary: '#FFFCF2',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#FFFCF2', // Change text color for active and inactive tabs
        },
        textColorPrimary: {
          color: '#FFFCF2', // Change text color for active tab
        },
        textColorSecondary: {
          color: '#FFFCF2', // Change text color for inactive tab
        },
      },
    },
  },
});

export default theme;
