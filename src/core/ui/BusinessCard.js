import { Card, CardContent, Typography, Avatar, CardMedia, Grid } from '@mui/material'
import React from 'react'
import image from '../../static/img/free.jpg'
import useStyles from './useStyles'

function BusinessCard (props) {

    // TODO: grid layouting & positioning RESPONSIVE

    const { classes } = useStyles()

    return (
        <Card className={classes.businesscard}>

        <Grid container direction='row'>
            <CardMedia

            alt="green iguana"
          >
            <Avatar 
              alt='ZOLDPONT' 
              src={image}
              className={classes.cardmedia}/>
          </CardMedia>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              névjegykártya
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles
            </Typography>
          </CardContent>
        </Grid>
          
      </Card>
    )
}

export default BusinessCard
