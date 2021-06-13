import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { LobbyContext } from "./LobbyContext";
import { useSelector } from "react-redux";

const AvatarContainer = () => {
    const [current, setCurrent] = useState(useSelector(state => state.game.currentPlayer));
    
    return ( 
        <div>
            {
                useSelector(state => state.game.players).map((elem, i) => {
                   return (<Avatar key={i+1} playerData={elem} active={i === current ? true : false}/>);
                })
            }
        </div>
     );
}
 
export default AvatarContainer;