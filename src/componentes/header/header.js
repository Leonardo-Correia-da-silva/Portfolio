
import './header.css';
import { Link } from "react-router-dom";





function Header() {
    return (
        <header className="header">
            <div className="menu">
                <nav className='menu'>
                <Link to='/' className='menu'>Início </Link>
                </nav>
                
                <nav className='menu'>
                <Link to='/sobre' className='menu'>Sobre mim </Link>
                </nav>
                
                <nav className='menu'>
                <Link to='/projetos' className='menu'>Projetos </Link>
                </nav>

                <nav className='menu'>
                <Link to='/habilidades' className='menu'>Habilidades </Link>
                </nav>

                <nav className='menu'>
                <Link to='/certificacao' className='menu'>Certificações </Link>
                </nav>

               

            </div>
        </header>
    )
}

export default Header