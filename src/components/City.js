import { useEffect, useState } from "react";
import "../index.css";
import {ticketToRideData} from "../assets/ticket-to-ride-data";
import { connect } from "react-redux";
import gameActions from "../store/game/action";

const City = (props) => {
    const [storedCity, setStoredCity] = useState(props.city);
    const [selected, setSelected] = useState(false);
    const [highlight, setHightlight] = useState(false);

    const handleClick = () => {
        if(props.gameState === "NEW_ROUND") {
            setSelected(!selected);
            const connections = Object.values(ticketToRideData.connections);
            const neighbours = connections.filter(e => e.to === storedCity.id || e.from === storedCity.id);
            if(!selected) {
                props.onSelect(neighbours);
            }
            
        }
        else if(props.gameState === "BUILD_CONNECTION") {
            setSelected(!selected);
            props.onDeselect();
        }
    };

    useEffect(() => {
        const isHighlighted = storedCity.city === props.hoverObject.city1 || storedCity.city === props.hoverObject.city2;
        setHightlight(isHighlighted);
    }, [props.hoverObject]);

    const cityStyle = {
        backgroundColor: highlight ? "red" : (selected ? "white" : "orange"),
        borderRadius: "50%",
        height: "20px",
        width: "20px",
        position: "absolute",
        left: (storedCity.x - 0.5) + "%",
        top: (storedCity.y - 0.5) + "%",
        border: highlight ? "3px dotted white" : (selected ? "3px dotted black" : "3px dotted white")
      }

    return (
        <div onClick={handleClick} style={cityStyle}></div>
    );
}

function mapState(state) {
    const { gameState, hoverObject } = state.game;
    return { gameState, hoverObject };
}

const actionCreator = {
    changeGameState: gameActions.changeGameState
};
 
export default connect(mapState, actionCreator)(City);