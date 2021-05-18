import { useState } from "react";
import "../index.css";


const City = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
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
 
export default City;