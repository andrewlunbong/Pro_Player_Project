import { useEffect, useRef, useState } from "react"


const Timer = ({time})=>{
    
    // const [timeForDisplayng, setTimeDisplayng] = useState(time)
    // let intervStorage = useRef ()
    // const [intervStorage, setIntervStorage] = useState()
    
    // const [decisionStatus, setDecisionStatus] = useState(decision)
    // const [finishGame, setFinishGame] = useState(isGameEnded)
    // const [pauseStatus, setPauseStatus] = useState()
    
   
    // const start = ()=>{
    //         setPauseStatus(false)
    //         run();
    //         // intervStorage = setInterval(run,500)
    //         setIntervStorage(setInterval(run,500))
        
    // }
    // const pause = ()=>{
    //     clearInterval(intervStorage)
    // }
    // const stop = ()=>{
    //     clearInterval(intervStorage)

    // }
    // var updateM = time.m, updateS = time.s;
    // const run = ()=>{
    //     if (!pauseStatus){
            
    //         if (updateS === 59){
    //             updateS = 0
    //             updateM++
    //         }
    //         updateS++
            
    //         if(updateM >= 90){
    //             endGame()
    //             // clearInterval(intervStorage)
    //             return stop()
    //         }else if(!finishGame){
    //             setGameTime({m:updateM, s:updateS})
    //             return setTime({m: updateM, s: updateS})
    //         }
    //     }

    // }

    // useEffect(()=>{
    //     if(decision){
            
    //         clearInterval(intervStorage)
    //         setPauseStatus(true)
    //         pause()
    //     }
    // },[decision])
    // useEffect(()=>{
    //     if(!startTimer && !pauseStatus){
    //         start()
    //     }
    // },[startTimer])



    return(
        <div>
        <h2>{time.m}:{time.s}</h2>
        </div>
    )


}

export default Timer



// const [time, setTime] = useState({m:0, s:0})
// // let intervStorage = useRef ()
// const [intervStorage, setIntervStorage] = useState()

// const [decisionStatus, setDecisionStatus] = useState(decision)
// const [finishGame, setFinishGame] = useState(isGameEnded)
// const [pauseStatus, setPauseStatus] = useState()


// const start = ()=>{
//         setPauseStatus(false)
//         run();
//         // intervStorage = setInterval(run,500)
//         setIntervStorage(setInterval(run,500))
    
// }
// const pause = ()=>{
//     clearInterval(intervStorage)
// }
// const stop = ()=>{
//     clearInterval(intervStorage)

// }
// var updateM = time.m, updateS = time.s;
// const run = ()=>{
//     if (!pauseStatus){
        
//         if (updateS === 59){
//             updateS = 0
//             updateM++
//         }
//         updateS++
        
//         if(updateM >= 90){
//             endGame()
//             // clearInterval(intervStorage)
//             return stop()
//         }else if(!finishGame){
//             setGameTime({m:updateM, s:updateS})
//             return setTime({m: updateM, s: updateS})
//         }
//     }

// }

// useEffect(()=>{
//     if(decision){
        
//         clearInterval(intervStorage)
//         setPauseStatus(true)
//         pause()
//     }
// },[decision])
// // useEffect(()=>{
// //     if(!startTimer && !pauseStatus){
// //         start()
// //     }
// // },[startTimer])



// return(
//     <div>
//     <h2>{time.m}:{time.s}</h2>
//     <button onClick={start}>Start</button>
//     <button onClick={pause}>Pause</button>
//     </div>
// )