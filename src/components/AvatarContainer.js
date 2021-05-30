import { useContext, useState } from "react";
import Avatar from "./Avatar";
import { LobbyContext } from "./LobbyContext";
import { useSelector } from "react-redux";

const AvatarContainer = () => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    const [data, setData] = useState(useSelector(state => state.game.players)); 
    const current = useSelector(state => state.game.currentPlayer);

    return ( 
        <div>
            {
                data.map((elem, i) => {
                   return (<Avatar key={i+1} playerData={elem} active={i === current ? true : false}/>);
                })
            }
        </div>
     );
}
 
export default AvatarContainer;