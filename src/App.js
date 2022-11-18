import {ThemeProvider, PaletteProvider } from './theme';
import { Header, Navbar, Footer } from './components'

// function App () {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Footer />
//     </div>
//   )
// }

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
      <Footer />
    </div>
  );
}

export default AppProvider;
