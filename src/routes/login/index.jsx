import { useState } from "react";
import logo from '../../assets/logo.png'
import './login.css'


export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function HandleSubmit(e) {
        e.preventDefault();
        console.log(usuario, senha)

    }
    function AddUser(e) {
        setUsuario(e.target.value)
    }
    function AddSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <div className="container">
            
            <form className="form_login" onSubmit={HandleSubmit}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
               
                <label>Usuário</label>
                <input type="text" onChange={AddUser} />
                <label>Senha</label>
                <input type="password" onChange={AddSenha} />
                <button type="submit">Entrar</button>
            </form>
        </div>

    )
}