import { message } from "antd";
import { useEffect, useState, useRef } from "react"


const Game = ({getOpportunity, getScore })=>{

    const teamAOvr = 56;
    const teamBOvr = 60;
    const [eventArray, setEventArray] = useState([])
    const [selectedEvent, setSelectedEvent]= useState()
    const [teamAScore, setTeamAScore] = useState(0)
    const timeout = useRef(0)
    const [teamBScore, setTeamBScore] = useState(0)
    const [player, setPlayer] = useState()
    const pause = useRef(false)
    
    // const [ready, setReady] = useState(false)
    // let ready = false

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
        if(eventArray && !pause.current){

            const i = Math.floor(Math.random()*10)
            console.log(i)
            if(eventArray[i] === "TA"){
                // setTeamAScore(prevscore=>prevscore+1)
                getScore("A")
            }
            else if( eventArray[i] === "TB"){
                // setTeamBScore(prevscore => prevscore + 1)
                getScore("B")
            }
            else if( eventArray[i] === "O"){
                console.log("It's an opportunity!!!!!!!!!")
                pause.current = true            
                getOpportunity();  
            }else{

                console.log("Nothing")
            }
        }
        timeout.current = setTimeout(pickRandomEvent,timer)
        
       
        
    }

    useEffect(() => {
        timeout.current = setTimeout(pickRandomEvent, 1000)
        return () => {
            clearTimeout(timeout.current)
        }
    }, [eventArray])

 
    useEffect(()=>{
        setEventArray(populateEventArray())
        // timeout.current = setTimeout(pickRandomEvent, 1000)
        // return () => {
        //     clearTimeout(timeout.current)
        // }
        
    },[])
    
   

    return(
        <div>
            <p>{teamAScore}</p>
            <p>{teamBScore}</p>
            {/* <button onClick={stop}>stop</button> */}
        </div>
    )

}
export default Game