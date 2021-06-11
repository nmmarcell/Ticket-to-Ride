import mapImage from "../assets/map.jpg";
import "../index.css";
import {ticketToRideData} from "../assets/ticket-to-ride-data";
import City from "./City";
import Connection from "./Connection";
import gameActions from "../store/game/action";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Map = (props) => {
    const [activeConnections, setActiveConnections] = useState([]);
    const [selectedCities, setSelectedCities] = useState([null, null]);

    const citySelect = (connections) => {
        setActiveConnections(connections);
        props.changeGameState("BUILD_CONNECTION");
    }

    const cityDeselect = () => {
        setActiveConnections([]);
        props.changeGameState("NEW_ROUND");
    }

    const buildable = (connection) => {
        const connColor = connection.color;
        const trains = props.currentCards.reduce((acc, elem) => elem.color === connColor ? acc + 1 : acc, 0);
        return trains >= connection.elements.length;
    }

    useEffect(() => {

    })

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
                        return (
                            <Connection conn={connection} built={true}/>
                        );
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
    const { players, currentCards } = state.game;
    return { players, currentCards };
}

const actionCreator = {
    changeGameState: gameActions.changeGameState
};
 
export default connect(mapState, actionCreator)(Map);