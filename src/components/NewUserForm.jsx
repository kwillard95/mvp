import React from 'react';
import NewPupForm from './NewPupForm.jsx';
import axios from 'axios';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      name: '',
      city: '',
      state: '',
      pupname: '',
      breed: '',
      age: '',
      gender: 'male'
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.submitInfo = this.submitInfo.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target
    this.setState({ [name]: value });
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    var newUserInfo = this.state;
    console.log(newUserInfo)
    axios({
      method: 'post',
      url: '/newuser',
      data: newUserInfo
    })
      .then((response) => {
        console.log("Successfully posted!")
      })
      .catch((error) => {
        console.log(error)
      })

  }


  render() {
    return (
      <form>
        Full Name: <input type="text" placeholder="Full Name" name="name" onChange={this.handleChange}></input>
        City: <input type="text" placeholder="City" name="city" onChange={this.handleChange}></input>
        State: <select name="state" onChange={this.handleChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <form>
          Pup Information:
      <input type="text" placeholder="Pup's Name" name="pupname" onChange={this.handleChange}></input>
          <input type="text" placeholder="Pup's Breed" name="breed" onChange={this.handleChange}></input>
          <input type="text" placeholder="Pup's Age" name="age" onChange={this.handleChange}></input>
          <select name="gender" onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </form>
        {/* <button onSubmit={this.handleSubmit}>Add Another Pup</button> */}
        <button onClick={this.handleSubmit}>Submit Info</button>
      </form>
    )
  }
}

export default NewUserForm;
