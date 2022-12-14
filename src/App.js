import moment from 'moment'

import { ThemeProvider, PaletteProvider } from './theme'
import { Header, Navbar, Footer } from './components'
import LocaleProvider from './core/locale/LocaleProvider'
import { CssBaseline } from '@mui/material'
require('moment/locale/hu')
moment.locale('hu')

export function ProviderGroup(props) {
  const { children } = props

  return (
    <PaletteProvider>
      <ThemeProvider>
        <CssBaseline>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </CssBaseline>
      </ThemeProvider>
    </PaletteProvider>
  )
}

function AppProvider(props) {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default AppProvider;
