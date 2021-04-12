import Card from "./Card";

const CardHolder = (props) => {
    const cards = [];
    for(let i = 1; i <= props.number; i++) {
        let rand = Math.floor(Math.random() * 9) + 0;
        cards.push(
            <Card key={i} type={props.type} number={rand} style={props.styleToUse}/>
        );
    }

    return (
        <div>
            {cards}
        </div>        
    );
}
 
export default CardHolder;