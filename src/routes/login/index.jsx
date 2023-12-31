import { useEffect, useState, useContext } from "react";
import logo from '../../assets/logo.png'
import './login.css'
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth";





export default function Login() {

    const {user, login, logout} = useContext(AuthContext)

    useEffect(() => {
        
    }, [])


    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function HandleSubmit(e) {
        e.preventDefault();
        login(usuario, senha)

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
                    <Link to="/"><img src={logo} alt="logo"/></Link>
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