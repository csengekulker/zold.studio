import React from 'react'
import { Button } from '@mui/material'

function NavButton(props) {
    const { children } = props 

    return (
        <Button variant='contained' color='success' style={{margin: '10px'}}>
            {children}
        </Button>
    )
}

export default NavButton 
