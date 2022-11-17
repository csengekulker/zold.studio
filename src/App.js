import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home, About, Gallery, Booking } from "./pages"
import { Header } from './components'

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
          <div>
          
              <button>
                <Link to='/'>Home</Link>
              </button>
              <li><Link to='/us'>About</Link></li>
              <li><Link to='/booking'>Booking</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
            
          
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/us'><About /></Route>
            <Route path='/booking'><Booking /></Route>
            <Route path='/gallery'><Gallery /></Route>
          </Switch>
          </div>
          
      </BrowserRouter>

    </div>
    

  );
}

export default App;
