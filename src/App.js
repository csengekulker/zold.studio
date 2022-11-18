import {ThemeProvider, PaletteProvider } from './theme';
import { Header, Navbar } from './components'

function App () {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  )
}

export function ProviderGroup (props) {
  const { children } = props

  return (
    <PaletteProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </PaletteProvider>
  )
}

function AppProvider(props) {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
}

export default AppProvider;
