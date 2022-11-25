import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import image from './free.jpg'
import useStyles from './useStyles'

function AboutCard () {

    const { classes } = useStyles()

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height='140'
            src={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
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
