import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

function Services ()  {

    const { classes } = useStyles()

    return <Container>
        <Title label='services'/>
    </Container>
}

export default Services
