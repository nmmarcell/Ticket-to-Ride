import { useContext, useEffect, useState } from 'react';
import CustomInput from './CustomInput';
import LinkButton from './LinkButton';
import Portrait from './Portrait';
import "../index.css";
import { Col, Container, Row } from 'react-bootstrap';
import { LobbyContext } from './LobbyContext';
import socket from "../socket.js";
import gameActions from "../store/game/action";
import serverActions from "../store/connection/action";
import { connect, useSelector } from 'react-redux';
import { store } from '../store';

let fancyFont = {
    fontFamily: "t2rtitle"
}

const NewLobby = (props) => {
    const [playerNumber, setPlayerNumber] = useState(0);
    const [playerName, setPlayerName] = useState("");
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    const [portraitNumber, setPortraitNumber] = useState(0);

    const handlePlayerNumberChange = (e) => {
        setPlayerNumber(e.target.value);
    };
    
    const handlePlayerNameChange = ((e) => {
        setPlayerName(e.target.value);
    });

    let isLinkDisabled = (playerName == "" || playerNumber <= 1 || playerNumber >= 6);

    useEffect(() => {
        setPortraitNumber(Math.floor(Math.random() * 5));
    }, []);

    const handleLobby = () => {
        if(!isLinkDisabled) {
            setLobbyValue({
                picture: portraitNumber,
                numberOfPlayers: playerNumber,
                name: playerName
            });

            props.addPlayer(playerName, portraitNumber, socket.id);
            props.createRoom(playerNumber, store.getState().game);
        }
    };

    return (
        <div className="mainStyle">
            <div className="preLobbyStyle">
                <h2>Új váró készítése</h2>
                <Container>
                    <Row className="preLobbyRow">
                        <Col>
                            <CustomInput inputName="numberOfPlayers" text="Hány játékos legyen? (2-5)" inputType="number"
                                value={playerNumber} onChange={handlePlayerNumberChange} />
                            <br/>
                            <CustomInput inputName="newLobbyPlayerName" text="Név: " inputType="text" 
                                value={playerName} onChange={handlePlayerNameChange} />
                        </Col>
                        <Col className="portraitCol">
                            <Portrait size="100" number={portraitNumber}/>
                        </Col>
                    </Row>
                </Container>
                
                <LinkButton whereto="/" txt="Vissza" size="300px"/>
                <LinkButton whereto="lobby" txt="Váró létrehozása" size="300px" isDisabled={isLinkDisabled}
                onClick={handleLobby}/>
            </div>
        </div> 
    );
}

function mapState(state) {
    const { roomID } = state.connection;
    const { game } = state;
    return { roomID, game };
}

const actionCreator = {
    createRoom: serverActions.createRoom,
    syncState: serverActions.syncState,
    addPlayer: gameActions.addPlayer
};
 
export default connect(mapState, actionCreator)(NewLobby);

