import React, {  createRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import Map from '.';


class MapPage extends React.Component {

  mapRef = createRef();
  markers = null

  componentDidMount = () => {
    console.log(this.mapRef)
    axios.get('/api/locations').then(response => {
      console.log({ response })
      console.log(this.mapRef)
      this.markers = response.data.map(place => {
        const { coordinates } = place.location
        return (
          <Marker latitude={coordinates.latitude}
            longitude={coordinates.latitude}>
              <Popup><div class="popup">${place.name}</div></Popup>
          </Marker>
        )
      })
    })
    this.addMapControls()
  }

  addMapControls = () => {
    if (!this.mapRef.current) return

    const map = this.mapRef.current.getMap()
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    map.addControl(geolocate, 'bottom-right');
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }), 'top-left');

    map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }), 'top-left');

  }

  render() {
    return (
      <Map ref={this.mapRef}>
        {this.markers}         
      </Map>
    )
  }
}

export default MapPage;
