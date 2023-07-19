import PlayerDisplay from "./PlayerDisplay"

const TeamDisplay = ({team})=>{

const allPlayers = team.players.map((player, index)=>{
    return <PlayerDisplay key={index} player = {player}  index = {index}/>
})

return(
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {allPlayers}
    </tbody>
  </table>
    {/* <ul>
        {allPlayers}
    </ul> */}
</div>
)

}

export default TeamDisplay