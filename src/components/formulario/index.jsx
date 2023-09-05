import { useState } from "react";
import CampoTexto from "../campoTexto";
import Select from "../select";
import './formulario.css';


function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    function HandleAdd(e){
        e.preventDefault();
        props.novoColaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <form className="campo_formulario" onSubmit={HandleAdd}>
            <CampoTexto
                label="Nome"
                placeholder="Digite seu Nome"
                valor={nome}
                alterado={valor => setNome(valor)}
            />
            <CampoTexto
                label="Cargo"
                placeholder="Digite seu Cargo"
                valor={cargo}
                alterado={valor => setCargo(valor)}
            />
            <CampoTexto
                label="Imagem"
                placeholder="Digite o endereco da imagem"
                valor={imagem}
                alterado={valor => setImagem(valor)}
            />
            <Select
                label="Time"
                times={props.times}
                valor={time}
                alterado={valor => setTime(valor)}
            />
            <button type="submit">Criar Card</button>
        </form>
    )
}
export default Formulario;