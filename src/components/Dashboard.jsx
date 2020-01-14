import React from 'react';
import MapboxMap from './MapboxMap.jsx';
import MapboxMapFriends from './MapboxMapFriends.jsx'
import FriendData from './FriendData.jsx'
import DBStyle from '../styles/Dashboard_Style.js'
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
        <DBStyle.FriendInfo>
          <FriendData info={this.props.info} friendInfo={this.state.friendInfo} />
        </DBStyle.FriendInfo>
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
      <div style={{backgroundColor: '#f5f5f5'}}>
        {this.renderMap()}
        <DBStyle.UserInfo>
          <div><b>Pup Name:</b> {this.props.info.pupname}</div>
          <div><b>Breed:</b> {this.props.info.breed}</div>
          <div><b>Age:</b> {this.props.info.age}</div>
          <div><b>Gender:</b> {this.props.info.gender}</div>

        </DBStyle.UserInfo>
        <div>
          <DBStyle.ParkMenu>
            {this.props.info.pupname}'s Favorite Parks:
            <select onChange={this.handleClick}>
              <option>Select a park to find {this.props.info.pupname}'s friends!</option>
              {this.props.info.topParks.map((park) => {
                return <option value={park}>{park}</option>
              })}
            </select>
          </DBStyle.ParkMenu>
          {this.friendData()}
        </div>
      </div>
    )
  }
}

export default Dashboard;