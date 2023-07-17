import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProplayerService from '../services/ProplayerService';

const TeamPage = () => {

    const{ teamId } = useParams();
    const [teamSelected, setTeamSelected] = useState(null)

    const getTeam = (teamIdURL) => {
        ProplayerService.getOneTeam(teamIdURL)
            .then((teamData) =>
                setTeamSelected(teamData)
            );
    };
    useEffect(() => {
        !teamSelected && getTeam(teamId)
    }, [teamSelected]);


    console.log('teamSelected :>> ', teamSelected);
  return (
    <div>TeamPage</div>
  )
}

export default TeamPage