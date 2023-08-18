import CampoTexto from "../campoTexto";

function Formulario() {
    return(
        <form>
            <CampoTexto label="nome" placeholder="Digite seu Nome" />
            <CampoTexto label="cargo" placeholder="Digite seu Cargo" />
            <CampoTexto label="imagem" placeholder="Digite o endereco da imagem" />
        </form>
    )
}
export default Formulario;