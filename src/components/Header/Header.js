import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import useStyles from './useStyles'


function Header (props) {

    const { classes } = useStyles()

    return (
        <Box className={classes.box}>
            <Typography className={classes.text}>Zöld</Typography>
        </Box>
    )
}

export default Header
