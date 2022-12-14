import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import useStyles from './useStyles'


function Header (props) {

    const { classes } = useStyles()

    return (
        <Box className={classes.box}>
            <Grid 
                container
                direction='row'
                alignItems='center'
                justifyContent="space-between">
                
                <Typography variant='body' className={classes.text}>Zöldpont Massage Studio</Typography>
                

                <Grid item>
                    <Button className={classes.button}>EN</Button>
                    <Button className={classes.button}>HU</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header
