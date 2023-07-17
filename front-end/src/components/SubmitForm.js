import React, { useState } from 'react';
import {postNewPlayer} from '../services/ProplayerService';

function SubmitForm({teams}) {
    console.log(teams)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    team: '',
    position: '',
    league: ''
  });
  const teamOptions = teams.map((team)=>{
    return <option key= {team.id} value={team.id}>{team.name}</option>
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission or send data to an API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        Team:
        <select
          name="team"
          value={formData.team}
          onChange={handleInputChange}
        >
        
        {teamOptions}
        </select>
      </label><br />
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
        />
      </label><br />
      <label>
        League:
        <input
          type="text"
          name="league"
          value={formData.league}
          onChange={handleInputChange}
        />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
