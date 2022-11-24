import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

function Home () {

    const { classes } = useStyles()

    return <Container>
        <Title label='home'/>
    </Container>
}

export default Home
