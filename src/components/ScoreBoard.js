import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../index.css";
import { LobbyContext } from "./LobbyContext";
import Score from "./Score";

const ScoreBoard = () => {
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);
    const scores = [];
    scores.push(
        <Score key="1" name="Player 1" longest="true" road="10" goalsplus="32" goalsminus="5" />
    );

    for(let i = 1; i <=  4; i++) {
       scores.push(<Score key={i+1} name={'Player ' + i} longest="false" road="5" goalsplus="21" goalsminus="3" />);
    }

    return ( 
        <div className="scoreBoardStyle">
            <Container>
                <h1>Eredmények</h1>
                <Row>
                    <Col>
                        <Score name="Player 1" longest="true" road="10" goalsplus="32" goalsminus="5"/>
                    </Col>
                    <Col>
                        <Score name="Player 2" longest="false" road="10" goalsplus="32" goalsminus="5" />
                    </Col>
                    <Col>
                        <Score name="Player 3" longest="false" road="10" goalsplus="32" goalsminus="5" />
                    </Col>

                    <Col>
                        <Score name="Player 4" longest="false" road="10" goalsplus="32" goalsminus="5" />
                    </Col>
                    <Col>
                        <Score name="Player 4" longest="false" road="10" goalsplus="32" goalsminus="5" />
                    </Col>
                </Row>
                <h2>Nyertes: Player 1</h2>
            </Container>
        </div>
     );
}
 
export default ScoreBoard;