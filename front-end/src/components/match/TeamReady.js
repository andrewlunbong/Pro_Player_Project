const TeamReady = (team)=>{
    const updateTeam = {
        gk:{},
        def:[],
        mid:[],
        st:[]
    }
    const allgk = team.filter((player)=> player.position === "gk" ).sort((a,b)=> a.ovr > b.ovr ? -1 : 1)
    updateTeam.gk = allgk[0]
    const alldef = team.filter((player)=> player.position === "df").sort((a, b) => a.ovr > b.ovr? -1 : 1)
    for(let i=0; i < 2; i++){
        updateTeam.def.push(alldef[i])
    }
    const allmid = team.filter((player)=> player.position === "mid").sort((a, b) => a.ovr > b.ovr? -1 : 1)
    for(let i=0; i < 2; i++){
        updateTeam.mid.push(allmid[i])
    }
    const allst = team.filter((player)=> player.position === "st").sort((a, b) => a.ovr > b.ovr? -1 : 1)
    for(let i=0; i < 2; i++){
        updateTeam.st.push(allst[i])
    }

    return updateTeam


}
export default TeamReady