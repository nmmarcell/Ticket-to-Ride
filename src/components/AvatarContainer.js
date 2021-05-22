import { useContext } from "react";
import Avatar from "./Avatar";
import { LobbyContext } from "./LobbyContext";
import { useSelector } from "react-redux";

const AvatarContainer = () => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    const data = useSelector(state => state.game.players);

    const avatars = [];
    avatars.push(
        <Avatar key="1" playerData={data[0]}/>
    );

    for(let i = 1; i <= 1; i++) {
        avatars.push(
            <Avatar key={i+1} playerData={data[i]}/>
        );
    }

    return ( 
        <div>
            {avatars}
        </div>
     );
}
 
export default AvatarContainer;