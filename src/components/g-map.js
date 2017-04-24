import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const EventMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={15} 
    defaultCenter={{lat: -25.578965,lng: 28.071592}}
    defaultOptions={{
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false
    }}>
      <Marker 
        position={{lat: -25.578965,lng: 28.071592}}
      />
    </GoogleMap>
  )
)

export default class EventMapComponent extends Component {
  render() {
    return (
      <EventMap
        containerElement={< div style = {{height: '400px', borderTopLeftRadius:'20px', borderTopRightRadius:'20px', overflow:'hidden'}}/>}
        mapElement={< div style = {{height: '100%'}} > </div>}/>
    )
  }
}