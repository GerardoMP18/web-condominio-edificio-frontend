import "./App.css";
import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Tables/TableCargaMasiva/someStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CrearCondominio, C2 } from "./pages/Condominios/Condominios";
import { E1, E2 } from "./pages/Edificios/Edificios";
import { P1, P2 } from "./pages/Propietarios/Propietarios";
import { I1, I2 } from "./pages/Inquilinos/Inquilinos";
import { Configuracion } from "./pages/Configuracion/Configuracion";
import { CargaMasiva } from "./pages/CargaMasiva/CargaMasiva";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/condominios/crear-condominio" element={<CrearCondominio />} />
            <Route path="/condominios/c2" element={<C2 />} />
            <Route path="/edificios/e1" element={<E1 />} />
            <Route path="/edificios/E2" element={<E2 />} />
            <Route path="/propietario/p1" element={<P1 />} />
            <Route path="/propietario/p2" element={<P2 />} />
            <Route path="/inquilino/i1" element={<I1 />} />
            <Route path="/inquilino/i2" element={<I2 />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/cargamasiva" element={<CargaMasiva />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
