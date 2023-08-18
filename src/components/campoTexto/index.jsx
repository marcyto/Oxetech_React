
function CampoTexto(props){
    return(
        <div>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;