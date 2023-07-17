
const Passing = (player, defender)=>{

    let passingProbability = 0;
    let missingProbability = 0;
    let scoring =""
    let passingProbabilityTable = []
    defenderAVG = (defender.slideTackle + defender.standTackle)/2;
    playerAVG =  (player.shotPower + player.finishing + player.attPosition )/ 3;

    if((defenderAVG-7)<=playerAVG && (defenderAVG+7)>=playerAVG){
        passingProbability = 5;
        missingProbability = 10-5;
        for (let i=0; i< passingProbability; i++){
            passingProbabilityTable.push("P")
        }
        for (let i=0; i< missingProbability; i++){
            passingProbabilityTable.push("NP")
        }

        
    }
    else if( (defenderAVG-7) >= playerAVG ){
        missingProbability = getRandomInt(6,8);
        passingProbability = 10- missingProbability;
        for (let i=0; i< passingProbability; i++){
            passingProbabilityTable.push("S")
        }
        for (let i=0; i< missingProbability; i++){
            passingProbabilityTable.push("M")
        }

    }
    else{
        passingProbability = getRandomInt(6,8);
        missingProbability = 10- missingProbability;
        for (let i=0; i< passingProbability; i++){
            passingProbabilityTable.push("S")
        }
        for (let i=0; i< missingProbability; i++){
            passingProbabilityTable.push("M")
        }

    }

    scoring = passingProbabilityTable[getRandomInt(0,10)]
    if (scoring === "S"){
        console.log("Pass")
        return true
    }else{
        console.log("Missed faking idiot")
        return false
        // should probs be a bool return
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



}
export default Passing
