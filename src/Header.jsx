import './css/Header.css'

function Header () {

    return (
        <div className="header">
        <h1>
            Expresso Delta
        </h1>
        <div className='services'>
        <button>Agendar uma coleta</button>
        <button>Entrar em contato</button>
        </div>
        </div>
    )
}

export default Header;