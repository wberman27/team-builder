import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const initialTeamMembers = {
    name: '',
    email: '',
    role: '',

  }

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  return (
    <div className="App">
      <header className="App-header">
        <div className= 'container'>
          <ul>
            Hi
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
