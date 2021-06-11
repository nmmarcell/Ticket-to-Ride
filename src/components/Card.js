import "../index.css";
import images from "../imageImporter";
import { useState } from "react";
import { connect } from "react-redux";
import gameActions from "../store/game/action";

const Card = (props) => {
    const [clicked, setClicked] = useState(false);
    let style = "cardStyle";
    if(props.place === "hand") style = "cardStyle drawAnimation";
    if(props.type === "ticket") style = "ticketStyle";
    if(props.place === "tickets") style = "ticketStyle drawDestAnimation";


    const handleCardClick = () => {
        //setClicked(!clicked);
        if(props.place === "deck") {
            if(props.gameState === "NEW_ROUND") { 
                props.drawCard(props.color);
                if(props.color === "loco") props.changeGameState("DRAWN_CARD2"); //ha vonatot húzott a játékos, nem húzhat többet
                else props.changeGameState("DRAWN_CARD1"); //ha nem vonatot húzott a játékos, húzhat még egyet
            }
            if(props.gameState === "DRAWN_CARD1") {
                if(props.color !== "loco") { //ha már húzott egy színt, akkor vonatot nem húzhat
                    props.drawCard(props.color);
                    props.changeGameState("DRAWN_CARD2");
                }
            }
        } 
    };

    const handleDeckClick = () => {
        const n = Math.floor(Math.random() * props.deck.length);
        const color = props.deck[n].color;
        props.drawCard(color);
    };

    const handleDestClick = () => {
        if(props.drawing) {
            props.onClick(props.index);
            setClicked(!clicked);
        }   
    }

    const handleHoverEnter = () => {
        if(Object.keys(props.hoverObject).length === 0) props.setHoverObject({city1: props.from, city2: props.to});
    }

    const handleHoverExit = () => {
        if(Object.keys(props.hoverObject).length > 0) props.setHoverObject({});
    }

    //átszervezni?
    function returnCard() {
        let image;
        switch(props.type) {
            case "train":
                const classes = `style drawAnimation`;
                image = images[1][props.number];
                return <img src={image} alt="train card" className={style} onClick={handleCardClick}/>
            case "ticketBack":
                image = images[2][0];
                return <img src={image} alt="ticket card upside down" className={style} onClick={props.onClick}/>
            case "trainBack":
                image = images[2][1];
                return <img src={image} alt="train card upside down" className={style} onClick={handleDeckClick}/>
            case "ticket":
                return <div 
                    className={style} 
                    style={{border: clicked ? "2px solid red" : "2px solid white"}} 
                    onClick={handleDestClick}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverExit}
                > <p style={{paddingTop: "2px"}} >{props.from}</p> ~ <p>{props.to}</p> </div>
        }
    }

    return (
        <> 
            {returnCard()}
        </>
     );
}

function mapState(state) {
    const { deck, gameState, hoverObject, round } = state.game;
    return { deck, gameState, hoverObject, round };
}

const actionCreator = {
    drawCard: gameActions.draw,
    changeGameState: gameActions.changeGameState,
    setHoverObject: gameActions.setHoverObject
};
 
export default connect(mapState, actionCreator)(Card);