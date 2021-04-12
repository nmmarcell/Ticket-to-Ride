import { Col, Container, Row } from "react-bootstrap";
import "../index.css";
import Map from "./Map";
import Card from "./Card";
import Avatar from "./Avatar";
import CardHolder from "./CardHolder";
import AvatarContainer from "./AvatarContainer";
import History from "./History";

const trainDeckIn = {
    marginTop: "-5px"
}

const Game = () => {
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
                    <Card type="trainBack"/>
                    <CardHolder number="5" type="train" selectedStyle="selectedCardStyleLeft"/>
                </Col>
            </Row>
            <Row style={{paddingTop: "20px"}}>
                <Col sm={4}>
                    <CardHolder number="3" type="ticket" />
                </Col>
                <Col sm={8} style={{alignItems:"center"}}>
                    <CardHolder number="5" type="train" selectedStyle="selectedCardStyleUp"/>
                </Col>

            </Row>
        </Container>
     );
}
 
export default Game;