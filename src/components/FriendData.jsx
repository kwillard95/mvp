import React from 'react';

class FriendData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Find Friends: </h2>

        {this.props.friendInfo.map((friend) => {
          if (friend.email !== this.props.info.email) {
            return (
              <ul style={{ listStyleType: 'none' }}>
                <li>Name: {friend.pupname}</li>
                <li>Breed: {friend.breed}</li>
                <li>Age: {friend.age}</li>
                <li>Gender: {friend.gender}</li>
                <li>Favorite Parks: {friend.topParks.map((park) => {
                  return <div>{park}</div>
                })}</li>
              </ul>
        )}})}

      </div>
    )
  }
}

export default FriendData;