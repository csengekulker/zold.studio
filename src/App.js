import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom'
import { Home, About, Gallery, Booking } from "./pages"

function App() {
  return (
    <>
      <h1>TODO: Header component</h1>
      
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/us">About</a></li>
          <li><a href="/booking">Booking</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </nav>

      <Router>
        <Switch>
          <Route path='/'><Home /></Route>
          <Route path='/us'><About /></Route>
          <Route path='/booking'><Booking /></Route>
          <Route path='/gallery'><Gallery /></Route>
        </Switch>
      </Router>

    </>
    

  );
}

export default App;
