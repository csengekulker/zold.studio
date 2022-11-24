import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

function Gallery () {

    const { classes } = useStyles()

    return <Container>
        <Title label='gallery'/>
    </Container>
}

export default Gallery
