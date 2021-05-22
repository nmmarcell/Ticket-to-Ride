import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const LinkButton = (props) => {

    const buttonStyle = {
        margin: "5px 10px",
        width: props.size ? props.size : "500px",
        backgroundColor: "rgb(153, 113, 3)",
        border: "2px solid white",
        borderRadius: "15px",
        padding: "15px",
        fontFamily: "t2rtitle"
    };

    const handleLinkClick = (e) => {
        if(props.isDisabled) e.preventDefault();
    };

    const handleButtonClick = () => {
        if(props.onClick) 
            props.onClick();
    } 

    return (
        <Link to={props.whereto} onClick={handleLinkClick}>
            <Button size="lg" style={buttonStyle} onClick={handleButtonClick} disabled={props.isDisabled}>{props.txt}</Button>
        </Link>
    );
}
 
export default LinkButton;