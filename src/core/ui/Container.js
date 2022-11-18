import React from 'react'
import { Container as C } from '@mui/material'

// TODO: include useStyles
function Container (props) {

    const { children } = props

    return (
        <C maxWidth='lg' >
            {children}
        </C>
    )
}

export default Container
