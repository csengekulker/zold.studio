import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home, About, Gallery, Booking } from "./pages"
import { Header, Navbar } from './components'
import Container from './core/ui/Container';
import { Button } from '@mui/material'

function App() {
  return (
    <div>
      <Header />
      <Navbar />



    </div>
    

  );
}

export default App;
