import { createTheme, Theme, experimental_sx as sx, PaletteOptions } from '@mui/material/styles';
import { darken, lighten } from '@mui/system';
import '@fontsource/montserrat/300.css';  // light
import '@fontsource/montserrat/400.css';  // regular
import '@fontsource/montserrat/500.css';  // medium
import '@fontsource/montserrat/700.css';  // bold

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 640,
      desktop: 1024,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#2CC295',  // Teal mint - Logo background 3
      light: '#00DF81', // Bright mint green
      dark: '#03624C',  // Dark green
    },
    secondary: {
      main: '#2dc1c1',  // Turquoise
      light: '#aacbc4', // Light Gray-Green
      dark: '#132d46',  // Dark Navy
    },
    background: {
      default: '#FFFFFF',   // Pure white page background
      paper: '#aacbc4',     // Secondary Light for card background
    },
    text: {
      primary: '#191e29',   // Dark navy
      secondary: '#707d7d', // Medium gray
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFFFF',
          color: '#191e29',
        },
        '#root': {
          backgroundColor: '#FFFFFF',
          minHeight: '100vh',
          width: '100%',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: '#F1F7F6', // Light paper background for modals
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#00DF81', // Primary Light
          color: '#00DF81',
          '&:hover': {
            borderColor: '#00DF81',
            backgroundColor: 'rgba(0, 223, 129, 0.04)',
          },
        },
        text: {
          color: '#03624C', // Primary Dark
          '&:hover': {
            backgroundColor: 'rgba(3, 98, 76, 0.04)',
          },
        },
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#2CC295',  // Teal mint - Logo background 3
      light: '#00DF81', // Bright mint green
      dark: '#03624C',  // Dark green
    },
    secondary: {
      main: '#2dc1c1',  // Turquoise
      light: '#aacbc4', // Light Gray-Green
      dark: '#132d46',  // Dark Navy
    },
    background: {
      default: '#191e29',   // Dark navy page background
      paper: '#132d46',     // Secondary Dark for card background
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#aacbc4', // Secondary Light
    },
  },
  typography: {
    ...baseTheme.typography,
    h1: {
      ...baseTheme.typography.h1,
      color: '#00DF81', // Primary Light color for h1 in dark mode
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#191e29',
          color: '#FFFFFF',
        },
        '#root': {
          backgroundColor: '#191e29',
          minHeight: '100vh',
          width: '100%',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: '#000000', // Black background for modals in dark mode - Logo background 2
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#00DF81', // Primary Light color
          color: '#191e29', // Dark background for contrast
          fontWeight: 700, // Make text bolder
          '&:hover': {
            backgroundColor: '#00DF81', // Slightly lighter or same color
            opacity: 0.9,
          },
        },
        text: {
          color: '#00DF81', // Primary Light
          fontWeight: 600, // Slightly bolder text
          '&:hover': {
            backgroundColor: 'rgba(0, 223, 129, 0.08)',
          },
        },
      },
    },
  },
});
