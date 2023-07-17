import PlayerDisplay from "./PlayerDisplay"

const TeamDisplay = ({team})=>{

const allPlayers = team.map((player, index)=>{
    return <PlayerDisplay key={index} player = {player}  index = {index}/>
})

return(
    <ul>
        {allPlayers}
    </ul>
)

}

export default TeamDisplay