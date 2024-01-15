import { Link } from "react-router-dom";
import "./certificacao.css";


function Certificacao() {

    return (

        <main>
            <h1 className="certificacao">Certificações</h1>
         <div class="curso-container">
            <div className="curso1">
                <h3 className="titulo-curso">HTML e CSS Posicionamento e Flexbox</h3>
                <p className="p-curso">Instituição: <span> Alura </span></p>
                <p className="p-curso">Duração:<span> 8 horas</span> </p>
                <p className="p-curso">Conclusão: <span>2023</span></p>
                <p className="p-curso">Certificado: <Link to="https://cursos.alura.com.br/certificate/ea9f7e38-9ada-49cd-a935-ea24e86e6584?lang=pt_BR" target="blank" style={{  textDecoration: 'none' }}> <span className="link"> Clique aqui </span></Link></p>
            </div>


            <div className="curso2">
                <h3 className="titulo-curso">HTML e CSS estrutura de arquivos e tags</h3>
                <p className="p-curso">Instituição: <span> Alura </span></p>
                <p className="p-curso">Duração:<span> 8 horas</span> </p>
                <p className="p-curso">Conclusão:<span>2023</span></p>
                <p className="p-curso">Certificado: <Link to="https://cursos.alura.com.br/certificate/80ff866f-c5b0-4f02-b71c-153d9e4d1cc1?lang=pt_BR" target="blank" style={{  textDecoration: 'none' }}> <span className="link"> Clique aqui </span></Link></p>
            </div>

            <div className="curso3">
                <h3 className="titulo-curso">CSS - Layouts Responsivos</h3> <br></br>
                <p className="p-curso">Instituição: <span> Alura </span></p>
                <p className="p-curso">Duração:<span> 6 horas</span> </p>
                <p className="p-curso">Conclusão: <span>2023</span></p>
                <p className="p-curso">Certificado: <Link to="https://cursos.alura.com.br/certificate/48264fcd-1729-40a9-af80-baff2ce24cf4?lang=pt_BR" target="blank" style={{  textDecoration: 'none' }}> <span className="link"> Clique aqui </span></Link></p>
            </div>

            <div className="curso4">
                <h3 className="titulo-curso">JavaScript - Desenvolvendo </h3> <br></br>
                <p className="p-curso">Instituição: <span> Alura </span></p>
                <p className="p-curso">Duração:<span> 16 horas</span> </p>
                <p className="p-curso">Conclusão:<span>2023</span></p>
                <p className="p-curso">Certificado: <Link to="https://cursos.alura.com.br/certificate/e1ad070f-2190-4bd8-a91c-8e92a1009cca?lang=pt_BR" target="blank" style={{ textDecoration: 'none' }}> <span className="link"> Clique aqui </span></Link></p>
            </div>
        </div>
            
        </main>

        
    )

    
}

export default Certificacao






