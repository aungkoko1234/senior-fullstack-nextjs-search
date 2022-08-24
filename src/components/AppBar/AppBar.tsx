import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import AdbIcon from '@mui/icons-material/Adb'
import React from 'react'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { CameraAltRounded } from '@mui/icons-material'

interface AppBarProps {
  title?: string
  isDarkTheme?: boolean
  onChangeTheme: () => void
}
const ResponsiveAppBar: React.FC<AppBarProps> = ({
  title = 'Photo App',
  isDarkTheme = false,
  onChangeTheme,
}) => {
  return (
    <AppBar position="static" data-testid="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, flexGrow: 1 }}>
            <CameraAltRounded />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1 }}>
            <AdbIcon />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, right: 0 }} data-testid="theme-switch">
            <Tooltip title="Open settings">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={isDarkTheme} onChange={onChangeTheme} />
                  }
                  label="Dark Theme"
                />
              </FormGroup>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
