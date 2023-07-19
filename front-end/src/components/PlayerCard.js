import React from 'react'
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {

    // <div className={"card card-side shadow-xl w-10/12 mt-6 " + colourToPosition[player.position]}>

    const colourToPosition = {
        GK: "bg-red-600",
        RB: "bg-yellow-600",
        CB: "bg-yellow-600",
        LB: "bg-yellow-600",
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
            <div className="card card-side bg-base-100 shadow-xl w-10/12 mt-6">
                <Link to={"/players/" + player.id}><figure className="rounded-lg pl-5 w-36 pt-6"><img src={player.image} alt={player.name} /></figure></Link>
                <div className="card-body">
                    <div className="flex flex-row">
                        <Link className="card-title basis-1/2" to={"/players/" + player.id}>{player.name}</Link>
                        <h2 className="card-title basis-1/2">{firstChoiceOrSub[player.substitute]}</h2>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-1 text-center place-items-start">
                            <div>
                                <p>Nationality</p>
                                <img src={player.nationality_image} alt={player.nationality} className="w-10 m-auto" />
                            </div>
                            <div>
                                <p>Kit number</p>
                                <div className="border-solid border-2 p-2 border-gray-600 w-12 rounded-lg m-auto">{player.kit_number}</div>
                            </div>
                            <div>
                                <p>Position</p>
                                <div className={"border-solid p-2 rounded-lg w-12 text-white m-auto " + colourToPosition[player.position]}>{player.position}</div>
                            </div>
                            <div>
                                <p>Overall</p>
                                <div className={"border-solid p-2 rounded-lg w-12 text-white m-auto " + colourToOverall(player)}>{player.overall}</div>
                            </div>
                            <div>
                                <p>Age</p>
                                <div className={"border-solid p-2 rounded-lg w-12 m-auto "}>{player.age}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerCard