import React, { useState } from "react";
import { postNewPlayer } from "../services/ProplayerService";


function SubmitForm({ teams, players }) {


  console.log(teams);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    team: "",
    position: "",
  });
  const teamOptions = teams.map((team) => {
    return (
      <option key={team.id} value={team.id}>
        {team.name}
      </option>
    );
  });

  // const positionOptions = players.map((player) => {
  //   return (
  //     <option key={player.id} value={player.position}>
  //       {player.position}
  //     </option>
  //   );
  // });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission or send data to an API
    console.log(formData);
    window.location.assign("/");
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
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Team:
        <select name="team" value={formData.team} onChange={handleInputChange}>
          {teamOptions}
        </select>
      </label>
      <br />
      <label>
        Position:
        <select
          name="position"
          // value={formData.position}
          onChange={handleInputChange}
        >
          <option value="ST">ST</option>
          <option value="RW">RW</option>
          <option value="LW">LW</option>
        </select>
      </label>
      <br />
      <button
        className="button"
        type="primary"
        htmlType="submit"
        style={{ background: "rgb(100, 165, 108)" }}
      >
        Submit
      </button>
    </form>
  );
}

export default SubmitForm;
