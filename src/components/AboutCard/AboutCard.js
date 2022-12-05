import { Card, CardMedia, CardContent, Typography, Avatar } from '@mui/material'
import React from 'react'
import image from '../../static/img/free.jpg'
import useStyles from './usestyles'

function AboutCard (props) {

  const { label } = props

  const { classes } = useStyles()

  return (
      <Card className={classes.card}>
        <CardMedia
          
          // component="img"
          // height='140'
          // src={image}
          alt="green iguana"
        >
          <Avatar 
            alt='ZOLDPONT' 
            src={image}
            className={classes.cardmedia}/>
        </CardMedia>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
    </Card>
  )

}

export default AboutCard
