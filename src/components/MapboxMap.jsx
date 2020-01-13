import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


export default function MapContainer(props) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia3dpbGxhcmQ5NSIsImEiOiJjazVjcm13dW8wM2Z0M2ZzZG00bnRqNDk2In0.-fxwhaz17ffbsqenvOkTMQ'

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  })
}