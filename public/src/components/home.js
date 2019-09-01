import React from 'react';
import { Link } from 'react-router-dom';
import Map from './map/';

class Home extends React.Component {

  // state = {
  //   width: 400,
  //   height: 400,
  //   latitude: 13.375739,
  //   longitude: 52.509352,
  //   zoom: 14.5,
  //   pitch: 47.5,
  //   mapStyle: 'mapbox://styles/tuba-kasap/cjxyyrvwr052p1crzfxpiu7iw/draft'
  // };

  render() {
    return (
      <div id="center2">
        <Map />
        <div className="home"  >
          <h1 className="title">BERcycle</h1>
          <p className="title">Welcome to BERcycle</p>
          <Link to="/map" className="btn btn-danger redbut">Enter your trip.</Link>
        </div>
      </div>
    );
  }

}

export default Home