import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "50vh",
        latitude: this.props.latlng[0][0],
        longitude: this.props.latlng[0][1],
        zoom: 10
      },
      parkLocation1: { lat: this.props.latlng[0][0], lng: this.props.latlng[0][1] },
      parkLocation2: { lat: this.props.latlng[1][0], lng: this.props.latlng[1][1] },
      parkLocation3: { lat: this.props.latlng[2][0], lng: this.props.latlng[2][1] }
    };
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken="pk.eyJ1Ijoia3dpbGxhcmQ5NSIsImEiOiJjazVjcm13dW8wM2Z0M2ZzZG00bnRqNDk2In0.-fxwhaz17ffbsqenvOkTMQ"
        >
          {Object.keys(this.state.parkLocation1).length !== 0 ? (
            <Marker
              latitude={this.state.parkLocation1.lat}
              longitude={this.state.parkLocation1.lng}
            >
              <img src="locMarker.png"></img>
            </Marker>
          ) : (
              <div>Empty</div>
            )}
            {Object.keys(this.state.parkLocation2).length !== 0 ? (
            <Marker
              latitude={this.state.parkLocation2.lat}
              longitude={this.state.parkLocation2.lng}
            >
              <img src="locMarker.png"></img>
            </Marker>
          ) : (
              <div>Empty</div>
            )}
            {Object.keys(this.state.parkLocation3).length !== 0 ? (
            <Marker
              latitude={this.state.parkLocation3.lat}
              longitude={this.state.parkLocation3.lng}
            >
              <img src="locMarker.png"></img>
            </Marker>
          ) : (
              <div>Empty</div>
            )}
        </ReactMapGL>
        <button onClick={this.setUserLocation}>Set Location</button>

      </div>
    )
  }
}

// function Map(props) {
//   const [viewport, setViewport] = useState({
//     width: 400,
//     height: 400,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       onViewportChange={setViewport}
//       mapboxApiAccessToken={'pk.eyJ1Ijoia3dpbGxhcmQ5NSIsImEiOiJjazVjcm13dW8wM2Z0M2ZzZG00bnRqNDk2In0.-fxwhaz17ffbsqenvOkTMQ'}
//     />
//   );
// }

export default Map;