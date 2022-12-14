import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './useStyles'

function CTAButton (props) {

    const { action, to } = props

    const { classes } = useStyles()

    return (
        <Link to={to} className={classes.link}>
            <Button className={classes.button}>
                {action}
            </Button>
        </Link>
    )
}

export default CTAButton
