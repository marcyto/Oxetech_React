import './campotexto.css';

function CampoTexto(props){

    const Digitado = (e) => {
        props.alterado(e.target.value);
    }

    return(
        <div className="campotexto_area">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Digitado} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;