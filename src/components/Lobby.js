import { useContext, useState } from "react";
import LinkButton from "./LinkButton";
import "../index.css";
import { Col, Container, Row } from "react-bootstrap";
import Portrait from "./Portrait";
import { LobbyContext } from "./LobbyContext";

const Lobby = () => {
    let random = Math.floor(Math.random() * 900000) + 100000;
    const [lobbyNumber, setLobbyNumber] = useState(random);
    const {lobbyValue, setLobbyValue} = useContext(LobbyContext);

    const avatars = [];
    avatars.push(
        <Col>
            <Portrait size="100" number={lobbyValue.picture} />
            <p><i>{lobbyValue.name}</i></p>
        </Col>
    );

    for(let i = 1; i <= lobbyValue.numberOfPlayers - 1; i++) {
        avatars.push(
            <Col>
                <Portrait size="100" number="5"/>
                <p><i>Player {i}</i></p>
            </Col>
        );
    }

    return ( 
            <div className="lobbyStyle">
                <Container className="lobbyDivStyle">
                    <h2>A váró kódja: {lobbyNumber}</h2>
                    <Row style={{marginTop: "40px"}}>
                        {avatars}
                    </Row>
                    <LinkButton whereto="/" txt="Vissza a menübe" />
                    <LinkButton whereto="/game" txt="Indítás" />
                </Container>
            </div>
     );
}
 
export default Lobby;