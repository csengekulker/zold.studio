import React from 'react'
import { Button } from '@mui/material'
import useStyles from './useStyles'

function SmallNavButton(props) {

    const { 
        label
    } = props

    const { classes } = useStyles()

    return (
        <Button 
            label={label}
            className={classes.smallnavbutton}>
            {label}
        </Button>
    )
}

export default SmallNavButton
