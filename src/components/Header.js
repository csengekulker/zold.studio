import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
// import { makeStyles, useTheme } from '@material-ui/styles'
import useStyles from './useStyles'


function Header (props) {

    const { classes } = useStyles()

    return (
        <Box style={{ backgroundColor: 'blue'}}>
            <AppBar position='static' className={classes.className}>
                <Typography>zold pont studio</Typography>
            </AppBar>
        </Box>
    )
}

export default Header
