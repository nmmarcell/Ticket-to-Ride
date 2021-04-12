import { Col, Container, Row } from "react-bootstrap";
import Portrait from "./Portrait";

const pStyle = {
    marginBottom: "0px",
    color: "white",
    fontSize: "15px"
}

const Avatar = (props) => {
    return ( 
    <div>
        <Portrait style={{margin: "0px"}} number={props.portrait} size="40"/>
        <table style={{color: "white", fontSize:"14px", margin: "auto", textAlign:"left"}}>
            <tr>
                <td style={{fontWeight:"bold"}}>{props.name}</td>
                <td>Pont: </td>
            </tr>
            <tr>
                <td>Vonatok: 45</td>
                <td>Kártyák: 3</td>
            </tr>
            <tr>
                <td>Célok: 2</td>
                <td>Kör: 1</td>
            </tr>
        </table>
        <hr style={{border: "1px dashed white", margin: "5px"}}/>
        {/* 
        
        <p style={pStyle}><b>{props.name}</b></p>
        <p style={pStyle}>Vonatok száma: {props.remainingTrains}</p>
        */}
        
    </div> 
    );
}
 
export default Avatar;