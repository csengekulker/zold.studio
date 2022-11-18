import { Typography, Divider } from '@mui/material'
import React from 'react'

// TODO: include useStyles, titlestyle: textalign center mb={2}

function Title (props) {

    const { label } = props

    return (
        <>
            <Typography variant='h3' label={label}>
                {label}
            </Typography>
            <Divider>
                divider
            </Divider>
        </>
    )
}

export default Title
