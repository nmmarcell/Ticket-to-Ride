import "../index.css";
import images from "../imageImporter";

const Card = (props) => {

    function returnCard() {
        let image;
        switch(props.type) {
            case "train":
                image = images[1][props.number];
                return <img src={image} alt="train card" className="cardStyle"/>
            case "ticketBack":
                image = images[2][0];
                return <img src={image} alt="ticket card upside down" className="cardStyle"/>
            case "trainBack":
                image = images[2][1];
                return <img src={image} alt="train card upside down" className="cardStyle"/>
            case "ticket":
                let from = "Berlin";
                let to = "Budapest";
                return <div className="ticketStyle"> <p style={{paddingTop: "10px"}}>{from}</p> ~ <p>{to}</p> </div>
        }
    }

    return (
        <> 
            {returnCard()}
        </>
     );
}
 
export default Card;