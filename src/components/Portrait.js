import images from "../imageImporter";

const Portrait = (props) => {
    const portraitStyle = {
        borderRadius: "50%",
        height: props.size ? props.size + "px" : "100px",
        width: props.size ? props.size + "px" : "100px",
        border: props.active ? "4px solid red" : "4px solid white",
        margin: "1px"
    }

    return ( 
        <div style={{margin: "auto"}}>
            <img style={portraitStyle} src={images[0][props.number]} alt="character portrait"/>
        </div>
    );
}
 
export default Portrait;