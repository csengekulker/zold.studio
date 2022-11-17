import { Typography } from '@mui/material'
import React from 'react'

function Title (props) {

    const { text } = props

    return (
        <Typography variant='h3' mb={2}>
            {text}
        </Typography>
    )
}

export default Title
