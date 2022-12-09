import React from 'react'
import usePalette from './usePalette'
import { ThemeProvider as MuiThemeProvider, 
  createTheme, 
  responsiveFontSizes, 
StyledEngineProvider,
adaptV4Theme } from '@mui/material/styles';

// import { createMuiTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

function ThemeProvider (props) {
  const { children } = props

  const { palette, type } = usePalette()

  let theme = {
    palette: { ...palette, type },
    shape: {
      borderRadius: 2
    },
    typography: {
      h1: {
        color: palette.primary.dark,
        fontSize: '2rem',
        fontWeight: '400'
      },
      h2: {
        color: palette.primary.dark,
        fontSize: '1.545rem'
      },
      h3: {
        color: palette.primary.dark,
        fontSize: '0.955rem'
      },
      h4: {
        color: palette.primary.dark,
        fontSize: '0.955rem'
      },
      h5: {
        color: palette.primary.dark,
        fontSize: '1.545rem'
      },
      body2: {
        fontSize: '0.955rem'
      }
    }
  }

  theme = createTheme(adaptV4Theme(theme))
  theme = responsiveFontSizes(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
