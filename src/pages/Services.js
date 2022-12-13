import React from 'react'
import { MassageCard } from '../components'
import { Container, Title, Section } from '../core/ui'
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
        <Section direction='column'>
            <MassageCard label='Massage 1' direction='row'/>
            <MassageCard label='Massage 2' direction='row-reverse'/>
            <MassageCard label='Massage 3' direction='row'/>
            <MassageCard label='Massage 4' direction='row-reverse'/>
        </Section>
    </Container>
}

export default Services
