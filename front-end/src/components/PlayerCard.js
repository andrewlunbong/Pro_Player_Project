import React from 'react'

const PlayerCard = ({ player }) => {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl w-10/12 mt-6">
                <figure><img src={player.image} alt={player.name} className="rounded-lg pl-5" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{player.name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See player</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerCard