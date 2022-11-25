import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* TODO: page structure 

Grid row 

    Grid col 
        MainTitle
        CTA
    >

    IMAGE
>

Paragraph LEFT

Paragraph RIGHT

..


*/

function Home () {

    const { classes } = useStyles()

    return <Container>
        <Title label='Home'/>
    </Container>
}

export default Home
