import React from 'react';
import Select from 'react-select';
import './Major.css'

const options = [
  { 
    value:'Aero', label: 'Aerospace Engineering',
  },
  {
    value:'BME', label: 'Biomedical Engineering',
  },
  {
    value:'ChE', label: 'Chemical Engineering',
  },
  { 
    value:'Civil', label: 'Civil Engineering',
  },
  { 
    value:'CPE', label: 'Computer Engineering',
  },
  { 
    value:'CSE', label: 'Computer Science & Engineering',
  },
  { 
    value:'Enviro', label: 'Environmental Engineering',
  },
  { 
    value:'EE', label: 'Electrical Engineering',
  },
  { 
    value:'MSE', label: 'Materials Science & Engineering',
  },
  { 
    value:'ME', label: 'Mechanical Engineering',
  },
]

/*
background-color:powderblue;
  width:18rem;
  height:2.75rem;
  text-align:center;
  font-family:'Montserrat Alternates';
  border-color:white;
  border-radius: 1rem;
  margin-bottom: 1rem;
  color:rgb(187, 58, 10);
  font-size:0.85rem;
  position:relative;
  */
const styles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'powderblue',
    fontFamily:'Montserrat Alternates',
    height: '3.2rem',
    borderRadius: '1rem',
    borderColor: 'white',
    borderWidth: '0.125rem',
    fontSize: '0.85rem'
  }),
  valueContainer: (base) => ({
    ...base,
    height: '3.4rem',
    color: 'blue'
  }),
  indicatorsContainer : (base) => ({
    ...base,
    '.myDropDown' : {
      '&__dropdown-indicator': {
        color:'blue'
      }
    }
  }),
  option: (base) => ({
    ...base,
    color: 'black',
    backgroundColor: 'powderblue',
    height: 'auto'
  }),
  placeholder: (base) => {
    return {
      ...base,
      color: 'grey',
      marginLeft: '46%'
    }
  }
}

class Major extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="major-select">
      <Select 
      options={options}
      styles={styles}
      autosize={true}
      placeholder="major"/>
    </div>
    )}}

export default Major;