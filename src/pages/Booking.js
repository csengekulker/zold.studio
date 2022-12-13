import React from 'react'
import { BookingForm, BookingInfo } from '../components'
import { Container, Title } from '../core/ui'
import useStyles from './useStyles'

/* TODO: page structure

<Section>
    subtitle (what to know before u book)
    
    paragraph
    paragraph..
</Section>

FORM

small text paragraph (?)

*/

function Booking () {

    const { classes } = useStyles()

    return <Container>
        <Title label='Booking'/>
        <BookingInfo />
        <BookingForm />
    </Container>
}

export default Booking
