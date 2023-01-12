import React from 'react'
import { Box, AppBar, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material'
import { Home, About, Gallery, Booking, Services } from "../../pages"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { NavButton, SmallNavBar } from './components'
import useStyles from './useStyles'
import image from '../../static/img/green-circle.png'


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
                <NavButton to='/'>
                <Avatar 
              alt='ZOLDPONT' 
              src={image}
              className={classes.cardmedia}/>
                </NavButton>
              </Grid>

              <Grid item>
                <NavButton label='about' to='/us'/> 
                <NavButton label='booking' to='/booking'/> 
                <NavButton label='services' to='/services'/> 
                <NavButton label='gallery' to='/gallery'/> 
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
