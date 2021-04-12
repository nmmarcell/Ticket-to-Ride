import Portrait from "./Portrait";
import "../index.css";

const Score = (props) => {
    const longest = () => {
        if(props.longest) return <p>Leghosszabb egybefüggő út! + 10</p>
        else return <div></div>
    }

    return ( 
        <div className="scoreStyle">
            <Portrait size="75" number={Math.floor(Math.random() * 5) + 0}/>
            <h3>{props.name}</h3>
            <p>Utak pontértéke: + {props.road}</p>
            <p>Teljesített célok: + {props.goalsplus}</p>
            <p>Nem teljesített célok: - {props.goalsminus}</p>
            {longest()}
            <hr style={{border: "1px solid white"}}/>
            <b>Összesen: </b>
        </div>
        
    );
}
 
export default Score;