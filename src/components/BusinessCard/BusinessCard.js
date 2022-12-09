import { Card, CardContent, Typography, Avatar, CardMedia, Grid } from '@mui/material'
import React from 'react'
import image from '../../static/img/free.jpg'
import useStyles from './useStyles'

function BusinessCard (props) {

    // TODO: grid layouting & positioning RESPONSIVE
    // FIXME: small businesscard on breakpoints

    const { classes } = useStyles()

    return (
        <Card className={classes.businesscard}>

        <Grid container direction='row'>
            <CardMedia alt='card'>
            <Avatar 
              alt='ZOLDPONT' 
              src={image}
              className={classes.cardmedia}/>
          </CardMedia>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              névjegykártya
            </Typography>
            <Typography variant="body1" color="text.secondary">
              név
            </Typography>
            <Typography variant="body1" color="text.secondary">
              contactinfo
            </Typography>
            <Typography variant="body1" color="text.secondary">
              harmadiksor
            </Typography>
          </CardContent>
        </Grid>
          
      </Card>
    )
}

export default BusinessCard
