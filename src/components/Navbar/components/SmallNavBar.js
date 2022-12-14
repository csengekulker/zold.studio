import React, { useState } from 'react'
import {
    Collapse, 
    Button,
    AppBar
} from '@mui/material'
import useStyles from './useStyles'
import SmallNavButton from './SmallNavButton'

function SmallNavBar() {

    const { classes } = useStyles()

    const [ isOpen, setIsOpen ] = useState(false)

    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AppBar position='sticky'>
          <Button
            sx={{backgroundColor: 'white'}}
            onClick={handleChange}
          >
            kisgomb
          </Button>
    
          <Collapse in={isOpen}>
            <SmallNavButton label='about' to='/us'/>
            <SmallNavButton label='booking' to='booking'/>
            <SmallNavButton label='services' to='/services'/>
            <SmallNavButton label='gallery' to='gallery'/>
          </Collapse>
        </AppBar>
    
      )
}

export default SmallNavBar
