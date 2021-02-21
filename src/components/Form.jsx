import axios from 'axios';
import React from 'react';
import './App.css';
import Heading from "./Heading";
import Major from './Major';
import Year from "./Year";
import Ending from './Ending';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading : "Hey,",
      welcome : "Welcome to ESO Showcase!",
      name : "",
      email : "",
      address : "",
      major : "",
      year : "",
      enteredRaffle : false,
      showName: true,
      getData : [],
      ending: ""
    }
  }

  handleSubmit = (e) => {
    const student = this.state;
    // validate input here
    axios.post('https://escan-backend.herokuapp.com/Students/create', student)
      .then (res => console.log(res.data))
      .catch (e => console.log(e));
    
    this.setState( {
      ending: "Thanks for entering the raffle, " + this.state.name + "!"
    })
    
    console.log(this.state);
    this.setState( {
        heading: "",
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
        showName={this.state.showName} />
      
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
          <p>Select your major</p>
          <input 
          list="majors" 
          id="major-choice" 
          name="major-choice"
          onChange={this.handleMajorChange} 
          onKeyDown={this.eraseSelection}
          />
          <datalist id="majors">
            <select>
            /* add more */
            <Major 
              major="Aerospace Engineering"
            />
            <Major
              major="Biomedical Engineering"
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
          </select>
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
          
          <p>Enter your address</p>
          <p>(Address, City State, Zip)</p>
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
        <Ending />
        </div>
    )
  }
}

export default Form;