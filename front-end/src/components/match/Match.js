import { useEffect, useState } from "react"
import TeamReady from "./TeamReady";
import Game from "./Game";
import Timer from "../Timer";
import TeamDisplay from "./TeamDisplay";
import DisplayDecisions from "./DiaplayDecisions";
import Scoring from "../../logic/Scoring";

const Match = ()=>{

    const player1 = { name: "John", position: "gk", ovr: 70 ,positioning: 60, diving: 70, reflexes:50};
    const player2 = { name: "John", position: "gk", ovr: 65};
    const player3 = { name: "John", position: "df", ovr: 77, slideTackle: 50, standTackle: 80};
    const player4 = { name: "John", position: "df", ovr: 67};
    const player5 = { name: "John", position: "df", ovr: 73};
    const player6 = { name: "John", position: "mid", ovr: 80};
    const player7 = { name: "John", position: "mid", ovr: 70};
    const player8 = { name: "John", position: "st", ovr: 78, shotPower:60, finishing: 60, attPosition: 67};
    console.log(Scoring(player8,player3, player1))
    const teamA = [player1, player2, player3, player4, player5, player6, player7, player8]
    const teamB = [player1, player2, player3, player4, player5, player6, player7, player8]

    const [teamAPlayers, setTeamAPlayers] = useState(TeamReady(teamA))
    const [teamBPlayers, setTeamBPlayers] = useState(TeamReady(teamB))
    const [teamAScore, setTeamAScore] = useState(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [playerReward, setPlayerReward] = useState(0)
    const [decisionStatus, setDecisionStatus] = useState(false)
    const [gameStatus, setGameStatus] = useState(true)
    
    const getScore= (team) =>{
        if(team === "A"){
            setTeamAScore(teamAScore+1)
        }else{
            setTeamBScore(teamBScore+1)
        }
    }
    
    const getOpportunity = ()=>{
        setDecisionStatus(!decisionStatus)
        console.log("change")
        if(gameStatus === true){
            setGameStatus(!gameStatus)
        }else{
            setGameStatus(true)
        }
    }
    console.log(teamAPlayers)

    return(
        <div>
            <h2> {teamAScore} : {teamBScore}</h2>
            <TeamDisplay team={teamA}/>
            <TeamDisplay team={teamB}/>
            {gameStatus? <Game getOpportunity = {getOpportunity} getScore = {getScore}/>:null}
            <Timer decisionStatus = {decisionStatus}/>
            {decisionStatus? <DisplayDecisions /> : null}
            <button onClick={getOpportunity}>aaaaaa</button>
        </div>
    )
}

export default Match