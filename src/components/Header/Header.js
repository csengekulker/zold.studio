import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import useStyles from './useStyles'
import { LocaleContext } from '../../core/locale'

// FIXME: setLanguage is not defined

function Header(props) {

  const { classes } = useStyles()

  return (
    <LocaleContext.Consumer>
      {(context) => {

        return (
          <Box className={classes.box}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justifyContent="space-between">

              <Typography variant='body' className={classes.text}>Zöldpont Massage Studio</Typography>

              <Grid item>
                <Button
                  onClick={() => { setLanguage('en') }}
                  className={classes.button}>EN</Button>
                <Button
                  onClick={() => { setLanguage('hu') }}
                  className={classes.button}>HU</Button>
              </Grid>
            </Grid>
          </Box>
        )
      }}

    </LocaleContext.Consumer>
  )
}

export default Header
