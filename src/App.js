import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'
import axios from './axios'

const teamList = [ //default state has these team members inside this array of objects
  {
    name: 'Joe',
    email: 'JoeS@email.com',
    role: 'RockStar',
  },
  {
    name: 'Shmoe',
    email: 'Shmoey123@email.com',
    role: 'Surgeon',
  }
]

const initialFormValues = { //form values are empty strings at default state
  name: '',
  email: '',
  role: '',

}

export default function App() {

  const [teamMembers, setTeamMembers] = useState(teamList); //setting state for team list
  const [formValues, setFormValues] = useState(initialFormValues); //setting state for form values

  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue}) //takes formValues object, adds an inputname of input value
  
  }

  const submitForm = () => { //submit button functionality

      const newMember = {
        name: formValues.name.trim(), //trim gets rid of white space in string
        email: formValues.email.trim(),
        role: formValues.role
      }
      if (!newMember.name || !newMember.email  || !newMember.role  ) { //if not a name email or role, stop function
        return;
      }
      axios.post('teamapi.com', newMember) //post newMember to fake api
      .then(res =>{
        setTeamMembers([...teamMembers, res.data]) //set teamMembers state to the initial list plus data at fake api
      })
      .catch(err =>{
        console.log(err)
      })
      setFormValues(initialFormValues) //resets the form values
  }
  return (
        <div className= 'container'>
          <h1>Team List</h1>
          <Form
          update = {updateForm}
          submit = {submitForm}
          values = {formValues} 
          
          />
          <ul>
            {teamMembers.map((member, idx) =>{
              return <div className = "list">
                        <li key = {idx}>{`Name: ${member.name}`}                    
                          <li>{`Email: ${member.email}`}</li>
                          <li>{`Role: ${member.role}`}</li>
                        </li>
                      </div>
            })}
          </ul>
        </div>
  );
}
