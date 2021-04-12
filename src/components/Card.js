import "../index.css";
import images from "../imageImporter";
import { useState } from "react";

const Card = (props) => {
    const [clicked, setClicked] = useState(false);
    const style = clicked ? props.selectedStyle : "cardStyle";

    const changeSelection = () => {
        setClicked(!clicked);
    }

    function returnCard() {
        let image;
        switch(props.type) {
            case "train":
                image = images[1][props.number];
                return <img src={image} alt="train card" className={style} onClick={() => setClicked(!clicked)}/>
            case "ticketBack":
                image = images[2][0];
                return <img src={image} alt="ticket card upside down" className={style}/>
            case "trainBack":
                image = images[2][1];
                return <img src={image} alt="train card upside down" className={style}/>
            case "ticket":
                let from = "Berlin";
                let to = "Budapest";
                return <div className="ticketStyle"> <p style={{paddingTop: "2px"}}>{from}</p> ~ <p>{to}</p> </div>
        }
    }

    return (
        <> 
            {returnCard()}
        </>
     );
}
 
export default Card;