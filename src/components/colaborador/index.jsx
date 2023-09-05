import './colaborador.css';

function Colaborador(props){
    return(
        <div className="colaborador">
            <div className="cabecalho">
                <img src={props.colaborador.imagem} alt="fotoPerfil"/>
            </div>
            <div className="rodape">
                <h4>{props.colaborador.nome}</h4>
                <p>{props.colaborador.cargo}</p>
            </div>
        </div>
    )
}
export default Colaborador;