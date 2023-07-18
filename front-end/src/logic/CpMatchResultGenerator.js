
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
    "ovr": 74,
    "score": 0
}

function CpMatchResultGenerator(team1, team2) {
    let team1ScoringProbability = 0;
    let team2ScoringProbability = 0;

    


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

console.log(CpMatchResultGenerator(teamA))

// export default CpMatchResultGenerator