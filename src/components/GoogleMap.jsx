import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '250px',
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwf8atgESX0iv8qjZKttZOtniqLBY7Tt8'
  })(MapContainer);

// export default MapContainer;