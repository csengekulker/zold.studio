import React from 'react'
import { Container as C } from '@mui/material'
import useStyles from './useStyles'

function Container (props) {

    const { children } = props

    const { classes } = useStyles()

    return (
        <C className={classes.container}>
            {children}
        </C>
    )
}

export default Container
