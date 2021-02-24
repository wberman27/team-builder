import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'

const teamList = [
  {
    name: 'Joe',
    email: 'Joe@email.com',
    role: 'RockStar',
  },
  {
    name: 'Shmoe',
    email: 'Shmoey123@email.com',
    role: 'Surgeon',
  }
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',

}

export default function App() {

  const [teamMembers, setTeamMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue}) //takes formValues object, adds an inputname of input value
  
  }

  const submitForm = () => {

      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role
      }
      if (!newMember.name || !newMember.email  || !newMember.role  ) {
        return;
      }
      setFormValues(initialFormValues)
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
              return <li key = {idx}>{`Name: ${member.name} Email: ${member.email} Role: ${member.role}`}</li>
            })}
          </ul>
        </div>
  );
}
