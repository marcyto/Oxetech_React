
import { Link } from "react-router-dom"
import './navbar.css'
import logo from '../../assets/logo.png'


export default function Navbar() {
    return (
        <header className='navegacao'>
            <div>
                <Link to="/"><img src={logo} alt="Logo"/></Link>
            </div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/sobre" >Sobre</Link>
                <Link to="/contato" >Contato</Link>
            </div>
            <div>
                <Link className="login_button" to="/login">Login</Link>
            </div>


        </header>

    )

}