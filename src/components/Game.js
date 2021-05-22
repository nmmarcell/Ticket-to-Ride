import { Col, Container, Row } from "react-bootstrap";
import "../index.css";
import Map from "./Map";
import Card from "./Card";
import Avatar from "./Avatar";
import CardHolder from "./CardHolder";
import AvatarContainer from "./AvatarContainer";
import History from "./History";
import { useState } from "react";
import { connect } from "react-redux";
import gameActions from "../store/game/action";

const trainDeckIn = {
    marginTop: "-5px"
}

const Game = (props) => {

    return ( 
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
                    <Card type="ticketBack"/>
                    <Card type="trainBack" onClick={() => props.drawCard()}/>
                    <CardHolder number="5" type="deck" hand="false"/>
                </Col>
            </Row>
            <Row style={{paddingTop: "20px"}}>
                <Col sm={4}>
                    <CardHolder number="3" type="tickets" hand="false"/>
                </Col>
                <Col sm={8} style={{alignItems:"center"}}>
                    <CardHolder number="5" type="hand" selectedStyle="selectedCardStyleUp"/>
                </Col>

            </Row>
        </Container>
     );
}

function mapState(state) {
    const { gameState } = state.game;
    return { gameState };
}

const actionCreator = {
    changeGameState: gameActions.changeGameState
};
 
export default connect(mapState, actionCreator)(Game);