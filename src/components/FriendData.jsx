import React from 'react';
import DBStyle from '../styles/Dashboard_Style.js'

class FriendData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 style={{fontFamily: 'Sans-serif', textAlign: 'center'}}>Find Friends: </h3>

        {this.props.friendInfo.map((friend) => {
          if (friend.email !== this.props.info.email) {
            return (
              <DBStyle.FriendBubble>
                <div><b>Name:</b> {friend.pupname}</div>
                <div><b>Breed:</b> {friend.breed}</div>
                <div><b>Age:</b> {friend.age}</div>
                <div><b>Gender:</b> {friend.gender}</div>
                <div><b>Favorite Parks:</b> {friend.topParks.map((park) => {
                  return <div>{park}</div>
                })}</div>
              </DBStyle.FriendBubble>

        )}})}

      </div>
    )
  }
}

export default FriendData;