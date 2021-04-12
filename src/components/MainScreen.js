import ButtonGroup from 'react-bootstrap/ButtonGroup';
import LinkButton from './LinkButton';
import "../index.css";

const buttonGroupStyle = {
    position: 'absolute',
    width: "20%",
    left: '50%', 
    top: '60%',
    transform: 'translate(-50%, -50%)',
    alignItems: "center"
}

const MainScreen = () => {
    return(
        <div className="mainStyle">
            <ButtonGroup style={buttonGroupStyle} vertical>
                <LinkButton txt="Új váró" whereto="newlobby"/>
                <LinkButton txt="Csatlakozás váróhoz" whereto="joinlobby"/>
                <LinkButton txt="Szabályok" whereto="rules"/>
            </ButtonGroup>
        </div>
    );
}

export default MainScreen;