import React from 'react'
import { Container, Title, AboutCard, Section } from '../core/ui'
import useStyles from './useStyles'
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

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
function Map () {

    const { classes } = useStyles()

    return (
        <GoogleMap 
            zoom={13} 
            center={{lat: 47.494001224015136, lng: 19.1330574999186}}
            mapContainerClassName={classes.mapcontainer}>
        
            <Marker position={{lat: 47.494001224015136, lng: 19.1330574999186}} />
        </GoogleMap>
    )
}


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
