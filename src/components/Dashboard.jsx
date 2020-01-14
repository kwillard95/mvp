import React from 'react';
import MapboxMap from './MapboxMap.jsx';
import MapboxMapFriends from './MapboxMapFriends.jsx'
import FriendData from './FriendData.jsx'
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.parkRef = React.createRef();
    this.state = {
      friendData: false,
      friendMap: false,
      friendInfo: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target.value)
    if (e.target.value === `Select a park to find ${this.props.info.pupname}'s friends!`) {
      this.setState({ friendData: false, friendMap: false })
    }
    axios.get('/friendData', {
      params: {
        park: e.target.value
      }
    })
      .then((response) => {
        if (response.data.length > 1) {
          this.setState({
            friendData: true,
            friendMap: true,
            friendInfo: response.data
          });
        } else {
          this.setState({ friendData: false, friendMap: false })
        }

        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  friendData() {
    if (this.state.friendData === true) {
      return (
        <FriendData info={this.props.info} friendInfo={this.state.friendInfo} />
      )
    }
  }

  renderMap() {
    if (this.state.friendMap === false) {
      return (
        <MapboxMap latlng={this.props.info.coordinates} />
      )
    } else {
      return (
        <MapboxMapFriends latlng={this.props.info.coordinates} friends={this.state.friendInfo} />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderMap()}
        <div>
          <h2>User Information:</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li>Pup Name: {this.props.info.pupname}</li>
            <li>Breed: {this.props.info.breed}</li>
            <li>Age: {this.props.info.age}</li>
            <li>Gender: {this.props.info.gender}</li>
          </ul>
          {this.props.info.pupname}'s Favorite Parks:
            <select onChange={this.handleClick}>
            <option>Select a park to find {this.props.info.pupname}'s friends!</option>
            {this.props.info.topParks.map((park) => {
              return <option value={park}>{park}</option>
            })}
          </select>
          {this.friendData()}
        </div>
      </div>
    )
  }
}

export default Dashboard;