import { useSelector } from "react-redux";
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
    let hand = useSelector(state => state.game.cards);
    let deck = useSelector(state => state.game.deck);
    let tickets = useSelector(state => state.game.destinations);

    let cards = [];
    let data;

    if(props.type == "hand") {
        data = hand;
    }
    else if (props.type == "deck") {
        data = deck;
    }
    else if (props.type == "tickets") {
        data = tickets; 
    }

    for(let i = 0; i < (props.number > data.length ? data.length : props.number); i++) {
        let number = decideColor(data[i].color);
        cards.push(
            <Card key={i} type={data[i].type} number={number} selectedStyle={props.selectedStyle} color={data[i].color} place={props.type}/>
        );
    }
    
    return (
        <div >
            {cards}
        </div>      
    );
}
 
export default CardHolder;