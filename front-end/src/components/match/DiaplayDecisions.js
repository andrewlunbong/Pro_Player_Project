import Decision from "../../logic/Decision"
import { useState } from "react"


const  DisplayDecisions = ()=>{
    const callDecisions = new Decision()
    const [decision,setDecision] = useState("s1")
    const [title, setTitle] = useState(callDecisions.getTitles(decision))
    const [options, setOptions] = useState(callDecisions.getChildren(decision))


    const onClickDecision=(event)=>{
    
        console.log(event)
        setDecision(event.target.name)
        
        setTitle(callDecisions.getTitles(event.target.name))
        setOptions(callDecisions.getChildren(event.target.name))

    }

    return (
       
        <div>
            {(title === "Shoot" || title === "Pass")? 
            <p>{title}</p>:
            <div>
            <p>{title}</p>
            <button name={options[0].node} onClick={onClickDecision}>{options[0].title}</button>
            <button name={options[1].node} onClick={onClickDecision}>{options[1].title}</button>
            </div>
             }
        </div>
        
    )

}

export default DisplayDecisions
