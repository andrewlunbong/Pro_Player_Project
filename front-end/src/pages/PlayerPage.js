import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProplayerService from '../services/ProplayerService';

const PlayerPage = () => {

    // const { playerId } = useParams();
    // const [player, setPlayer] = useState(null)

    // const getPlayer = (playerIdURL) => {
    //     ProplayerService.getOnePlayer(playerIdURL)
    //         .then((playerData) =>
    //             setPlayer(playerData)
    //         );
    // };
    // useEffect(() => {
    //     !player && getPlayer(playerId)
    // }, [player]);

  return (
    <div>PlayerPage</div>
  )
}

export default PlayerPage