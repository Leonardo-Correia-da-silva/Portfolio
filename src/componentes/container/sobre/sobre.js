import './sobre.css';
import Imagem from '../../../dev.png';
import Imagem_eu from '../../../Eu.png';

function Sobre() {
    return (
        <div>
            <h1 className="sobre-titulo">Sobre mim</h1>
            <p className="sobre-texto"> Sou apaixonado
                por técnologia e é por esse motivo <br></br>que decidi trilhar o caminho
                da programação. <br></br><br></br><br></br> Trabalhei com projetos envolvendo
                gestão comercial, <br></br>API's  e banco de dados. 
                Atualmente estou cursando <br></br>análise e 
                e focando no desenvolvimento FullStack.</p>
                <img src={Imagem} alt="Minha Imagem" className='imagem-sobre' />
                <img src={Imagem_eu} alt="Minha Imagem" className='imagem-eu' />
        </div>
       

    )
}

export default Sobre
