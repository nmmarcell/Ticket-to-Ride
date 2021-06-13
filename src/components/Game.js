import { Col, Container, Row } from "react-bootstrap";
import "../index.css";
import Map from "./Map";
import Card from "./Card";
import CardHolder from "./CardHolder";
import AvatarContainer from "./AvatarContainer";
import History from "./History";
import { connect } from "react-redux";
import gameActions from "../store/game/action";
import { useEffect, useState } from "react";
import DestinationModal from "./DestinationModal";
import socket from "../socket";

const trainDeckIn = {
    marginTop: "-5px"
}

const Game = (props) => {
    const isCurrentPlayer = () => {
        return socket.id === props.players[props.currentPlayer].socketID;
    };

    useEffect(() => {
        socket.on('state-changed', (data) => {
            props.updateState(data.state);
        });

    }, []);

    useEffect(() => {
        if(props.gameState === "NEW_ROUND" && props.round === 1 && isCurrentPlayer())  {
            setModalShow(true); 
            props.changeGameState("NEW_DEST");
        }
    }, [props.currentPlayer]);

    useEffect(() => {
        if(props.gameState === "DRAWN_CARD2") props.nextPlayer(props.currentPlayer + 1);
    }, [props.gameState]);

    const [modalShow, setModalShow] = useState(false);

    const handleDestDrawClick = () => {
        if(isCurrentPlayer()) {
            if(props.gameState === "NEW_ROUND") {
                if(props.round > 1) {
                    setModalShow(true); 
                    props.changeGameState("NEW_DEST");
                }
                else alert("Ebben a körben már húztál célkártyát!");
            }
        }
        else alert("Most nem te vagy soron!");
    }

    return (
        <>
            <Container className="gameBackground" fluid>
                <Row>
                    <Col>
                        <History/>
                        <AvatarContainer/>
                    </Col>
                        
                    <Col className="tableStyle">
                        <Map/>
                    </Col>

                    <Col>
                        <Card type="ticketBack" onClick={handleDestDrawClick}/>
                        <Card type="trainBack"/>
                        <CardHolder number="5" type="deck"/>
                    </Col>
                </Row>
                <Row style={{paddingTop: "20px"}}>
                    <Col sm={4}>
                        <CardHolder number="3" type="tickets"/>
                    </Col>
                    <Col sm={8} style={{alignItems:"center"}}>
                        <CardHolder number="5" type="hand" selectedStyle="selectedCardStyleUp"/>
                    </Col>
                </Row>
            </Container>
            <DestinationModal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered/>
        </>
     );
}

function mapState(state) {
    const { gameState, round, currentPlayer, players} = state.game;
    return { gameState, round, currentPlayer, players };
}

const actionCreator = {
    changeGameState: gameActions.changeGameState,
    initializeStore: gameActions.initializeStore,
    nextPlayer: gameActions.nextPlayer,
    updateState: gameActions.updateState
};
 
export default connect(mapState, actionCreator)(Game);