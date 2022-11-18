import React from 'react'
import { Box, AppBar, Toolbar, Button, Grid } from '@mui/material'
import { Home, About, Gallery, Booking } from "../../pages"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import NavButton from './NavButton'
import useStyles from './useStyles'

function Navbar() {

  const { classes } = useStyles()

  return (
    <Box className={classes.box}>

      <BrowserRouter>

        <AppBar
          position="static"
          className={classes.appbar}>
          <Toolbar>

            <Grid 
              container
              direction='row'
              justifyContent='space-between'
            >
              <Grid item>
                <Link to='/' className={classes.link}>
                  <NavButton label='HOME'/></Link>
              </Grid>

              <Grid item>

                <Link to='/us' className={classes.link}>
                <NavButton label='ABOUT'/>
                </Link>

                <Link to='/booking' className={classes.link}>
                <NavButton label='BOOKING'/>
                </Link>

                <Link to='/gallery' className={classes.link}>
                <NavButton label='GALLERY'/>
                </Link>

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
