import { useState } from "react";
import { connect } from "react-redux";
import "../index.css";
import gameActions from "../store/game/action";

const City = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        props.faszJanoslogger();
    };

    const cityStyle = {
        backgroundColor: selected ? "white" : "orange",
        borderRadius: "50%",
        height: "20px",
        width: "20px",
        position: "absolute",
        left: (props.x - 0.5) + "%",
        top: (props.y - 0.5) + "%",
        border: selected? "3px dotted black" : "3px dotted white"
      }

    return (
        <div onClick={handleClick} style={cityStyle}></div>
    );
}

function mapState(state) {
    const { faszJanos } = state.game;
    return { faszJanos };
}

const actionCreator = {
    faszJanoslogger: gameActions.logAction
};
 
export default connect(mapState, actionCreator)(City);