import { useEffect, useState } from "react"
import TeamReady from "./TeamReady";
import Game from "./Gmae";

const Match = ()=>{

    const player1 = { name: "John", position: "gk", ovr: 70};
    const player2 = { name: "John", position: "gk", ovr: 65};
    const player3 = { name: "John", position: "df", ovr: 77};
    const player4 = { name: "John", position: "df", ovr: 67};
    const player5 = { name: "John", position: "df", ovr: 73};
    const player6 = { name: "John", position: "mid", ovr: 80};
    const player7 = { name: "John", position: "mid", ovr: 70};
    const player8 = { name: "John", position: "st", ovr: 78};

    const teamA = [player1, player2, player3, player4, player5, player6, player7, player8]
    const teamB = [player1, player2, player3, player4, player5, player6, player7, player8]

    const [teamAPlayers, setTeamAPlayers] = useState(TeamReady(teamA))
    const [teamBPlayers, setTeamBPlayers] = useState(TeamReady(teamB))
    const [teamAScore, setTeamAScore] = useState(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [playerReward, setPlayerReward] = useState(0)
       
    
    console.log(teamAPlayers)

    return(
        <div>
            <Game/>
        </div>
    )
}

export default Match