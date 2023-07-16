import React from 'react'

// ANGEL

const LeagueCard = ({ league, setSelectedLeague }) => {

    const handleOnClickLeague = () => {
        setSelectedLeague(league)
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={league.logo} alt={league.name}></img></figure>
                <div className="card-body">
                    <h1 className="card-title justify-center">{league.name}</h1>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleOnClickLeague}>See teams</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeagueCard