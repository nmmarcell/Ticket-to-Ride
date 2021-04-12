import GameEvent from "./GameEvent";
import "../index.css";

const History = () => {
    return (  
        <div className="historyStyle">
            <div>
                <GameEvent player="2" number="2" event="destination"/>
            </div>
                <hr style={{border: "1px solid white", margin: "0px"}}/>
            <div>
                <GameEvent player="3" event="build"/>
            </div>
        </div>
    );
}
 
export default History;