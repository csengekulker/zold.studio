import React from 'react'
import {
    Typography,
    Grid, 
    Box,
    Avatar,
    useMediaQuery,
    useTheme
} from '@mui/material'
import image from '../../static/img/green-circle.png'
import useStyles from './useStyles'
import SmallMassageCard from './SmallMassageCard'

function MassageCard (props) {

    const {
        direction,
        label,
        children
    } = props

    const { classes } = useStyles()

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (

      matches ? 
      <Grid 
      container
      direction={direction}
      alignItems='center'
      sm={12}
      className={classes.box}>
    
              <Grid item sm={2}>
               
                <Avatar 
              alt='ZOLDPONT' 
              src={image}
              className={classes.cardmedia}/>
              
              </Grid>
            
              <Grid
                className={classes.info}
                container
                sm={10}
                direction='column'
                alignItems={direction == 'row' ? 'flex-start' : 'flex-end'}>
                  <Typography variant='h4'>{label}</Typography>
                  <Typography 
                    align={direction == 'row' ? 'left' : 'right'}
                    >In this article we will look at how to dynamically update the styling applied to your elements by manipulating your CSS at runtime using JavaScript.n this article we will look at how to dynamically update the styling applied to your elements by manipulating your CSS at runtime using JavaScript.n this article we will look at how to dynamically update the styling applied to your elements by manipulating your CSS at runtime using JavaScript. </Typography>
                  <Grid container direction='row' justifyContent='space-around'>
                    
                      <Typography>30p | 60p | 90p</Typography>
                      <Typography>1000FT | 2000FT | 3000FT</Typography>
                
                  </Grid>
              </Grid>
          
            

        
      </Grid>

      : 

      <SmallMassageCard/>
    )
}

export default MassageCard
