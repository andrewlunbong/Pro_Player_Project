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


    const playersByTeam = teamSelected?.players?.map((player) => {
        return <PlayerCard
            key={player.id}
            player={player}
        />
    })


    console.log('teamSelected :>> ', teamSelected);
    return (
        <>
            {teamSelected && (
                <div className="m-auto mt-6 mb-6 w-10/12">
                    <div className="flex flex-wrap flex-row pl-36">
                        <div className="basis-1/4 bg-cover">
                            <img src={teamSelected.badge} alt={teamSelected.name}></img>
                        </div>
                        <div className="basis-3/4">
                            <h1 className="text-5xl font-bold mb-3">{teamSelected.name}</h1>
                            <h1 className='"text-5xl font-bold mb-5"'>{teamSelected.league.name}</h1>
                            <div className="stats shadow justify-items-center text-center">
                                <div className="stat bg-indigo-600">
                                    <div className=" text-white w-20 ">Overall</div>
                                    <div className="stat-value text-white">{teamSelected.ovr}</div>
                                </div>
                                <div className="stat bg-yellow-600">
                                    <div className="text-white w-20">Defense</div>
                                    <div className="stat-value text-white">{teamSelected.defe}</div>
                                </div>
                                <div className="stat bg-green-600">
                                    <div className="text-white w-20">Mid Field</div>
                                    <div className="stat-value text-white">{teamSelected.mid}</div>
                                </div>
                                <div className="stat bg-blue-600">
                                    <div className="text-white w-20">Attack</div>
                                    <div className="stat-value text-white">{teamSelected.att}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">{playersByTeam}</div>
                </div>
            )}
        </>
    )
}

export default TeamPage