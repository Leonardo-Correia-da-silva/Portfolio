import { Link } from "react-router-dom";
import "./projetos.css"
import Projeto from '../../../projeto1.png';

function Projetos () {
    return (
        
        <main>
            
            <h1 className="projetos">Projetos</h1>
            <div className="container-projeto">
                <div className="projeto1">
                <img src={Projeto} className="imagem-projeto" alt="img" />
                    <h2 className="titulo-projetos">Building Material calculator</h2>
                    <p className="p-projetos"> Esta aplicação web tem a capacidade de estimar uma quantidade  aproximada de material de construção!</p> <br></br>
                    <p className="p-links">Repositório: <Link to="https://github.com/Leonardo-Correia-da-silva/Building-material-calculator" target="_blank" style={{  textDecoration: 'none'  }} > <span className="click" > Clique aqui </span> </Link> </p>
                    <p className="p-links">Aplicação no ar: <Link to="https://building-material-calculator.vercel.app/" target="_blank" style={{  textDecoration: 'none'  }}>  <span className="click">Clique aqui</span> </Link> </p>
                </div>
            </div>
        </main>

    )
}

export default Projetos