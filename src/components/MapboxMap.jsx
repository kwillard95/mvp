import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map(props) {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={'pk.eyJ1Ijoia3dpbGxhcmQ5NSIsImEiOiJjazVjcm13dW8wM2Z0M2ZzZG00bnRqNDk2In0.-fxwhaz17ffbsqenvOkTMQ'}
    />
  );
}

export default Map;