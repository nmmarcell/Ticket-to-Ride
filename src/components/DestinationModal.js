import { useEffect, useState } from "react";
import { Modal, Row, Col, Button, Container } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import Card from "./Card";
import gameActions from "../store/game/action";

function DestinationModal(props) {

    const [dests, setDests] = useState([]);
    const [cont, setCont] = useState(false);
    const destinations = useSelector(state => state.game.destinations);
    const currentPlayer = useSelector(state => state.game.currentPlayer);
    const numberOfPlayers = useSelector(state => state.game.players).length;

    const [selected, setSelected] = useState([false, false, false]);
    const handleDestSelect = (ind) => {
        const copy = selected;
        copy[ind] = !copy[ind];
        setSelected(copy);
        const numOfSelectedGoals = selected.reduce((acc, elem) => elem ? acc + 1 : acc, 0);
        setCont(numOfSelectedGoals > 0);
    }

    const handleConfirmClick = () => {
        props.onHide();
        Object.values(dests).map((e, i) => {
            if(selected[i]) {
                props.chooseDestination(e.id);
            }
        });
        setSelected([false, false, false]);
        setCont(false);
        if(props.round === 1) {
            props.changeGameState("NEW_ROUND");
            return;
        } 
        props.nextPlayer(currentPlayer + 1);  
    }

    useEffect(() => {
        let goals = [];
        let indices = [];
        let n;
        for(let i = 0; i < 3; i++) {
            do {
                n = Math.floor(Math.random() * (Object.keys(destinations).length)) + 1;
                console.log(destinations.reduce((acc, elem) => elem.id == n ? acc + 1 : acc, 0));
            } while (indices.includes(n) || destinations.reduce((acc, elem) => elem.id == n ? acc + 1 : acc, 0) == 0);
            indices.push(n);
            goals.push(destinations.filter(e => e.id == n)[0]);
        }
        setDests(goals);
        indices = [];
    }, [destinations]);

    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false}>
        <Modal.Header style={{ backgroundColor: "lightgrey"}}>
          <Modal.Title id="contained-modal-title-vcenter">
              {props.players[props.currentPlayer].name}, válassz célokat! (legalább 1-et, legfeljebb 3-at)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" style={{ backgroundColor: "lightgrey"}}>
          <Container>
            <Row>
                {
                    Object.values(dests).map((e, i) => {
                        console.log(e);
                        return(
                            <Col md={4} style={{textAlign: "center"}}>
                                <Card index={i} type="ticket" from={e.fromCity} to={e.toCity} id={e.id} onClick={handleDestSelect} drawing={true}/>
                            </Col>
                        )
                    })
                }
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "lightgrey"}}>
          <Button onClick={handleConfirmClick} style={{ backgroundColor: "rgb(168, 131, 20)", border: "0px", margin: "auto" }} disabled={!cont}>Rendben</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function mapState(state) {
    const { currentPlayer, players, round } = state.game;
    return { currentPlayer, players, round };
}

const actionCreator = {
    chooseDestination: gameActions.chooseDestination,
    changeGameState: gameActions.changeGameState,
    nextPlayer: gameActions.nextPlayer
};
 
export default connect(mapState, actionCreator)(DestinationModal);
