import React from 'react'
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import useStyles from './useStyles'

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

export default Map
