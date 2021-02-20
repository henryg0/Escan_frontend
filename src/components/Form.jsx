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
      major : "",
      address : "",
      year : "",
      enteredRaffle : false,
      showName: true,
      getData : []
    }
  }

  handleSubmit = (e) => {
    const student = this.state;
    
    axios.post('http://localhost:5000/Students/create', student)
      .then (res => console.log(res.data))
      .catch (e => console.log(e));
    
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
  
  handleMajorChange = (e) => {
    this.setState( {
      major: e.target.value
    })
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
      
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Enter your full name!"
            onChange={this.handleNameChange}>
          </input>
          <br />
          <input
            placeholder="Enter your email!"
            onChange = {this.handleEmailChange}>
          </input>
          <br />
          <input
            placeholder="Enter your phone number!"
            onChange = {this.handlePhoneNumberChange}>
          </input>
          <br />
          <input
            placeholder="Enter your address!"
            onChange = {this.handleAddressChange}>
          </input>

          <br />
          <p>Select your major</p>
          <input list="majors" id="major-choice" name="major-choice" onChange={this.handleMajorChange}/>
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
          <input list="years" id="year-choice" name="year-choice" onChange={this.handleYearChange}/>
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