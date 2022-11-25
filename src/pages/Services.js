import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* TODO: page structure

Title

<Section>

    mayb some paragraph on top

    MassageInfo LEFT
    
    MassageInfo RIGHT
    
    ...
</Section>


*/ 

function Services ()  {

    const { classes } = useStyles()

    return <Container>
        <Title label='Services'/>
    </Container>
}

export default Services
