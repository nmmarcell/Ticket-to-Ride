import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

const AvatarContainer = () => {
    const {currentPlayer} = useSelector(state => state.game);
    return ( 
        <div>
            {
                useSelector(state => state.game.players).map((elem, i) => {
                   return (<Avatar key={i+1} playerData={elem} active={i === currentPlayer}/>);
                })
            }
        </div>
     );
}
 
export default AvatarContainer;