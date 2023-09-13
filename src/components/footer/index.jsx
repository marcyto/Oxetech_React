import './footer.css';

import logo from '../../assets/logo.png'

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'


export default function Footer() {
    return (
        <footer className='footer_area'>
            <div className='icons'>
                <a href='https://facebook.com'><BsFacebook color='#FFF' size={25}></BsFacebook></a>
                <a href='https://instagram.com'><BsInstagram color='#FFF' size={25} /></a>
                <a href='https://twitter.com'><BsTwitter color='#FFF' size={25} /></a>
            </div>
            <div className='logo'>
                <img src={logo} />
            </div>
            <h2>Desenvolvido por mim</h2>
        </footer>
    )
}