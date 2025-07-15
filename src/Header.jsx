import './css/Header.css'
import {Link} from 'react-router-dom'


function Header () {


    return (
        <div className="header">
        <img alt='foto-logo'className='logo' src='logo.png'></img>
        <div className='services'>
        <Link className='link' to="/coleta">Coleta</Link>
        <button>Entrar em contato</button>
        </div>
        </div>
    )
}

export default Header;