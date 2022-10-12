import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Condominios from './pages/Condominios';
import Edificios from './pages/Edificios';
import Admin from './pages/Admin';
import Propietario from './pages/Propietario';
import Inquilino from './pages/Inquilino';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/condominios' element={<Condominios />} />
            <Route path='/edificios' element={<Edificios />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/propietario' element={<Propietario />} />
            <Route path='/inquilino' element={<Inquilino />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

