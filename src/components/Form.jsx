import axios from 'axios';
import React from 'react';
import './App.css';
import Heading from "./Heading";
import Major from './Major';
import Year from "./Year";
import Ending from './Ending';
import Select from 'react-select';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading : "Hey,",
      welcome : "Welcome to ESO Showcase!",
      name : "",
      email : "",
      address : "",
      major : "Mechanical Engineering",
      year : "",
      enteredRaffle : false,
      showName: true,
      getData : [],
      ending: "Not Yet Submitted"
    }
  }

  handleSubmit = (e) => {
    const student = this.state;
    // validate input here
    console.log(this.state)
    axios.post('https://escan-backend.herokuapp.com/Students/create', student)
      .then ((res) => {
        console.log('res: ' + res.data);
        console.log(student);
        this.setState( {
          ending: "Submitted!"
        });
      })
      .catch (e => console.log(e));
    
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

  handleAddressChange = (e) => {
    this.setState( {
      address: e.target.value
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
        />
      
        <form 
        className="form"
        onSubmit={this.handleSubmit}
        autoComplete="off"
        >
          <p>Enter your full name:</p>
          <input 
            placeholder="full name"
            onChange={this.handleNameChange}>
          </input>
          <br />
          <p>Enter your UCI email:</p>
          <input
            placeholder="email"
            onChange = {this.handleEmailChange}>
          </input>

          <p>Select your major:</p>
          <Major 
          className="major-selection"/>

          <br />
          <p>Select your class:</p>
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
          
          <p>Enter your address</p>
          <p>(Street, City, State Zip):</p>
          <input
            placeholder="address"
            onChange = {this.handleAddressChange}>
          </input>

          <br />
          {/*
          <table className="raffle">
            <tbody>
              <tr>
                <td>Do you want to enter the raffle?</td>
                <td><input className="raffleCheck" type="checkbox" onChange={this.handleRaffleChange}></input></td>
              </tr>
            </tbody>
          </table>
          */}
          <button onSubmit = {this.handleSubmit}>Submit</button>
          </form>
        <Ending 
        ending={this.state.ending}/>
        </div>
    )
  }
}

export default Form;