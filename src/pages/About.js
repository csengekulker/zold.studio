import { CardContent, CardMedia, Card, Typography, CardActionArea } from '@mui/material'
import React from 'react'
import { Container, Title, AboutCard } from '../core/ui'
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
        <AboutCard />
        <AboutCard />
        <AboutCard />
    </Container>
}

export default About
