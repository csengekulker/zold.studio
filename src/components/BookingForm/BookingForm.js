import React from 'react'
import { Button, Menu, MenuItem, Box } from '@mui/material'
import { Section } from '../../core/ui'
import useStyles from './useStyles'

// TODO: structure

/* 

    1 dropdown (massage name)
    1 radiobuttongroup
    1 dropdown (appointments)

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
        <Box className={classes.form}>
          
        </Box>
    )
    

}  

export default BookingForm
