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
                    <CardHolder number="5" type="train" styleToUse={trainDeckIn}/>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <CardHolder number="3" type="ticket"/>
                </Col>
                <Col sm={8}>
                    <CardHolder number="4" type="train"/>
                </Col>

            </Row>
        </Container>
     );
}
 
export default Game;