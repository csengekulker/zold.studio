import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* page structure

Title

<Section>
    MassageInfo LEFT
    
    MassageInfo RIGHT
    
    ...
</Section>


*/ 

function Services ()  {

    const { classes } = useStyles()

    return <Container>
        <Title label='services'/>
    </Container>
}

export default Services
