import React from 'react'
import AppStyle from '../styles/App_Style.js'
import axios from 'axios';
import NewUserForm from './NewUserForm.jsx'
// import MapContainer from './GoogleMap.jsx'
// import MapContainer from './MapboxMap.jsx'
// import Places from './Places.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      newUser: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.form = this.form.bind(this);
  }

  handleInputChange(e) {
    this.setState({email: e.target.value})
    console.log(this.state.email)
  }

  handleButtonClick(e) {
    e.preventDefault();
    if (e.target.id === 'existing') {
      axios.get("/user", {
        params: {
          ID: this.state.email
        }
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      this.setState({newUser: true})
    }
  }

  form() {
    if (this.state.newUser === true) {
      return <NewUserForm email={this.state.email}></NewUserForm>
    }
  }

  render() {
    return (
      <AppStyle.Wrapper>
        <button id="new" onClick={this.handleButtonClick}>New User</button>
        <button id="existing" onClick={this.handleButtonClick}>Existing User</button>
        <input type="text" placeholder="Email Address" onChange={this.handleInputChange}></input>
        {this.form()}
      </AppStyle.Wrapper>
    )
  }
}

export default App;