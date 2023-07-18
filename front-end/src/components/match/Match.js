import { useEffect, useState, useRef } from "react"
import TeamReady from "./TeamReady";
import Game from "./Game";
import Timer from "./Timer";
import TeamDisplay from "./TeamDisplay";
import DisplayDecisions from "./DiaplayDecisions";
import Scoring from "../../logic/Scoring";
import ScoreBoard from "./ScoreBoard";

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
    const teamA = {name: "OSFP", players: [player1, player2, player3, player4, player5, player6, player7, player8]} 
    const teamB = {name: "PAO", players: [player1, player2, player3, player4, player5, player6, player7, player8]} 
    const [time, setTime] = useState({m:0, s:0})
    const [teamAPlayers, setTeamAPlayers] = useState(TeamReady(teamA.players))
    const [teamBPlayers, setTeamBPlayers] = useState(TeamReady(teamB.players))
    const [teamAScore, setTeamAScore] = useState(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [playerReward, setPlayerReward] = useState(0)
    const [decisionStatus, setDecisionStatus] = useState(false)
    const [gameStatus, setGameStatus] = useState(false)
    const [startTimer,setStartTimer] = useState(true)
    const [isGameEnded, setGameEnded] = useState(false)
    const [gameEventHistory, setGameEventHistory] = useState()
    // const [intervStorage, setIntervStorage] = useState() // undefined

    let intervStorage = useRef()

    const teamAOvr = 56;
    const teamBOvr = 60;
    const [eventArray, setEventArray] = useState([])
    const timeout = useRef(0)
    const pauseGame = useRef(false)

    const start = ()=>{
        run();
        // intervStorage = setInterval(run,500)
        // setIntervStorage(setInterval(run,500))
        intervStorage.current = setInterval(run,500) // can we do this?
    }
    const pause = ()=>{
        clearInterval(intervStorage.current)
    }
    const stop = ()=>{
        clearInterval(intervStorage.current)
        setTime({m:0, s:0})

    }
    var updateM = time.m, updateS = time.s;
    const run = ()=>{
            
            if (updateS === 59){
                updateS = 0
                updateM++
            }
            updateS++
            
            if(updateM >= 90){
                // clearInterval(intervStorage)
                return stop()
            }else if(!isGameEnded){
                return setTime({m: updateM, s: updateS})
            }
        

    }
    const populateEventArray = ()=>{
        let populatedEventArray = ["DN", "DN", "DN","DN"]
        if((teamBOvr - 5) < teamAOvr && teamAOvr < (teamBOvr + 5) ){
            populatedEventArray = [...populatedEventArray, "TA", "TA", "TB", "TB", "O", "O"]
        }
        else if (teamAOvr> (teamBOvr + 5)){
            populatedEventArray = [...populatedEventArray, "TA", "TA", "TA", "TB", "O", "O"]
        }
        else {
            populatedEventArray = [...populatedEventArray, "TA", "TB", "TB", "TB", "O", "O"]
        }
        return populatedEventArray
    }


    const pickRandomEvent = () =>{
        // do stuff
        // setTeamBScore(prevscore => prevscore + 1)
        const timer =(Math.floor(Math.random()*(10 - 3 + 1)) + 3) * 1500
        console.log(timer)
        if(eventArray && !pauseGame.current){

            const i = Math.floor(Math.random()*10)
            console.log(i)
            if(eventArray[i] === "TA"){
                // setTeamAScore(prevscore=>prevscore+1)
                setTeamAScore(teamAScore+1)
            }
            else if( eventArray[i] === "TB"){
                // setTeamBScore(prevscore => prevscore + 1)
                setTeamBScore(teamBScore+1)
            }
            else if( eventArray[i] === "O"){
                console.log("It's an opportunity!!!!!!!!!")          
                pause()
                clearTimeout(timeout.current)
                pauseGame.current = true
                setDecisionStatus(true)
            }else{

                console.log("Nothing")
            }
            console.log("game logic!!!!!!!!!")
            console.log({timer})
            timeout.current = setTimeout(pickRandomEvent,timer)
        }
        
       
        
    }

 

 
    useEffect(()=>{
        setEventArray(populateEventArray())
        // timeout.current = setTimeout(pickRandomEvent, 1000)
        // return () => {
        //     clearTimeout(timeout.current)
        // }
        
    },[])

    const startGame = ()=>{
        if(eventArray){

        }
        start()
        pauseGame.current = false
        timeout.current = setTimeout(pickRandomEvent, 1000)
        return () => {
            clearTimeout(timeout.current)
        }
    }

    const getDecisionEndPoint = (decision) =>{
                if (decision === "Shoot"){
                    let results = Scoring(player8,player3, player1);
                    console.log(decision)
                    if(results){
                        // const newEvent = gameEventHistory
                        const eventTime = time.m
                        const newEvent = `${player1.name} Scored!!!!!!` 
                        setGameEventHistory(newEvent)
                        if(teamA.players.includes(player1)){
                            setTeamAScore(teamAScore +1)
                        }else{
                            setTeamBScore(teamBScore +1)
                        }
                    }
                    // const newEvent = gameEventHistory
                    const eventTime = time.m
                    const newEvent = `${player1.name} missed an opportunity` 
                    setGameEventHistory(newEvent)
                    
                }
                setDecisionStatus(!decisionStatus)
                startGame()
            }

    

    return(
        <div>
            {/* <h2>keys {Object.keys(gameEventHistory)}   and values {Object.values(gameEventHistory)}</h2> */}
            <h2>{gameEventHistory}</h2>
            <ScoreBoard homeTeam={teamA} awayTeam={teamB} homeTeamScore={teamAScore} awayTeamScore={teamBScore}/>
            <TeamDisplay team={teamA}/>
            <TeamDisplay team={teamB}/>
            {/* {gameStatus? <Game />:null} */}
            {isGameEnded ? <h2>Finished</h2> : <Timer time = {time} />}
            {decisionStatus? <DisplayDecisions getDecisionEndPoint = {getDecisionEndPoint}/> : null}
            <button onClick={startGame}>aaaaaa</button>
        </div>
    )
}

export default Match


// const player1 = { name: "John", position: "gk", ovr: 70 ,positioning: 60, diving: 70, reflexes:50};
//     const player2 = { name: "John", position: "gk", ovr: 65};
//     const player3 = { name: "John", position: "df", ovr: 77, slideTackle: 50, standTackle: 80};
//     const player4 = { name: "John", position: "df", ovr: 67};
//     const player5 = { name: "John", position: "df", ovr: 73};
//     const player6 = { name: "John", position: "mid", ovr: 80};
//     const player7 = { name: "John", position: "mid", ovr: 70};
//     const player8 = { name: "John", position: "st", ovr: 78, shotPower:60, finishing: 60, attPosition: 67};
//     console.log(Scoring(player8,player3, player1))
//     const teamA = {name: "OSFP", players: [player1, player2, player3, player4, player5, player6, player7, player8]} 
//     const teamB = {name: "PAO", players: [player1, player2, player3, player4, player5, player6, player7, player8]} 
//     const [time, setTime] = useState({m:0, s:0})
//     const [teamAPlayers, setTeamAPlayers] = useState(TeamReady(teamA.players))
//     const [teamBPlayers, setTeamBPlayers] = useState(TeamReady(teamB.players))
//     const [teamAScore, setTeamAScore] = useState(0)
//     const [teamBScore, setTeamBScore] = useState(0)
//     const [playerReward, setPlayerReward] = useState(0)
//     const [decisionStatus, setDecisionStatus] = useState(false)
//     const [gameStatus, setGameStatus] = useState(true)
//     const [startTimer,setStartTimer] = useState(true)
//     const [isGameEnded, setGameEnded] = useState(false)
//     const [gameEventHistory, setGameEventHistory] = useState()
//     console.log(time.m)

//     const getScore= (team) =>{
//         if(team === "A"){
//             setTeamAScore(teamAScore+1)
//         }else{
//             setTeamBScore(teamBScore+1)
//         }
//     }

//     const getDecisionEndPoint = (decision) =>{
//         if (decision === "Shoot"){
//             let results = Scoring(player8,player3, player1);
//             console.log(decision)
//             if(results){
//                 // const newEvent = gameEventHistory
//                 const eventTime = time.m
//                 const newEvent = `${player1.name} Scored!!!!!!` 
//                 setGameEventHistory(newEvent)
//                 if(teamA.players.includes(player1)){
//                     setTeamAScore(teamAScore +1)
//                 }else{
//                     setTeamBScore(teamBScore +1)
//                 }
//             }
//             // const newEvent = gameEventHistory
//             const eventTime = time.m
//             const newEvent = `${player1.name} missed an opportunity` 
//             setGameEventHistory(newEvent)
            
//         }
//         setDecisionStatus(!decisionStatus)
//         setGameStatus(true)
//         setStartTimer(true)
//     }

//     const setGameTime = (time)=>{
//         setTime(time)
//     }
//     const endGame = ()=>{
//         setGameEnded(true)
//     }
    
//     const getOpportunity = ()=>{
//         setDecisionStatus(!decisionStatus)
//         console.log("change")
//         setGameStatus(false)
//         // if(gameStatus === true){
//         //     setGameStatus(!gameStatus)
//         // }else{
//         //     setGameStatus(true)
//         // }
//         setStartTimer(false)
//     }


//     return(
//         <div>
//             {/* <h2>keys {Object.keys(gameEventHistory)}   and values {Object.values(gameEventHistory)}</h2> */}
//             <h2>{gameEventHistory}</h2>
//             <ScoreBoard homeTeam={teamA} awayTeam={teamB} homeTeamScore={teamAScore} awayTeamScore={teamBScore}/>
//             <TeamDisplay team={teamA}/>
//             <TeamDisplay team={teamB}/>
//             {gameStatus? <Game getOpportunity = {getOpportunity} getScore = {getScore}/>:null}
//             {isGameEnded ? <h2>Finished</h2> : <Timer startTimer = {startTimer} setGameTime = {setGameTime} decision={decisionStatus} isGameEnded={isGameEnded} endGame = {endGame}/>}
//             {decisionStatus? <DisplayDecisions getDecisionEndPoint = {getDecisionEndPoint}/> : null}
//             <button onClick={getOpportunity}>aaaaaa</button>
//         </div>
//     )