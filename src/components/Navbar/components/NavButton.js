import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './useStyles'

function NavButton(props) {
    const { label, to, children } = props 
 
    const { classes } = useStyles()

    // <Link to='/us' className={classes.link}>
    //               <NavButton label='ABOUT'/>
    //             </Link>

    return (
        <Link to={to} className={classes.link}>
            <Button
                className={classes.navbutton}
                variant='contained'
                label={label}>
                {label}
                {children}
            </Button>
        </Link>
    )
}

export default NavButton 
