import { Link } from "react-router-dom";
import "./projetos.css"
import Imagem1 from '../../../timezone.png';
import Imagem2 from '../../../portfolio.png';
import Imagem3 from '../../../biuld.png';



function Projetos () {
    return (
        
        <main>
            
            <h1 className="projetos">Projetos</h1>
            <div className="container-projeto">
               
            <div className="projeto1">
                <img src={Imagem1} className="imagem-projeto" alt="img" />
                    <h2 className="titulo-projetos">Timezone App</h2>
                    <p className="p-projetos">Aplicativo inovador que permite visualizar instantaneamente os horários atuais em diversas regiões do mundo. </p> <br></br>
                    <p className="p-links">Repositório: <Link to="https://github.com/Leonardo-Correia-da-silva/Timezone-App" target="_blank" style={{  textDecoration: 'none'  }} > <span className="click" > Clique aqui </span> </Link> </p>
                    <p className="p-links">Aplicação no ar: <Link to="https://timezone-app-alpha.vercel.app/" target="_blank" style={{  textDecoration: 'none'  }}>  <span className="click">Clique aqui</span> </Link> </p>
                </div>
               
                <div className="projeto1">
                <img src={Imagem2} className="imagem-projeto" alt="img" />
                    <h2 className="titulo-projetos">Portfólio</h2>
                    <p className="p-projetos">Meu portfólio desenvolvido com as tecnologias atuais, sinta-se a <br></br>vontade para visita-lo.</p> <br></br>
                    <p className="p-links">Repositório: <Link to="https://github.com/Leonardo-Correia-da-silva/Portfolio" target="_blank" style={{  textDecoration: 'none'  }} > <span className="click" > Clique aqui </span> </Link> </p>
                    <p className="p-links">Aplicação no ar: <Link style={{  textDecoration: 'none'  }}>  <span className="click">Você já está aqui</span> </Link> </p>
                </div>
              
                <div className="projeto1">
                <img src={Imagem3} className="imagem-projeto" alt="img" />
                    <h2 className="titulo-projetos">Building Material Calculator</h2>
                    <p className="p-projetos"> Esta aplicação web tem a capacidade de estimar uma quantidade  aproximada de material de construção!</p> <br></br>
                    <p className="p-links">Repositório: <Link to="https://github.com/Leonardo-Correia-da-silva/Building-material-calculator" target="_blank" style={{  textDecoration: 'none'  }} > <span className="click" > Clique aqui </span> </Link> </p>
                    <p className="p-links">Aplicação no ar: <Link to="https://building-material-calculator.vercel.app/" target="_blank" style={{  textDecoration: 'none'  }}>  <span className="click">Clique aqui</span> </Link> </p>
                </div>
                <br></br><br></br><br></br>
            </div>
        </main>

    )
}

export default Projetos
