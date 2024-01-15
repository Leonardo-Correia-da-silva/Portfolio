import './principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact,} from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faDatabase } from '@fortawesome/free-solid-svg-icons';  

function Principal() {

    return (
        <main className="apresentacao">
            <div>
                <h1 className='nome'>Leonardo Correia</h1>
                <h3 className='sou'>Front-end Developer</h3>
            </div>


            <div className='box-icone' style={{ display: 'flex', paddingLeft: '10%', marginTop: '-15px' }}>
                <FontAwesomeIcon icon={faHtml5} className="icone" style={{ color: '#E44D26', fontSize: '20px' }} />
                <FontAwesomeIcon icon={faCss3} className="icone" style={{ color: '#1572B6', fontSize: '20px' }} />
                <FontAwesomeIcon icon={faJs} className="icone" style={{ color: '#F0DB4F', fontSize: '20px' }} />
                <FontAwesomeIcon icon={faReact} className="icone" style={{ color: '#61DAFB', fontSize: '20px' }} />
                <FontAwesomeIcon icon={faFileCode} className="icone" style={{ color: '#61DAFB', fontSize: '20px' }} />
                <FontAwesomeIcon icon={faDatabase} className="icone" style={{ color: '#8CC84B', fontSize: '20px' }} />
            </div>

            <div>
                <p className='resumo'>Bem vindo ao meu Portfólio,<br></br> Meu nome é Leonardo e  trabalho <br></br> como Front End Developer<br></br></p>
            </div>

            <div>
                <a href="https://www.linkedin.com/in/leonardo-correia-silva96/" target="_blank" rel="noreferrer" ><div className="in"><svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_52)"> <path d="M4.8102 0.438965C2.02328 0.438965 0 2.36144 0 5.0083C0 7.65427 1.98314 9.57496 4.71385 9.57496C6.13051 9.57496 7.3509 9.11553 8.24389 8.24662C9.10031 7.41251 9.57223 6.26259 9.57134 4.98778C9.50889 2.3097 7.55073 0.438965 4.8102 0.438965ZM7.0003 6.96824C6.4472 7.50618 5.65591 7.79076 4.71385 7.79076C2.98943 7.79076 1.7842 6.64709 1.7842 5.0083C1.7842 3.34275 3.00013 2.22316 4.8102 2.22316C6.57923 2.22316 7.74788 3.32491 7.78803 5.00919C7.78714 5.77818 7.50791 6.47313 7.0003 6.96824Z" fill="white"></path> <path d="M0.855522 40.5611H8.87371V11.0817H0.855522V40.5611ZM2.63972 12.8659H7.08951V38.776H2.63972V12.8659Z" fill="white"></path><path d="M30.0174 11.0817C26.2991 11.0817 24.0225 12.3654 22.7039 13.5724L22.4533 11.0817H13.3815V40.5602H22.2659V25.0671C22.265924.3998 22.5362 23.0144 22.7057 22.6486C23.7789 20.3372 25.2268 20.3372 27.4196 20.3372C29.9451 20.3372 32.079 22.7057 32.079 25.5087V40.562H41V23.9065C41 15.0943 35.3066 11.0817 30.0174 11.0817ZM39.2158 38.7769H33.8632V25.5078C33.8632 21.7369 30.9121 18.5521  27.4196 18.5521C25.1786 18.5521 22.6397 18.5521 21.0866 21.8975C20.7663 22.5889 20.4808 24.2455 20.4808 25.0671V38.7769H15.1657V12.8659H20.8394L21.2034 16.4735H22.6656L22.927 16.0516C23.522 15.0934 25.4034 12.865 30.0174 12.865C34.4475 12.865 39.2158 16.3192 39.2158 23.9038V38.7769Z" fill="white"></path></g><defs><clipPath id="clip0_2_52"><rect width="41" height="41" fill="white"></rect></clipPath></defs></svg></div></a>
            </div>

            <div>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><div className="instagram"><svg width="27" height="27" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_75)"><path d="M20.5 3.69513C25.9735 3.69513 26.6227 3.71563 28.7854 3.81471C34.3409 4.06754 36.9359 6.7035 37.1887 12.218C37.2878 14.379 37.3066 15.0282 37.3066 20.5017C37.3066 25.9769 37.2861 26.6244 37.1887 28.7854C36.9342 34.2948 34.346 36.9359 28.7854 37.1887C26.6227 37.2878 25.9769 37.3083 20.5 37.3083C15.0265 37.3083 14.3773 37.2878 12.2163 37.1887C6.64713 36.9342 4.06583 34.2863 3.813 28.7837C3.71392 26.6227 3.69342 25.9752 3.69342 20.5C3.69342 15.0265 3.71563 14.379 3.813 12.2163C4.06754 6.7035 6.65567 4.06583 12.2163 3.813C14.379 3.71563 15.0265 3.69513 20.5 3.69513V3.69513ZM20.5 0C14.9325 0 14.2355 0.0239167 12.0489 0.123C4.60396 0.464667 0.466375 4.59542 0.124708 12.0472C0.0239167 14.2355 0 14.9325 0 20.5C0 26.0675 0.0239167 26.7662 0.123 28.9528C0.464667 36.3978 4.59542 40.5353 12.0472 40.877C14.2355 40.9761 14.9325 41 20.5 41C26.0675 41 26.7662 40.9761 28.9528 40.877C36.3909 40.5353 40.5388 36.4046 40.8753 28.9528C40.9761 26.7662 41 26.0675 41 20.5C41 14.9325 40.9761 14.2355 40.877 12.0489C40.5422 4.61079 36.4063 0.466375 28.9545 0.124708C26.7662 0.0239167 26.0675 0 20.5 0V0ZM20.5 9.97325C14.6865 9.97325 9.97325 14.6865 9.97325 20.5C9.97325 26.3135 14.6865 31.0285 20.5 31.0285C26.3135 31.0285 31.0268 26.3152 31.0268 20.5C31.0268 14.6865 26.3135 9.97325 20.5 9.97325ZM20.5 27.3333C16.7263 27.3333 13.6667 24.2754 13.6667 20.5C13.6667 16.7263 16.7263 13.6667 20.5 13.6667C24.2737 13.6667 27.3333 16.7263 27.3333 20.5C27.3333 24.2754 24.2737 27.3333 20.5 27.3333ZM31.4436 7.09813C30.0838 7.09813 28.9819 8.2 28.9819 9.55812C28.9819 10.9162 30.0838 12.0181 31.4436 12.0181C32.8017 12.0181 33.9019 10.9162 33.9019 9.55812C33.9019 8.2 32.8017 7.09813 31.4436 7.09813Z" fill="white"></path></g><defs><clipPath id="clip0_2_75"><rect width="41" height="41" fill="white"></rect></clipPath></defs></svg></div></a>
            </div>


            <div>
                <a href="https://github.com/leonardo-Correia-da-silva" target="_blank" rel="noreferrer"> <div className="github"> <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" fill="white" /></g><defs><clipPath id="clip0"> <rect width="16" height="16" fill="white" /> </clipPath> </defs> </svg>  </div> </a>
            </div>
        </main>
    )
}

export default Principal



