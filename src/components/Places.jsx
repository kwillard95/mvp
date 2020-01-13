import React from 'react';
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

import "regenerator-runtime/runtime";

export default function Places(props) {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordintes] = React.useState({lat: null, lng: null});

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordintes(latLng);
  }
  return <div>
    <PlacesAutoComplete
    value={address}
    onChange={setAddress}
    onSelect={handleSelect}>
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <div>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
      <input {...getInputProps({placeholder: "Type dog park"})} />
      <div>
        {loading ? <div>...finding parks</div> : null}

        {suggestions.map((suggestion) => {
          const style = {
            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
          };

        return <div {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
        })}
      </div>
    </div>)}
    </PlacesAutoComplete>
  </div>
}

// class PlacesSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: ''}
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };

//   handleSelect = address => {
//     geocodeByAddress(address)
//     .then(results => getLatLng(results[0]))
//   }
// }