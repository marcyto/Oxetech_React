import './campotexto.css';

function CampoTexto(props){
    return(
        <div className="campotexto_area">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;