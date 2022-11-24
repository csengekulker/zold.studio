import React from 'react'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* page structure

<Section>
    subtitle (what to know before u book)
    
    paragraph
    paragraph..
</Section>

FORM

    1 dropdown (massage name)
    1 radiobuttongroup
    1 dropdown (appointments)

    input STRING R 
    input DATE R 
    input STRING (possible redundance) R 
    input STRING R 
    input STRING R

    input STRING

    (R - REQUIRED)

    1 checkbox 

    1 submit button

small text paragraph (?)

*/

function Booking () {

    const { classes } = useStyles()

    return <Container>
        <Title label='booking'/>
    </Container>
}

export default Booking
