import React,{ useState, forwardRef } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import config from '../../config';

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 60px)', 
  margin: 'auto' 
}

const Map = forwardRef(({ children }, ref) => {

  const [viewport, setViewPort ] = useState({
    width: '100%',
    height: '100%',
    // height: 400,
    latitude: 13.375739,
    longitude: 52.509352,
    pitch: 47.5,
    // zoom: 2
    zoom: 5,

  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div id='map' style={containerStyle}>
      <MapGL
        ref={ref}
        {...viewport}
        mapboxApiAccessToken={config.token}
        mapStyle="mapbox://styles/tuba-kasap/cjxyyrvwr052p1crzfxpiu7iw/draft"
        onViewportChange={_onViewportChange}
      >
        {children}
      </MapGL>
    </div>
  )
})

export default Map