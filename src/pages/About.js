import React from 'react'
import { Container, Title, Section, } from '../core/ui'
import { Map, BusinessCard, AboutCard } from '../components'
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

function About() {

    const { classes } = useStyles()

    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.PUBLIC_API_KEY })

    return <Container>
        <Title label='About' />
        <Section direction='row'>
            <AboutCard label='what' />
            <AboutCard label='who' />
            <AboutCard label='why' />
        </Section>
        <Section direction='row'>
            <AboutCard label='where' />
            {!isLoaded ? <div>Loading..</div> : <Map />}
        </Section>
        <Section direction='column'>
            <h2>Kapcsolatfelvétel</h2>
            <p>ure Latin words, consectetur, from a Lorem Ipsum 
                passage, and going through the cites 
                of the word in classical literature, disco
                vered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33</p>
            <BusinessCard />
        </Section>
    </Container>
}

export default About
