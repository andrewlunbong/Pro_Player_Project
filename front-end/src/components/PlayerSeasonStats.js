import React from "react";

const PlayerSeasonStats = () => {
  
  return (
<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead className="player-stats">
      <tr>
        <th>Stats</th> 
        <th></th> 
        <th></th> 
        <th></th> 
        <th></th> 
        <th>App</th> 
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>G</th>
        <th>A</th>
      </tr>
    </thead> 
    <tbody className="stats-number">
      <tr>
        <th></th> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td>20</td> 
        <td>15</td>
        <td>3</td>
        <td>2</td>
        <td>10</td>
        <td>3</td>
      </tr>
    </tbody> 
    </table>
</div>
)
};

export default PlayerSeasonStats;
