import {ThemeProvider, PaletteProvider } from './theme';
import { Header, Navbar } from './components'
import Footer from './components/Footer';

function App () {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
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
