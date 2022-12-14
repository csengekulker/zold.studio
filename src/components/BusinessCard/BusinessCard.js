import { Card, CardContent, Typography, Avatar, CardMedia, Grid } from '@mui/material'
import React from 'react'
import image from '../../static/img/green-circle.png'
import useStyles from './useStyles'

function BusinessCard (props) {

    // TODO: grid layouting & positioning RESPONSIVE
    // FIXME: small businesscard on breakpoints

    const { classes } = useStyles()

    return (
        <Card className={classes.businesscard}>

        <Grid container direction='row' justifyContent='space-evenly'>
            <CardMedia alt='card'>
            <Avatar 
              alt='ZOLDPONT' 
              src={image}
              className={classes.cardmedia}/>
          </CardMedia>
          
          <CardContent>
            <Grid container direction='column' justifyContent='flex-start' alignItems='center'>
              <Typography gutterBottom variant="h5" component="div">
                John Doe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                contactinfo
              </Typography>
              <Typography variant="body1" color="text.secondary">
                harmadiksor
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
          
      </Card>
    )
}

export default BusinessCard
