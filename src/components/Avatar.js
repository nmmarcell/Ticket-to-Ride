import { useSelector } from "react-redux";
import Portrait from "./Portrait";

const Avatar = (props) => {
    const pStyle = {
        marginBottom: "0px",
        color: "white",
        fontSize: "15px"
    }

    return ( 
        <div>
            <Portrait style={{margin: "0px"}} number={props.playerData.picture} size="40" active={props.active}/>
            <table style={{color: "white", fontSize:"14px", margin: "auto", textAlign:"left"}}>
                <tr>
                    <td style={{fontWeight:"bold"}}>{props.playerData.name}</td>
                    <td>Pont: {props.playerData.points}</td>
                </tr>
                <tr>
                    <td>Vonatok: {props.playerData.trains}</td>
                    <td>Kártyák: {props.playerData.cards.length}</td>
                </tr>
                <tr>
                    <td>Célok: {props.playerData.goals.length}</td>
                    <td>Kör: {useSelector(state => state.game.round)}</td>
                </tr>
            </table>
            <hr style={{border: "1px dashed white", margin: "5px"}}/>
            
        </div> 
    );
}
 
export default Avatar;