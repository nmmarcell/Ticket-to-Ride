const GameEvent = (props) => {
    let event;
    switch(props.event) {
        case "destination":
            event = " új célt húzott.";
            break;
        case "ticket":
            event = " kártyát húzott: piros, titkos";
            break;
        case "build":
            event = " útvonalat épített: Pamplona - Madrid";
            break;
    }

    return ( 
        <p style={{margin: "0px", fontSize:"14px"}}>{props.player}. játékos <i>{props.number} {event}</i></p>
     );
}
 
export default GameEvent;