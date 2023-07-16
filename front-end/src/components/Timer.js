import { useEffect, useState } from "react"


const Timer = ({decisionStatus})=>{
    let counter = 0
    const [time,setTime] = useState({m:0 , s:0})
    const [intervStorage, setIntervStorage] = useState()
    const [timerStatus, setTimerStatus] = useState(decisionStatus)
   
    const start = ()=>{
        run();
        setIntervStorage(setInterval(run,30))
    }
    const pause = ()=>{
        clearInterval(intervStorage)
    }
    var updateM = time.m, updateS = time.s;
    const run = ()=>{
        if (updateS === 59){
            updateS = 0
            updateM++
        }
        updateS++

        return setTime({m: updateM, s: updateS})

    }
    useEffect(()=>{
        if(counter>0){
            pause()
        }
        counter++
    },[timerStatus])


    return(
        <div>
        <h2>{time.m}:{time.s}</h2>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        </div>
    )


}

export default Timer