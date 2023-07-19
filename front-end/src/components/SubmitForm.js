import React, { useState } from "react";
import { postNewPlayer } from "../services/ProplayerService";
import { useNavigate } from "react-router-dom";


function SubmitForm({ teams, players }) {
  const navigate = useNavigate()
  const [player, setPlayer] = useState()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    team: "",
    position: "",
  });

  const generateplayer = (form)=>{
      const player = {name: form.name, "user_player": true,
      "image": "https://fifastatic.fifaindex.com/FIFA23/players/233164.png",
      "nationality": "Kosovo",
      "nationality_image": "https://fifastatic.fifaindex.com/FIFA21/images/flags/10/219.png",
      "overall": 74,
      "height": 183,
      "weight": 81,
      "preferred_foot": "right foot",
      "birth_date": "Nov. 7, 1998",
      "age": form.age,
      "position": form.position,
      "substitute": false,
      "kit_number": 10,
      "positioning": 40,
      "diving": 40,
      "handling": 40,
      "kicking": 40,
      "reflexes": 40,
      "reactions": 40,
      "composure": 40,
      "slide_tackle": 40,
      "stand_tackle": 40,
      "aggression": 40,
      "interceptions": 40,
      "strength": 40,
      "balance": 55,
      "jumping": 55,
      "heading": 55,
      "ball_control": 55,
      "vision": 55,
      "crossing":55,
      "short_pass": 55,
      "long_pass": 55,
      "stamina": 55,
      "agility": 55,
      "long_shot": 55,
      "dribbling": 55,
      "at_positioning": 55,
      "sprint_speed": 55,
      "shot_power": 55,
      "finishing": 55,
      "fk_accuracy": 55,
      "penalties": 55,
      "volleys": 55,
      "goals": 0,
      "assistance": 0,
      "appearances": 0,
      "team": teams[form.team]}
    
      // if (form.position === "LW"){
      //   player.position = "LW"
      // }else if(form.position === "RW"){
      //   player.position = "RW"
      // }
  return player
//   if(form.position === "RW") {

//     const player = {name: form.name, "user_player": true,
//       "image": "https://fifastatic.fifaindex.com/FIFA23/players/233164.png",
//       "nationality": "Kosovo",
//       "nationality_image": "https://fifastatic.fifaindex.com/FIFA21/images/flags/10/219.png",
//       "overall": 74,
//       "height": 183,
//       "weight": 81,
//       "preferred_foot": form.foot,
//       "birth_date": "Nov. 7, 1998",
//       "age": form.age,
//       "position": form.position,
//       "substitute": false,
//       "kit_number": 10,
//       "positioning": 40,
//       "diving": 40,
//       "handling": 40,
//       "kicking": 40,
//       "reflexes": 40,
//       "reactions": 40,
//       "composure": 40,
//       "slide_tackle": 40,
//       "stand_tackle": 40,
//       "aggression": 40,
//       "interceptions": 40,
//       "strength": 40,
//       "balance": 55,
//       "jumping": 55,
//       "heading": 55,
//       "ball_control": 55,
//       "vision": 55,
//       "crossing":55,
//       "short_pass": 54,
//       "long_pass": 57,
//       "stamina": 29,
//       "agility": 38,
//       "long_shot": 14,
//       "dribbling": 18,
//       "at_positioning": 11,
//       "sprint_speed": 46,
//       "shot_power": 58,
//       "finishing": 12,
//       "fk_accuracy": 11,
//       "penalties": 18,
//       "volleys": 16,
//       "goals": 0,
//       "assistance": 0,
//       "appearances": 0,
//       "team": {}}

//   } 
// else if (form.position === "LW") {

//   const player = {name: form.name, "user_player": true,
//       "image": "https://fifastatic.fifaindex.com/FIFA23/players/233164.png",
//       "nationality": "Kosovo",
//       "nationality_image": "https://fifastatic.fifaindex.com/FIFA21/images/flags/10/219.png",
//       "overall": 74,
//       "height": 183,
//       "weight": 81,
//       "preferred_foot": form.foot,
//       "birth_date": "Nov. 7, 1998",
//       "age": form.age,
//       "position": form.position,
//       "substitute": false,
//       "kit_number": 10,
//       "positioning": 40,
//       "diving": 40,
//       "handling": 40,
//       "kicking": 40,
//       "reflexes": 40,
//       "reactions": 40,
//       "composure": 40,
//       "slide_tackle": 40,
//       "stand_tackle": 40,
//       "aggression": 40,
//       "interceptions": 40,
//       "strength": 40,
//       "balance": 55,
//       "jumping": 55,
//       "heading": 55,
//       "ball_control": 55,
//       "vision": 55,
//       "crossing":55,
//       "short_pass": 54,
//       "long_pass": 57,
//       "stamina": 29,
//       "agility": 38,
//       "long_shot": 14,
//       "dribbling": 18,
//       "at_positioning": 11,
//       "sprint_speed": 46,
//       "shot_power": 58,
//       "finishing": 12,
//       "fk_accuracy": 11,
//       "penalties": 18,
//       "volleys": 16,
//       "goals": 0,
//       "assistance": 0,
//       "appearances": 0,
//       "team": {}}
// }


  }
  console.log(teams);
  const teamOptions = teams.map((team, index) => {
    return (
      <option key={team.id} value={index}>
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
    const ourPlayer = generateplayer(formData)
    console.log(ourPlayer)
    // Process form submission or send data to an API
    console.log(formData);
    navigate("/home")
  };

  return (
    <div className="grid grid-rows-6 grid-col-2 gap-2">
      <div className="card shadow-xl ">
        <div className="card-body flex items-center  ">
          <h1>WELCOME TO PROPLAYER</h1>
          <p>Create your player</p>
          
          <div className="card-actions">
          </div>
        </div>
      </div>

      
      <div className="card shadow-xl row-span-6 ">
      <figure className="px-10 pt-7">
      
      </figure>
        <div className="card-body flex items-center ">
          {/* <h2 className="card-title">News</h2> */}
          <p class="text-left"><br></br>

          <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input className=" border border-solid border-black "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input className=" border border-solid border-black "
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Team:
        <select name="team" onChange={handleInputChange}>
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
          <option value={"ST"}>ST</option>
          <option value={"RW"}>RW</option>
          <option value={"LW"}>LW</option>
        </select>
      </label>
      <br />
      <button
        className=" border border-solid border-black "
        type="primary"
        htmlType="submit"
        style={{ background: "rgb(100, 165, 108)" }}
      >
        Submit
      </button>
    </form>
    </p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
    
  
}

export default SubmitForm;
// {
//   "id": 1,
//   "user_player": false,
//   "name": "Arijanet Murić",
//   "image": "https://fifastatic.fifaindex.com/FIFA23/players/233164.png",
//   "nationality": "Kosovo",
//   "nationality_image": "https://fifastatic.fifaindex.com/FIFA21/images/flags/10/219.png",
//   "overall": 74,
//   "height": 197,
//   "weight": 81,
//   "preferred_foot": "Right",
//   "birth_date": "Nov. 7, 1998",
//   "age": 24,
//   "position": "GK",
//   "substitute": false,
//   "kit_number": 49,
//   "positioning": 73,
//   "diving": 75,
//   "handling": 72,
//   "kicking": 77,
//   "reflexes": 76,
//   "reactions": 60,
//   "composure": 64,
//   "slide_tackle": 13,
//   "stand_tackle": 12,
//   "aggression": 24,
//   "interceptions": 18,
//   "strength": 68,
//   "balance": 40,
//   "jumping": 62,
//   "heading": 10,
//   "ball_control": 26,
//   "vision": 56,
//   "crossing": 13,
//   "short_pass": 54,
//   "long_pass": 57,
//   "stamina": 29,
//   "agility": 38,
//   "long_shot": 14,
//   "dribbling": 18,
//   "at_positioning": 11,
//   "sprint_speed": 46,
//   "shot_power": 58,
//   "finishing": 12,
//   "fk_accuracy": 11,
//   "penalties": 18,
//   "volleys": 16,
//   "goals": 0,
//   "assistance": 0,
//   "appearances": 0,
//   "team": {}
//   }
