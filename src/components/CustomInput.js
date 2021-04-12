const CustomInput = (props) => {
    return ( 
        <>
            <label htmlFor={props.inputName}>{props.text}</label> <br/>
            <input name={props.inputName} type={props.inputType} onChange={props.onChange}/>
        </>
    );
}
 
export default CustomInput;