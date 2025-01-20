import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './theme/ThemeProvider'
import { 
  Typography, 
  Box, 
  Button, 
  Paper, 
  Grid, 
  useTheme, 
  IconButton, 
  Container,
  Stack
} from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import { useThemeContext } from './theme/ThemeProvider'

const ColorBox = ({ color, label }: { color: string; label: string }) => {
  const theme = useTheme()
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          width: '100%',
          height: 60,
          bgcolor: color,
          borderRadius: 1,
          mb: 1,
          border: theme => `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
        }}
      />
      <Typography variant="caption" display="block">
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {color}
      </Typography>
    </Box>
  )
}

function App() {
  const { toggleTheme, mode } = useThemeContext()
  const theme = useTheme()

  const colors = {
    light: {
      primary: [
        { color: '#2CC295', label: 'Primary Main' },
        { color: '#00DF81', label: 'Primary Light' },
        { color: '#03624C', label: 'Primary Dark' },
      ],
      secondary: [
        { color: '#2dc1c1', label: 'Secondary Main' },
        { color: '#132d46', label: 'Secondary Dark' },
        { color: '#5c6363', label: 'Grey 600' },
        { color: '#aacbc4', label: 'Secondary Light' },
      ],
    },
    dark: {
      primary: [
        { color: '#2CC295', label: 'Primary Main' },
        { color: '#00DF81', label: 'Primary Light' },
        { color: '#03624C', label: 'Primary Dark' },
      ],
      secondary: [
        { color: '#2dc1c1', label: 'Secondary Main' },
        { color: '#132d46', label: 'Secondary Dark' },
        { color: '#aacbc4', label: 'Secondary Light' },
      ],
    },
  }

  const currentColors = colors[mode]

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 4,
        transition: 'background-color 0.3s ease'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h1" gutterBottom sx={{ mb: 0 }}>
            Design System Preview
          </Typography>
          <IconButton 
            onClick={toggleTheme}
            sx={{ 
              p: 1.5,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'action.hover',
              }
            }}
          >
            {mode === 'light' ? <DarkMode /> : <LightMode sx={{ color: '#00DF81' }} />}
          </IconButton>
        </Box>

        {/* Color Palette Section */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Background Colors */}
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              Theme Colors
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ColorBox 
                  color={theme.palette.background.default} 
                  label="Background Default" 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <ColorBox 
                  color={theme.palette.background.paper} 
                  label="Background Paper" 
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Primary Colors */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Primary Colors
            </Typography>
            {currentColors.primary.map((color, index) => (
              <ColorBox key={index} color={color.color} label={color.label} />
            ))}
          </Grid>

          {/* Secondary Colors */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Secondary Colors
            </Typography>
            {currentColors.secondary.map((color, index) => (
              <ColorBox key={index} color={color.color} label={color.label} />
            ))}
          </Grid>
        </Grid>

        {/* Card Component Preview */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 4, 
            borderRadius: 2,
            bgcolor: 'background.paper',
            mb: 4
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h3" gutterBottom>
              Card Header
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Subheader Copy Explaining Context
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
              >
                Primary Action
              </Button>
              <Button 
                variant="text"
                color="primary"
                size="large"
              >
                Secondary Action
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default App
