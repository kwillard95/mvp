import React from 'react'
import AppStyle from '../styles/App_Style.js'
import axios from 'axios';
import NewUserForm from './NewUserForm.jsx'
import Dashboard from './Dashboard.jsx'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      info: '',
      home: true,
      newUserForm: false,
      dashboard: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.form = this.form.bind(this);
  }

  handleInputChange(e) {
    this.setState({email: e.target.value})
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
        this.setState({
          home: false,
          dashboard: true,
          info: response.data
        });
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      this.setState({home: false,
        newUserForm: true})
    }
  }

  form() {
    if (this.state.home === true) {
      return (
        <div>
          <button id="new" onClick={this.handleButtonClick}>New User</button>
          <button id="existing" onClick={this.handleButtonClick}>Existing User</button>
          <input type="text" placeholder="Email Address" onChange={this.handleInputChange}></input>
        </div>
      )
    } else if (this.state.newUserForm === true) {
      return <NewUserForm email={this.state.email}></NewUserForm>
    } else if (this.state.dashboard === true) {
      return <Dashboard info={this.state.info} />
    }
  }

  render() {
    return (
      <AppStyle.Wrapper>
        {this.form()}
      </AppStyle.Wrapper>
    )
  }
}

export default App;