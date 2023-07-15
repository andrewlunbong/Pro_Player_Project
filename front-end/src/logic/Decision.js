import { useState,useEffect } from "react"

class Decision{
dTree = {
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

    constructor(){

    };

    getTitles(node){
        if("s1" === node){
            return this.dTree.title
        }else if( node === "s3"){
            return this.dTree.children[1].title
        }else if(node === "s4"){
            return this.dTree.children[1].children[1].title
        }
    }
    getChildren(node){
        if("s1" === node){
            return this.dTree.children
        }else if( node === "s3"){
            return this.dTree.children[1].children
        }else if(node === "s4"){
            return this.dTree.children[1].children[1].children
        }
        return[]
    }

}
export default Decision

