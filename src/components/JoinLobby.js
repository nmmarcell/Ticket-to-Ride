import CustomInput from './CustomInput';
import "../index.css";
import LinkButton from './LinkButton';
import Portrait from './Portrait';
import { useState, useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LobbyContext } from './LobbyContext';
import serverActions from "../store/connection/action";
import gameActions from "../store/game/action";
import { connect } from 'react-redux';
import { store } from '../store';

const JoinLobby = (props) => {
    const [lobbyNumber, setLobbyNumber] = useState(0);
    const [playerName, setPlayerName] = useState("");
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    const [portraitNumber, setPortraitNumber] = useState(0);

    const handleLobbyNumberChange = ((e) => {
        setLobbyNumber(e.target.value);
    });

    const handlePlayerNameChange = ((e) => {
        setPlayerName(e.target.value);
    });

    let isLinkDisabled = (playerName === "" || lobbyNumber < 100000 || lobbyNumber > 999999);

    useEffect(() => {
        setPortraitNumber(Math.floor(Math.random() * 5) + 1);
    }, []);

    const handleLobby = () => {
        if(!isLinkDisabled) {
            setLobbyValue({
                picture: portraitNumber,
                name: playerName
            });

            props.addPlayer(playerName, portraitNumber);
            props.joinRoom(lobbyNumber, store.getState().game);
        }
    };

    return ( 
        <div className="mainStyle">
            <div className="preLobbyStyle">
                <h2>Csatlakozás váróhoz</h2>
                <Container>
                    <Row className="preLobbyRow">
                        <Col>
                        <CustomInput text="Váró kódja: " inputType="text" inputName="joinLobbyNumber"
                            value={lobbyNumber} onChange={handleLobbyNumberChange}/> 
                        <br/>
                        <CustomInput inputName="joinLobbyPlayerName" text="Név: " inputType="text" 
                            value={playerName} onChange={handlePlayerNameChange} />
                        </Col>
                        <Col className="portraitCol">
                            <Portrait size="100" number={portraitNumber}/>
                        </Col>
                    </Row>
                </Container>
                <LinkButton whereto="/" txt="Vissza" size="300px"/>
                <LinkButton whereto="lobby" txt="Belépés" size="300px" isDisabled={isLinkDisabled}
                onClick={handleLobby}/>
            </div>
        </div>
    );
}
 
function mapState(state) {
    const {game} = state;
    return {game};
}

const actionCreator = {
    addPlayer: gameActions.addPlayer,
    joinRoom: serverActions.joinRoom
};
 
export default connect(mapState, actionCreator)(JoinLobby);