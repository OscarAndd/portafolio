import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { DarkmodeProvider } from './DarkmodeContext';

import CNavegacion from './CNavegacion';
import CHome from './CHome';
import CAcerca from './CAcerca';
import CProyectos from './CProyectos';
import CHabilidades from './CHabilidades';
import CExperiencia from './CExperiencia';
import CContacto from './CContacto';
import CFooter from './CFooter';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Cambia 'smooth' a 'auto' para un desplazamiento instantáneo
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App alto ">
      <DarkmodeProvider>
        <div className='main-content'>
          <Router>
            <ScrollToTop />
            <CNavegacion />
            <Routes>
              <Route path="/" element={<CHome />} />
              <Route path="/acerca" element={<CAcerca />} />
              <Route path="/proyectos" element={<CProyectos />} />
              <Route path="/habilidades" element={<CHabilidades />} />
              <Route path="/experiencia" element={<CExperiencia />} />
            </Routes>
          </Router>
          <div className=''>
          <CFooter />
          </div>
        </div>
      </DarkmodeProvider>
    </div>
  );
}

export default App;
