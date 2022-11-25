import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* TODO: page structure

to be discussed, designed

*/ 

function Gallery () {

    const { classes } = useStyles()

    return <Container>
        <Title label='Gallery'/>
    </Container>
}

export default Gallery
