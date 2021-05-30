import mapImage from "../assets/map.jpg";
import "../index.css";
import {ticketToRideData} from "../assets/ticket-to-ride-data";
import City from "./City";
import Connection from "./Connection";
import gameActions from "../store/game/action";
import { useState } from "react";
import { connect } from "react-redux";

const Map = (props) => {
    const [activeConnections, setActiveConnections] = useState([]);

    const citySelect = (connections) => {
        setActiveConnections(connections);
        props.changeGameState("BUILD_CONNECTION");
    }

    const cityDeselect = () => {
        setActiveConnections([]);
        props.changeGameState("NEW_ROUND");
    }

    return ( 
        <>
            <img src={mapImage} alt="game map" className="mapStyle"/>
            {
                Object.values(ticketToRideData.cities).map((e, i) => { //városok felrajzolása a térképre
                    return (
                        <City key={i} city={e} onSelect={citySelect} onDeselect={cityDeselect}/>
                    );
                })
            }
            {
                props.players.map(player => { //már megépített connectionök felrajzolása a térképre
                    player.builtConnections.map(connection => {

                    });
                })
            }
            {
                activeConnections.map(connection => {
                    return (
                        <Connection conn={connection}/>
                    );
                })
            }
        </> 
    );
}

function mapState(state) {
    const { players } = state.game;
    return { players };
}

const actionCreator = {
    changeGameState: gameActions.changeGameState
};
 
export default connect(mapState, actionCreator)(Map);