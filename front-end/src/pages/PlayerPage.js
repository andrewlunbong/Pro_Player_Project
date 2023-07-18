import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProplayerService from '../services/ProplayerService';

const PlayerPage = () => {

    const { playerId } = useParams();
    const [player, setPlayer] = useState(null)

    const getPlayer = (playerIdURL) => {
        ProplayerService.getOnePlayer(playerIdURL)
            .then((playerData) =>
                setPlayer(playerData)
            );
    };
    useEffect(() => {
        !player && getPlayer(playerId)
    }, [player]);

    const colourToPosition = {
        GK: "bg-red-600",
        RB: "bg-yellow-600",
        CB: "bg-yellow-600",
        LB: "bg-yellow-600",
        RWB:"bg-yellow-600",
        RCB: "bg-yellow-600",
        LCB: "bg-yellow-600",
        CDM: "bg-green-600",
        CM: "bg-green-600",
        CAM: "bg-green-600",
        RDM: "bg-green-600",
        LDM: "bg-green-600",
        RCM: "bg-green-600",
        LCM: "bg-green-600",
        LM: "bg-green-600",
        RM: "bg-green-600",
        ST: "bg-blue-600",
        RW: "bg-blue-600",
        LW: "bg-blue-600"
    };

    const firstChoiceOrSub = {
        false: "First Choice",
        true: "Substitute"
    };

    const colourToOverall = (player) => {
        if (player.overall >= 50 && player.overall < 60) {
            return "bg-red-500"
        } else if (player.overall >= 60 && player.overall < 70) {
            return "bg-orange-500"
        } else if (player.overall >= 70 && player.overall < 80) {
            return "bg-yellow-400"
        } else if (player.overall >= 80 && player.overall < 90) {
            return "bg-lime-400"
        } else {
            return "bg-green-700"
        }
    };

    return (
        <>
            {player && (
                <>
                    <div>PlayerPage</div>
                    <div className="m-auto mt-6 mb-6 w-10/12">
                        <div className="flex flex-row">
                            <div className="basis-8/12">
                                <div className="flex flex-col">
                                    <div className="basis-1/2 mr-5">
                                        <div className="card card-side bg-base-100 shadow-xl mb-3">
                                            <figure className="rounded-lg pl-5 w-36 pt-5"><img src={player.image} alt={player.name} /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{player.name}</h2>
                                                <div className="grid grid-cols-4 gap-1 text-center place-items-start">
                                                    <div>
                                                        <p>{player.nationality}</p>
                                                        <img src={player.nationality_image} alt={player.nationality} className="w-10 m-auto" />
                                                    </div>
                                                    <div>
                                                        <p>Overall</p>
                                                        <div className={"border-solid p-2 rounded-lg w-12 text-white m-auto " + colourToOverall(player)}>{player.overall}</div>
                                                    </div>
                                                    <div>
                                                        <p>Kit number</p>
                                                        <div className="border-solid border-2 p-2 border-gray-600 w-12 rounded-lg m-auto">{player.kit_number}</div>
                                                    </div>
                                                    <div>
                                                        <p>Position</p>
                                                        <div className={"border-solid p-2 rounded-lg w-12 text-white m-auto " + colourToPosition[player.position]}>{player.position}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="basis-1/2 mr-5">
                                        <div className="card card-side bg-base-100 shadow-xl mb-3">
                                            <figure className="rounded-lg pl-5 w-36 pt-2"><img src={player.team.badge} alt={player.team.name} /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title basis-1/2">{player.team.name}</h2>
                                                <div className="grid grid-cols-2 gap-1 text-center place-items-start">
                                                    <div>
                                                        <p>League</p>
                                                        <p className="mt-3">{player.team.league.name}</p>
                                                    </div>
                                                    <div>
                                                        <p>Overall</p>
                                                        <div className={"border-solid p-2 rounded-lg w-12 text-white m-auto " + colourToOverall(player)}>{player.team.ovr}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-4/12">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Player Information</h2>
                                        <div className="grid grid-cols-2 gap-x-16 gap-y-5 place-items-start">
                                            <div>
                                                <p>Heigth</p>
                                            </div>
                                            <div>
                                                <p>{player.height} cm.</p>
                                            </div>
                                            <div>
                                                <p>Weight</p>
                                            </div>
                                            <div>
                                                <p>{player.weight} kg.</p>
                                            </div>
                                            <div>
                                                <p>Preferred Foot</p>
                                            </div>
                                            <div>
                                                <p>{player.preferred_foot}</p>
                                            </div>
                                            <div>
                                                <p>Birth Date</p>
                                            </div>
                                            <div>
                                                <p>{player.birth_date}</p>
                                            </div>
                                            <div>
                                                <p>Age</p>
                                            </div>
                                            <div>
                                                <p>{player.age}</p>
                                            </div>
                                            <div>
                                                <p>Role</p>
                                            </div>
                                            <div>
                                                <p>{firstChoiceOrSub[player.substitute]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Goalkeeper</h2>
                                        <div className="grid grid-cols-2 gap-x-16 gap-y-5 place-items-start">
                                            <div>
                                                <p>Heigth</p>
                                            </div>
                                            <div>
                                                <p>{player.height} cm.</p>
                                            </div>
                                            <div>
                                                <p>Weight</p>
                                            </div>
                                            <div>
                                                <p>{player.weight} kg.</p>
                                            </div>
                                            <div>
                                                <p>Preferred Foot</p>
                                            </div>
                                            <div>
                                                <p>{player.preferred_foot}</p>
                                            </div>
                                            <div>
                                                <p>Birth Date</p>
                                            </div>
                                            <div>
                                                <p>{player.birth_date}</p>
                                            </div>
                                            <div>
                                                <p>Age</p>
                                            </div>
                                            <div>
                                                <p>{player.age}</p>
                                            </div>
                                            <div>
                                                <p>Role</p>
                                            </div>
                                            <div>
                                                <p>{firstChoiceOrSub[player.substitute]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PlayerPage