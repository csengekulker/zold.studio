import React from 'react'
import { Box, AppBar, Toolbar, Button } from '@mui/material'
import { Home, About, Gallery, Booking } from "../pages"

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


function Navbar () {
    return (
      <Box sx={{ flexGrow: 1 }}>
      

        <BrowserRouter>

        <AppBar position="static" style={{ backgroundColor: 'green'}}>
        <Toolbar>
          
              
          <Link to='/'>
            <Button>HOME</Button>
          </Link>
          <Link to='/us'>
            <Button>ABOUT</Button>
          </Link>
          <Link to='/booking'>
            <Button>BOOKING</Button>
          </Link>
          <Link to='/gallery'>
            <Button>GALLERY</Button>
          </Link>
              
       

          </Toolbar>
      </AppBar>

      <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/us'><About /></Route>
            <Route path='/booking'><Booking /></Route>
            <Route path='/gallery'><Gallery /></Route>
          </Switch>
  
          
          
      </BrowserRouter>
          
          </Box>
    )
}

export default Navbar
