import React from 'react'
import { Grid, Typography, Avatar } from '@mui/material'
import { Section } from '../../core/ui'
import useStyles from './useStyles'
import image from '../../static/img/green-circle.png'

// TODO: structure

/* 

    1 collapse
        options (massage name)
    1 radiobuttongroup

    1 collapse
        options (appointments)

    input STRING R 
    input DATE R 
    input STRING (possible redundance) R 
    input STRING R 
    input STRING R

    input STRING

    (R - REQUIRED)

    1 checkbox 

    1 submit button
*/

function BookingForm () {

    const { classes } = useStyles()

    return (
        <Grid container direction='column' className={classes.form}>

            <Grid item >
                <Grid className={classes.step} container justifyContent='space-between' alignItems='center'>
                    <Avatar src={image}/>
                    <Typography>masszazs tipus</Typography>
                </Grid>
            </Grid>
            <Grid item >
                <Grid className={classes.step} container justifyContent='space-between' alignItems='center'>
                    <Avatar src={image}/>
                    <Typography>masszazs idotartam</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
    

}  

export default BookingForm
