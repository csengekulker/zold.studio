import React from 'react'
import { Button } from '@mui/material'
import useStyles from './useStyles'

function NavButton(props) {
    const { label } = props 
 
    const { classes } = useStyles()

    return (
        <Button 
            className={classes.navbutton} 
            variant='contained'
            label={label}>
            {label}
        </Button>
    )
}

export default NavButton 
