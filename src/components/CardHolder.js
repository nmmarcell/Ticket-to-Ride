import { useSelector } from "react-redux";
import Card from "./Card";

const CardHolder = (props) => {
    let hand = useSelector(state => state.game.cards);
    
    let cards;
    if(props.type == "hand") {
        let cards = hand;
    }
    else {
        cards = [];
        for(let i = 1; i <= props.number; i++) {
            let rand = Math.floor(Math.random() * 9) + 0;
            cards.push(
                <Card key={i} type={props.type} number={rand} selectedStyle={props.selectedStyle}/>
            );
        }
    }
    
    return (
        <div >
            {cards}
        </div>      
    );
}
 
export default CardHolder;