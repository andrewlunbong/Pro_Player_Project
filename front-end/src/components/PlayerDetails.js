import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProplayerService from "../services/ProplayerService";

const PlayerDetails = () => {
    
    const{ playerId } = useParams();
    const [onePlayer, setOnePlayer] = useState(null);

    const getOnePlayer = (playerId) => {
        ProplayerService.getOnePlayer(playerId)
          .then((selectedPlayer) => 
            setOnePlayer(selectedPlayer)
          );
      };

    useEffect(() => {
        !onePlayer && getOnePlayer(playerId)
    },[onePlayer]);

    const { name = "", nationality = "" } = onePlayer

    return (
        <>
            <h1>{console.log(onePlayer)}</h1>
            <h1>{name}</h1>
        </>
    )

};

export default PlayerDetails;