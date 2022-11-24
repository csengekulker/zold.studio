import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* page structure

to be discussed, designed

*/ 

function Gallery () {

    const { classes } = useStyles()

    return <Container>
        <Title label='gallery'/>
    </Container>
}

export default Gallery
