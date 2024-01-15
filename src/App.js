import logo from './Stars.png';
import './App.css';
import Header from './componentes/header/header';
import Principal from './componentes/container/principal/principal';
import Sobre from './componentes/container/sobre/sobre';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Projetos from './componentes/container/projetos/projetos';
import Habilidades from './componentes/container/habilidades/habilidades';
import Certificacao from './componentes/container/certificacao/certificacao';

function App() {

return (
  <div className="App">
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<div><Principal />  <div className='animacao'> <img src={logo} className="App-logo" alt="logo" /></div>  </div>} />
        <Route path='/sobre' element={<div><Sobre /></div>    } />
        <Route path='/projetos' element={<div><Projetos /></div>    } />
        <Route path='/habilidades' element={<div><Habilidades /></div>  } />
        <Route path='/certificacao' element={<div><Certificacao /></div>    } />
      </Routes>
      
    </BrowserRouter>
  </div>
);

}

export default App;




