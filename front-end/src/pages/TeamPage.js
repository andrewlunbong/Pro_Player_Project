import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProplayerService from '../services/ProplayerService';
import PlayerCard from '../components/PlayerCard';

const TeamPage = () => {

    const { teamId } = useParams();
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

    // const leaguesList = leagues.map((league) => {
    //     return <LeagueCard
    //         key={league.id}
    //         league={league}
    //         setSelectedLeague={setSelectedLeague}
    //     />
    // })

    const playersByTeam = teamSelected?.players?.map((player) => {
        return <PlayerCard
            key={player.id}
            player={player}
        />
    })


    console.log('teamSelected :>> ', teamSelected);
    return (
        <>
            <div className="m-auto mt-6 mb-6 w-10/12">
                <h1>Team Page: </h1>
                <div className="flex flex-wrap justify-center">{playersByTeam}</div>
            </div>

        </>
    )
}

export default TeamPage