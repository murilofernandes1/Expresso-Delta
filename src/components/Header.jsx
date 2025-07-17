import '../css/Header.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'


function Header () {


    return (
        <div className="header">
        <img alt='foto-logo'className='logo' src={Logo}></img>
        <div className='services'>
        <Link className='link' to="/coleta">Agendar uma coleta</Link>
        <button>Entrar em contato</button>
        </div>
        </div>
    )
}

export default Header;