import axios from 'axios';
import React from 'react';
import './App.css';
import Heading from "./Heading";
import Major from './Major';
import Year from "./Year";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading : "Hey,",
      welcome : "Welcome to E-Week!",
      name : "",
      email : "",
      phoneNumber:"",
      address : "",
      city: "",
      state: "",
      zip: "",
      major : "",
      year : "",
      enteredRaffle : false,
      showName: true,
      getData : []
    }
  }

  handleSubmit = (e) => {
    const student = this.state;
    // validate input here
    axios.post('https://escan-backend.herokuapp.com/Students/create', student)
      .then (res => console.log(res.data))
      .catch (e => console.log(e));
    
    console.log(this.state);
    this.setState( {
        heading: "Submitted!",
        name: "",
        showName: false
      })
    e.preventDefault();
  }

  handleNameChange = (e) => {
    this.setState( {
      name: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState( {
      email : e.target.value
    })
  }

  handlePhoneNumberChange = (e) => {
    this.setState( {
      phoneNumber : e.target.value
    })
  }

  handleAddressChange = (e) => {
    this.setState( {
      address: e.target.value
    })
  }

  handleCityChange = (e) => {
    this.setState( {
      city : e.target.value
    })
  }
  
  handleStateChange = (e) => {
    this.setState( {
      state : e.target.value
    })
  }
  handleZipChange = (e) => {
    this.setState( {
      zip : e.target.value
    })
  }

  handleMajorChange = (e) => {
    this.setState( {
      major: e.target.value
    })
  }

  eraseSelection = (e) => {
    if (e.keyCode != 8) {
      e.preventDefault();
    }
  }
  
  handleYearChange = (e) => {
    this.setState( {
      year: e.target.value
    })
  }

  handleRaffleChange = (e) => {
    this.setState({
      enteredRaffle:true
    })
  }

  render() {
    return (
      <div>
        <Heading 
        heading={this.state.heading}
        name={this.state.name}
        welcome={this.state.welcome}
        showName={this.state.showName} />
      
        <form 
        onSubmit={this.handleSubmit}
        autoComplete="off"
        >
          <p>Enter your full name</p>
          <input 
            placeholder="full name"
            onChange={this.handleNameChange}>
          </input>
          <br />
          <p>Enter your email</p>
          <input
            placeholder="email"
            onChange = {this.handleEmailChange}>
          </input>
          <br />
          <p>Enter your phone number (ZZZ) ZZZ-ZZZZ</p>
          <input
            placeholder="phone number"
            onChange = {this.handlePhoneNumberChange}>
          </input>
          <p>Enter your address</p>
          <input
            placeholder="address!"
            onChange = {this.handleAddressChange}>
          </input>
          <p>Enter your city</p>
          <input
            placeholder="city"
            onChange = {this.handleCityChange}>
          </input>
          <p>Enter your state</p>
          <input
            placeholder="state"
            onChange = {this.handleStateChange}>
          </input>
          
          <p>Enter your zip code</p>
          <input
            placeholder="address!"
            onChange = {this.handleZipChange}>
          </input>
          <p>Select your major</p>
          <input 
          list="majors" 
          id="major-choice" 
          name="major-choice"
          onChange={this.handleMajorChange} 
          onKeyDown={this.eraseSelection}
          />
          <datalist id="majors">
            /* add more */
            <Major 
              major="Aerospace Engineering"
            />
            <Major
              major="Biomedical Engineering"
            />
            <Major
              major="Computer Engineering"
            />
            <Major
              major="Civil Engineering"
            />
            <Major
              major="Computer Engineering"
            />
            <Major
              major="Computer Science and Engineering"
            />
            <Major
              major="Electrical Engineering"
            />
            <Major
              major="Environmental Engineering"
            />
            <Major
              major="Material Science and Engineering"
            />
            <Major
              major="Mechanical Engineering"
            />

          </datalist>

          <br />
          <p>Select your class</p>
          <input list="years" id="year-choice" name="year-choice" onChange={this.handleYearChange} onKeyDown={this.eraseSelection}/>
          <datalist id="years">
            /* add more */
            <Year
              year="1st" 
            />
            <Year
              year="2nd"
            />
            <Year
              year="3rd"
            />
            <Year
              year="4th"
            />
            <Year
              year="5th"
            />
          </datalist>
          
          <br />
          <table className="raffle">
            <tbody>
              <tr>
                <td>Do you want to enter the raffle?</td>
                <td><input className="raffleCheck" type="checkbox" onChange={this.handleRaffleChange}></input></td>
              </tr>
            </tbody>
          </table>
          <button onSubmit = {this.handleSubmit}>Submit</button>
          </form>
        </div>
    )
  }
}

export default Form;