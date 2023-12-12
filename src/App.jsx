import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componets/Inicio';
import Galeria from './componets/Galeria';
import Navbar from './componets/Navbar';
import Registro from './componets/Registro';
import Metodologia from './componets/Metodologia';
import Eventos from './componets/Eventos';
import Ingles from './componets/Ingles';
import Chino from './componets/Chino';
import Frances from './componets/Frances';
import Ruso from './componets/Ruso';
import Creditos from './componets/Creditos';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1 className="tituloPrin">Instiuto de Enseñanza de Idiomas</h1>
    <br />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/metodologia" element={<Metodologia/>} />
          <Route path="/eventos" element={<Eventos/>} />
          <Route path="/ingles" element={<Ingles/>} />
          <Route path="/chino" element={<Chino/>} />
          <Route path="/frances" element={<Frances/>} />
          <Route path="/ruso" element={<Ruso/>} />
          <Route path="/creditos" element={<Creditos/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
