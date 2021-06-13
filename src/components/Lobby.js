import { useContext, useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import "../index.css";
import { Col, Container, Row } from "react-bootstrap";
import Portrait from "./Portrait";
import { LobbyContext } from "./LobbyContext";
import { connect } from "react-redux";
import gameActions from "../store/game/action";
import serverActions from "../store/connection/action";
import socket from "../socket";
import { useHistory } from "react-router";

const Lobby = (props) => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    let history = useHistory();

    useEffect(() => {
        socket.on('player-joined', (data) =>{
            setTimeout(() => {
                socket.emit('get-state', data.roomId, (resp) => {
                    if(resp.status === 'ok') {
                        const serverState = JSON.parse(resp.state);
                        props.updateState(serverState);
                    }  
                    else console.log(resp.message);
                });
            }, 500);
        });

        socket.on('room-is-full', (data) => {
            history.push('/game');
        });
    }, []);

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
                    <LinkButton whereto="/game" txt="Indítás"/>
                </Container>
            </div>
     );
}

function mapState(state) {
    const { players } = state.game;
    const { game } = state;
    const { roomID } = state.connection;
    return { players, roomID, game };
}

const actionCreator = {
    addPlayer: gameActions.addPlayer,
    updateState: gameActions.updateState,
    syncState: serverActions.syncState,
    getState: serverActions.getState
};
 
export default connect(mapState, actionCreator)(Lobby);