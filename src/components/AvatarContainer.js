import { useContext } from "react";
import Avatar from "./Avatar";
import { LobbyContext } from "./LobbyContext";

const AvatarContainer = () => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);

    const avatars = [];
    avatars.push(
        <Avatar key="1" portrait={lobbyValue?.picture || 1 } name={lobbyValue?.name || "Player 1"} remainingTrains="45"/>
    );

    for(let i = 1; i <= (lobbyValue?.numberOfPlayers || 2) - 1; i++) {
        avatars.push(
            <Avatar key={i+1} portrait={i} name={"Player " + i} remainingTrains="45"/>
        );
    }

    return ( 
        <div>
            {avatars}
        </div>
     );
}
 
export default AvatarContainer;