import React from 'react'
import { Grid, Box } from '@mui/material'
import useStyles from './useStyles'

function Section (props) {

    const { children, direction } = props

    const classes = useStyles()

    return (
        <Box className={classes.section}>
            <Grid
                container
                direction={direction}
                justifyContent="space-evenly"
                alignItems="center"
                >
                {children}
            </Grid>
        </Box>
    )
}

export default Section 
