import React from 'react'
import { Box, AppBar, Toolbar, Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import { Home, About, Gallery, Booking, Services } from "../../pages"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { NavButton, SmallNavBar } from './components'
import useStyles from './useStyles'


function Navbar() {

  // TODO: collapse smallscreen (useMediaQuery)

  const { classes } = useStyles()

  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box className={classes.box}>

      <BrowserRouter>

        <AppBar
          position="sticky"
          className={classes.appbar}>
        

            {
              matches ? 

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

                <Link to='/services' className={classes.link}>
                <NavButton label='SERVICES'/>
                </Link>
                <Link to='/gallery' className={classes.link}>
                <NavButton label='GALLERY'/>
                </Link>

              </Grid>

            </Grid>

            : 

            <SmallNavBar />


            }

            

          

        </AppBar>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/us'><About /></Route>
          <Route path='/booking'><Booking /></Route>
          <Route path='/services'><Services /></Route>
          <Route path='/gallery'><Gallery /></Route>
        </Switch>

      </BrowserRouter>

    </Box>
  )


}

export default Navbar
