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
            <SmallNavButton label='label'/>
            <SmallNavButton label='label' />
            <SmallNavButton label='label' />
            <SmallNavButton label='label' />
          </Collapse>
        </AppBar>
    
      )
}

export default SmallNavBar
