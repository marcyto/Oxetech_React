import CampoTexto from "../campoTexto";
import Select from "../select";
import './formulario.css';

function handleAdd(){
    

}

function Formulario() {
    return(
        <form className="campo_formulario" onSubmit={handleAdd}>
            <CampoTexto label="Nome" placeholder="Digite seu Nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
            <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
            <Select label="Time"/>
            <button type="submit">Criar Card</button>
        </form>
    )
}
export default Formulario;