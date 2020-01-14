import React from 'react';
import MapboxMap from './MapboxMap.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <MapboxMap latlng={this.props.info.coordinates} />
      </div>
    )
  }
}

export default Dashboard;