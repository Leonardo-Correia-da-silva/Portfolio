import './sobre.css';
import Imagem from '../../../dev.png';
import Imagem_eu from '../../../Eu.png';

function Sobre() {
    return (
        <div>
            <h1 className="sobre-titulo">Sobre mim</h1>
            <p className="sobre-texto"> Sou apaixonado
                por técnologia e é por esse motivo que  decidi trilhar <br></br> o caminho
                da programação. <br></br><br></br><br></br> Trabalhei com projetos envolvendo
                gestão comercial,  API's e banco de dados.
                <br></br>Atualmente estou cursando análise e
                desenvolvimento de sistemas (ADS), <br></br>  trabalhando com Front end
                e focando no desenvolvimento FullStack.</p>
                <img src={Imagem} alt="Minha Imagem" className='imagem-sobre' />
                <img src={Imagem_eu} alt="Minha Imagem" className='imagem-eu' />
        </div>
       

    )
}

export default Sobre