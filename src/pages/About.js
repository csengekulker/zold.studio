import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

function About () {

    const { classes } = useStyles()

    return <Container>
        <Title label='About'>About</Title>
    </Container>
}

export default About
