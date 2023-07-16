import React from 'react'
import { useNavigate } from 'react-router-dom'

const TeamCard = ({team}) => {
    
    const navigate = useNavigate();

    const handleOnClickTeam = () => {
        navigate(`/teams/${team.id}`)
    }

    return (
        <>
            <div style={{width : "30%"}} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={team.badge} alt={team.name} className="rounded-xl w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{team.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={handleOnClickTeam}>See team</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard