import { Typography, Divider } from '@mui/material'
import React from 'react'
import useStyles from './useStyles'

function Title (props) {

    const { label } = props

    const { classes } = useStyles()

    return (
        <>
            <Typography 
                className={classes.label}
                variant='h3' 
                label={label}>
                {label}
            </Typography>
            <Divider className={classes.divider}/>
        </>
    )
}

export default Title
