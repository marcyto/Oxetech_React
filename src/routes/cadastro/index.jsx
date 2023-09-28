import { useEffect, useState, useContext } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import './cadastro.css'


import { AuthContext } from "../../context/auth";





export default function Cadastro() {

    const {user, login, logout, cadastro} = useContext(AuthContext)

    useEffect(() => {
        
    }, [])


    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')

    function HandleSubmit(e) {
        e.preventDefault();
        cadastro(usuario, email, idade, senha)

    }
    function AddUser(e) {
        setUsuario(e.target.value)
    }
    function AddSenha(e) {
        setSenha(e.target.value)
    }
    function AddIdade(e){
        setIdade(e.target.value)
    }
    function AddEmail(e){
        setEmail(e.target.value)
    }

    return (
        <div className="container">

            <form className="form_login cadastro" onSubmit={HandleSubmit}>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
               
                <label>Usuário</label>
                <input type="text" onChange={AddUser} />
                <label>E-mail</label>
                <input type="text" onChange={AddEmail} />
                <label>Idade</label>
                <input type="text" onChange={AddIdade} />
                <label>Senha</label>
                <input type="password" onChange={AddSenha} />
                <button type="submit">Cadastrar</button>
                
            </form>
        </div>

    )
}