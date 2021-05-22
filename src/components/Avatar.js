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
            <Portrait style={{margin: "0px"}} number={props.playerData.picture} size="40"/>
            <table style={{color: "white", fontSize:"14px", margin: "auto", textAlign:"left"}}>
                <tr>
                    <td style={{fontWeight:"bold"}}>{props.playerData.name}</td>
                    <td>Pont: {props.playerData.points}</td>
                </tr>
                <tr>
                    <td>Vonatok: {props.playerData.trains}</td>
                    <td>Kártyák: {props.playerData.cards}</td>
                </tr>
                <tr>
                    <td>Célok: {props.playerData.goals}</td>
                    <td>Kör: {props.playerData.round}</td>
                </tr>
            </table>
            <hr style={{border: "1px dashed white", margin: "5px"}}/>
            
        </div> 
    );
}
 
export default Avatar;