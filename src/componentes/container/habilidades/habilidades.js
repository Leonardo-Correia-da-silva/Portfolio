import './habilidades.css';
import { faHtml5, faCss3, faJs, faReact, faNode} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faDatabase } from '@fortawesome/free-solid-svg-icons';  
function Habilidades() {
    return (
        <main>


            <h1 className='habilidades'>Habilidades</h1>
            <div>
                <h1 className="titulos">HTML, CSS e JavaScript</h1>
                <p className='paragrafos'>HTML, CSS e Javascript,
                    também conhecidas como santíssima
                    trindade da web,<br></br> formam o principal
                    conjunto de tecnologias para qualquer
                    aplicação web.<br></br>
                    Já deu para ver que é de suma importância
                    entender MUITO bem esses caras.</p>
            </div>

            <div className='icone-habil'>
                <FontAwesomeIcon icon={faHtml5} className="" style={{ color: '#E44D26', }} />
                <FontAwesomeIcon icon={faCss3} className="" style={{ color: '#1572B6', }} />
                <FontAwesomeIcon icon={faJs} className="" style={{ color: '#F0DB4F', }} />
            </div>





            <div>
                <h1 className="titulos">React JS</h1>
                <p className='paragrafos'>O React é uma biblioteca JavaScript
                    declarativa, eficiente e flexível para
                    criar interfaces.<br></br> Ele permite compor
                    UIs complexas a partir de pequenos e isolados
                    códigos chamados <br></br> “componentes”.</p>
            </div>

            <div className='icone-habil'>
                <FontAwesomeIcon icon={faReact} className="" style={{ color: '#61DAFB' }} />
            </div>




            <div>
                <h1 className="titulos">TypeScript</h1>
                <p className='paragrafos'>TypeScript é uma linguagem de programação
                    de código aberto desenvolvida <br></br> pela Microsoft.
                    É um superconjunto sintático estrito de JavaScript <br></br>
                    e adiciona tipagem estática opcional à linguagem.</p>
            </div>
            <div className='icone-habil'>
                <FontAwesomeIcon icon={faFileCode} className="" style={{ color: '#61DAFB' }} />
            </div>
           



            <div>
                <h1 className="titulos">Node JS</h1>
                <p className='paragrafos'>Node.js é um software de código aberto,
                    multiplataforma, baseado no <br></br> interpretador
                    V8 do Google e que permite a execução de códigos <br></br>
                    JavaScript fora de um navegador web.</p>
             </div>

             <div className='icone-habil'>
                <FontAwesomeIcon icon={faNode} className="" style={{ color: '#8CC84B' }} />
            </div>





            <div>
                <h1 className="titulos">MySQL</h1>
                <p className='paragrafos'>O MySQL é um sistema de gerenciamento de banco de dados,
                    que utiliza a linguagem <br></br> SQL como interface.
                    É atualmente um dos sistemas de gerenciamento de
                    bancos de <br></br> dados mais populares da Oracle Corporation,
                    com mais de 10 milhões <br></br> de instalações pelo mundo.</p>
             </div>

             <div className='icone-habil'>
                <FontAwesomeIcon icon={faDatabase} className="" style={{ color: '#8CC84B' }} />
            </div>
            <br></br> <br></br> <br></br>
        </main>  

       

    )
}

export default Habilidades