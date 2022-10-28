import "./App.css";
import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Tables/TableCargaMasiva/someStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { A1, A2, G1 } from "./pages/Admin/Admin";
import { CrearCondominio, C2 } from "./pages/Condominios/Condominios";
import { CrearEdificio, E2 } from "./pages/Edificios/Edificios";
import { CrearPropietario, P2 } from "./pages/Propietarios/Propietarios";
import { CrearInquilino, I2 } from "./pages/Inquilinos/Inquilinos";
import { Configuracion } from "./pages/Configuracion/Configuracion";
import { CargaMasiva } from "./pages/CargaMasiva/CargaMasiva";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/admin/ingresos" element={<A1 />} />
            <Route path="/admin/egresos" element={<A2 />} />
            <Route path="/admin/gastos" element={<G1 />} />
            <Route path="/condominios/crear-condominio" element={<CrearCondominio />} />
            <Route path="/condominios/c2" element={<C2 />} />
            <Route path="/edificios/crear-edificio" element={<CrearEdificio />} />
            <Route path="/edificios/E2" element={<E2 />} />
            <Route path="/propietario/crear-propietario" element={<CrearPropietario />} />
            <Route path="/propietario/p2" element={<P2 />} />
            <Route path="/inquilino/crear-inquilino" element={<CrearInquilino />} />
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
