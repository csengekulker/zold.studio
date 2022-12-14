import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './useStyles'

function SmallNavButton(props) {

    const { 
        label,
        to
    } = props

    const { classes } = useStyles()

    return (
        <Link to={to} className={classes.link}>
            <Button
                label={label}
                className={classes.smallnavbutton}>
                {label}
            </Button>
        </Link>
    )
}

export default SmallNavButton
