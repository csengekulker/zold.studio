import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
 
function Header (props) {

    return (
        <Box style={{ backgroundColor: 'blue'}}>
            <AppBar position='static'>
                <Typography>zold pont studio</Typography>
            </AppBar>
        </Box>
    )
}

export default Header
