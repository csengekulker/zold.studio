import React from 'react'
import { Container, Title, AboutCard, Section } from '../core/ui'
import useStyles from './useStyles'

/* page structure 

    Title

<Section>
    Card
    Card
    Card
</Section>

<Section>
    Card
    Map
</Section>

<Section>
    <Card (no img)>
        <BusinessCard />
    </Card>
    
    ContactForm
</Section>


*/

function About () {

    const { classes } = useStyles()

    return <Container>
        <Title label='About'/>
        <Section className={classes.section}>
            <AboutCard />
            <AboutCard />
            <AboutCard />
        </Section>
    </Container>
}

export default About
