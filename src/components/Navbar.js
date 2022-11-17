import React from 'react'
import { Box, AppBar, Toolbar, Button, Grid } from '@mui/material'
import { Home, About, Gallery, Booking } from "../pages"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { NavButton } from '../core/ui'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <BrowserRouter>

        <AppBar
          position="static"
          // style={{ backgroundColor: 'green' }}
        >
          <Toolbar>

            <Grid 
              container
              direction='row'
              justifyContent='space-between'
            >
              <Grid item>
                <Link to='/' style={{textDecoration: 'none'}}>
                  <NavButton>HOME</NavButton></Link>
              </Grid>

              <Grid item>
                <Link to='/us' style={{textDecoration: 'none'}}>
                  <NavButton>ABOUT</NavButton></Link>
                <Link to='/booking' style={{textDecoration: 'none'}}>
                  <NavButton>BOOKING</NavButton></Link>
                <Link to='/gallery' style={{textDecoration: 'none'}}>
                  <NavButton>GALLERY</NavButton></Link>
              </Grid>

            </Grid>

            
            

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
