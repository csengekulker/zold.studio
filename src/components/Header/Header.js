import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import useStyles from './useStyles'


function Header (props) {

    const { classes } = useStyles()

    return (
        <Box style={{ backgroundColor: 'blue'}}>
            <AppBar position='static' className={classes.className}>
                <Typography>Zöld</Typography>
            </AppBar>
        </Box>
    )
}

export default Header
