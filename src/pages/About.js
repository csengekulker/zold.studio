import React from 'react'
import { Container, Title, AboutCard, Section } from '../core/ui'
import { Map } from '../components'
import useStyles from './useStyles'
import { useLoadScript } from '@react-google-maps/api'


/* TODO: page structure 

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
    <BusinessCard />
    ContactForm
</Section>


*/

function About () {

    const { classes } = useStyles()

    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.PUBLIC_API_KEY})

    return <Container>
        <Title label='About'/>
        <Section>
            <AboutCard />
            <AboutCard />
            <AboutCard />
        </Section>
        <Section>
            <AboutCard />
            { !isLoaded ? <div>Loading..</div> : <Map />}
        </Section>
    </Container>
}

export default About
