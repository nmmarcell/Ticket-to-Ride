import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import socket from "../socket";
import Card from "./Card";

function decideColor(color) {
    let number;
    switch(color) {
        case "yellow":
            number = 0;
            break;
        case "black":
            number = 1;
            break;
        case "red":
            number = 2;
            break;
        case "green":
            number = 3;
            break;
        case "blue":
            number = 4;
            break;
        case "orange":
            number = 5;
            break; 
        case "white":
            number = 6;
            break; 
        case "purple":
            number = 7;
            break;
        case "loco":
            number = 8;
            break;
    }
    return number;
}

const CardHolder = (props) => {
    const [data, setData] = useState([]);
    
    const hand = useSelector(state => state.game.currentCards);
    const dest = useSelector(state => state.game.currentDestinations);
    let deck = useSelector(state => state.game.deck);

    useEffect(() => {
        if(props.type == "hand") {
            let arr = props.players.filter(e => e.socketID === socket.id);
            if(arr.length > 0) setData(arr[0].cards)
        }
        else if (props.type == "deck") {
            setData(deck);
        }
        else if (props.type == "tickets") {
            let arr = props.players.filter(e => e.socketID === socket.id);
            if(arr.length > 0) setData(arr[0].goals)
        }
    }, [hand, dest, deck]);
    
    return (
        <div >
            {
                data.slice(0, props.number).map(elem => {
                    if(props.type === "tickets") {
                        return(<Card type={"ticket"} selectedStyle={"ticketStyle"} place={props.type} from={elem.fromCity} to={elem.toCity}/>); 
                    }
                    else {
                        const number = decideColor(elem.color);
                        return(<Card type={elem.type} number={number} selectedStyle={props.selectedStyle} color={elem.color} place={props.type} />);
                    }
                    
                })
            }
        </div>      
    );
}

function mapState(state) {
    const {players} = state.game;
    return {players};
}

const actionCreator = {};
 
export default connect(mapState, actionCreator)(CardHolder);