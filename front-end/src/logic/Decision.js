import { useState,useEffect } from "react"

const Decision=()=>{
    const dTree = {
        node: "s1",
        title: "Here is your opportunity to shine. Take the right decision to help your team win: ",
        children: [
            {
                node: "s2",
                title: "Shoot to score for your team",
                endType: "Shoot"
            },
            {
                node: "s3",
                title: "Pass the ball to one of your teammates>",
                children:[
                    {
                        node: "s3",
                        title: "Pass the ball to Pedro",
                        endType: "Pass"
                    },
                    {
                        node: "s4",
                        title: "Dribble the defender to have better chances>",
                        children:[
                            {
                                node: "s5",
                                title: "Shoot you have more ",
                                endType: "Shoot"
                            },
                            {
                                node:"s6",
                                title: "Pass to Pedri. He is the best option",
                                endType: "Pass"
                            }
                        ]
                    }
                ]
            }
        ]
    }
    const [title, setTitle] = useState(dTree.title)
    const [options, setOptions] = useState(dTree.children)
    const [decision,setDecision] = useState("s1")

    

    const getTitles =(node)=>{
        if("s1" === node){
            return dTree.title
        }else if( node === "s3"){
            return dTree.children[1].title
        }else if(node === "s4"){
            return dTree.children[1].children[1].title
        }
    }
    const getChildren = (node)=>{
        if("s1" === node){
            return dTree.children
        }else if( node === "s3"){
            return dTree.children[1].children
        }else if(node === "s4"){
            return dTree.children[1].children[1].children
        }
    }

    if (!title || !options){
        return
    }


    const onClickDecision=(event)=>{
    
        console.log(event)
        
        setTitle(getTitles(event.target.name))
        setOptions(getChildren(event.target.name))

    }
 

    return (
       
        <div>
            <p>{title}</p>
            <button name={options[0].node} onClick={onClickDecision}>{options[0].title}</button>
            <button name={options[1].node} onClick={onClickDecision}>{options[1].title}</button>
            <p>hello</p>
        </div>
        
    )

}
export default Decision

// value={options[0].node}