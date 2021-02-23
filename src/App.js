import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {


  const teamList= [
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

  const initialFormValue = {
    name: '',
    email: '',
    role: '',

  }

  const [teamMembers, setTeamMembers] = useState(teamList);

  return (
    <div className="App">
      <header className="App-header">
        <div className= 'container'>
          <ul>
            {teamMembers.map(member =>{
              return <li></li>
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
