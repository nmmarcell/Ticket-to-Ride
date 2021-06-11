import { useContext, useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import "../index.css";
import { Col, Container, Row } from "react-bootstrap";
import Portrait from "./Portrait";
import { LobbyContext } from "./LobbyContext";
import { connect } from "react-redux";
import gameActions from "../store/game/action";
import serverActions from "../store/connection/action";

const Lobby = (props) => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);

    useEffect(() => {
        
    }, []);

    function addPlayersToState() { 
        for(let i = 1; i < (lobbyValue?.numberOfPlayers || 0); i++) {
            let name = "Player " + i;
            props.addPlayer(name, i);
        }
    }

    return ( 
            <div className="lobbyStyle">
                <Container className="lobbyDivStyle">
                    <h2>A váró kódja: {props.roomID}</h2>
                    <Row style={{marginTop: "40px"}}>
                        {
                            props.players.map(player => {
                                return (
                                    <Col>
                                        <Portrait size="100" number={player.picture} />
                                        <p><i>{player.name}</i></p>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                    <LinkButton whereto="/" txt="Vissza a menübe" />
                    <LinkButton whereto="/game" txt="Indítás" onClick={addPlayersToState}/>
                </Container>
            </div>
     );
}

function mapState(state) {
    const { players } = state.game;
    const { roomID } = state.connection;
    return { players, roomID };
}

const actionCreator = {
    addPlayer: gameActions.addPlayer
};
 
export default connect(mapState, actionCreator)(Lobby);