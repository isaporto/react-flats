/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.852966,
      lng: 2.349902
    },
    zoom: 13
  };

  render() {
    const { target, center, zoom } = this.props;
    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >
          { target ? <Marker lat={target.lat} lng={target.lng} /> : null }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
