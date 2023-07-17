import React from 'react';

const DisplaySquad = ({ player, index }) => {
  return (
    
    <tr>
        <td>{index + 1}</td> 
        <td>{player.position}</td> 
        <td>{player.name}</td> 
        <td></td> 
        <td></td> 
        <td>{player.overall}</td> 
        <td>{player.age}</td>
      </tr>
      
    
  );
};

export default DisplaySquad;