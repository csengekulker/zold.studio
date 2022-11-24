import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

function Booking () {

    const { classes } = useStyles()

    return <Container>
        <Title label='booking'/>
    </Container>
}

export default Booking
