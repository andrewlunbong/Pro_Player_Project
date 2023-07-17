const GameGenerator=({teams})=>{
    const premierLeagueTeams = []
    const championshipTeams =[]
    const dates = []
    const matchesForPremierLeagueTeams = []
    const matchesForChampionshipTeams = []

    createMatchesForTeams=(leagueTeams)=>{
        const tempMatchesForLeague = []
        for(let teamA of leagueTeams){
            for(let teamB of leagueTeams){
                if(teamA !== teamB){
                    tempMatchesForLeague.push({homeTeam:teamA, awayTeam: teamB})
                    
                }
                leagueTeams.shift()
            }
        }
        return tempMatchesForLeague
    }



    getTeamsByleague=()=>{
        for(let team of teams){
            if(team.league.name === "premierLeague"){

                premierLeagueTeams.push(team)
            }else{
                championshipTeams.push(team)
            }

        }
    }
    return{matchesForChampionshipTeams,matchesForPremierLeagueTeams}

}
export default GameGenerator