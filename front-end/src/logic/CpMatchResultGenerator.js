

function CpMatchResultGenerator(team1, team2) {
    let team1ScoringProbability = 0;
    let team2ScoringProbability = 0;
    let team1ScoringProbabilityTable = []
    let team2ScoringProbabilityTable = []
    let team1Score = 0
    let team2Score = 0

    if((team1.ovr-7)<=team2.ovr && (team1.ovr+7)>=team2.ovr){
        team1ScoringProbability = getRandomInt(0,4);
        team2ScoringProbability = getRandomInt(0,4);
        for (let i=0; i<= team1ScoringProbability; i++){
            team1ScoringProbabilityTable.push(i)
        }
        for (let i=0; i<= team2ScoringProbability; i++){
            team2ScoringProbabilityTable.push(i)
        }

        
    }
    else if( (team1.ovr-7) > team2.ovr){
        team1ScoringProbability = getRandomInt(1,5);
        team2ScoringProbability = getRandomInt(0,2);
        for (let i=0; i<= team1ScoringProbability; i++){
            team1ScoringProbabilityTable.push(i)
        }
        for (let i=0; i<= team2ScoringProbability; i++){
            team2ScoringProbabilityTable.push(i)
        }

    }
    else{
        team1ScoringProbability = getRandomInt(0,2);
        team2ScoringProbability = getRandomInt(1,5);
        for (let i=0; i<= team1ScoringProbability; i++){
            team1ScoringProbabilityTable.push(i)
        }
        for (let i=0; i<= team2ScoringProbability; i++){
            team2ScoringProbabilityTable.push(i)
        }
    }

    team1Score = team1ScoringProbabilityTable[getRandomInt(team1ScoringProbabilityTable[0], team1ScoringProbabilityTable[team1ScoringProbabilityTable.length - 1])]
    team2Score = team2ScoringProbabilityTable[getRandomInt(team2ScoringProbabilityTable[0], team2ScoringProbabilityTable[team2ScoringProbabilityTable.length - 1])]


    team1.score = team1Score
    team2.score = team2Score
    console.log('team1ScoringProbabilityTable :>> ', team1ScoringProbabilityTable);
    console.log('team2ScoringProbabilityTable :>> ', team2ScoringProbabilityTable);
    // console.log('getRandomInt(team1ScoringProbabilityTable[0], team1ScoringProbabilityTable[team1ScoringProbabilityTable.length - 1]) :>> ', getRandomInt(team1ScoringProbabilityTable[0], team1ScoringProbabilityTable[team1ScoringProbabilityTable.length - 1]));
    // console.log('getRandomInt(team2ScoringProbabilityTable[0], team2ScoringProbabilityTable[team2ScoringProbabilityTable.length - 1]) :>> ', getRandomInt(team2ScoringProbabilityTable[0], team2ScoringProbabilityTable[team2ScoringProbabilityTable.length - 1]));
    // console.log('team1Score :>> ', team1Score);
    // console.log('team2Score :>> ', team2Score);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}


const teamA = {
    "name": "Team A",
    "ovr": 73,
    "score": 0
}
const teamB = {
    "name": "Team B",
    "ovr": 93,
    "score": 0
}
const teamC = {
    "name": "Team C",
    "ovr": 68,
    "score": 0
}
const teamD = {
    "name": "Team D",
    "ovr": 80,
    "score": 0
}

CpMatchResultGenerator(teamA, teamC)

console.log('TeamB.score :>> ', teamA.score);
console.log('TeamC.score :>> ', teamC.score);

// export default CpMatchResultGenerator