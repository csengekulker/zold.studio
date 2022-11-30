import React from 'react'
import { Container, Title, AboutCard, Section, BusinessCard } from '../core/ui'
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
        <Section direction='row'>
            <AboutCard />
            <AboutCard />
            <AboutCard />
        </Section>
        <Section direction='row'>
            <AboutCard />
            { !isLoaded ? <div>Loading..</div> : <Map />}
        </Section>
        <Section direction='column'>
            <h2>Kapcsolatfelvétel</h2>
            <p>vegyefel a Kapcsolatfelvétel 
                kuldjon itt uzenetet vagy amit akar</p>
            <BusinessCard />
        </Section>
    </Container>
}

export default About
