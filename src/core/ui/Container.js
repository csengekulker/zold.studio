import React from 'react'
import { Container as C } from '@mui/material'

function Container (props) {

    const { children } = props

    return (
        <C maxWidth='sm'>
            {children}
        </C>
    )
}

export default Container
