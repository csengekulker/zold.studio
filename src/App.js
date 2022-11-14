import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home, About, Gallery, Booking } from "./pages"

function App() {
  return (
    <>
      <h1>TODO: Header component</h1>
      <h1>TODO: Header component</h1>

      <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/us'>About</Link></li>
              <li><Link to='/booking'>Booking</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link reloadDocument>Reload</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' component={Home}/>
            <Route path='/us' component={About}/>
            <Route path='/booking' component={Booking}/>
            <Route path='/gallery' component={Gallery}/>
          </Switch>
          
      </BrowserRouter>

    </>
    

  );
}

export default App;
