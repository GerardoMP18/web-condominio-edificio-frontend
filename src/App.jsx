import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Condominios, C1, C2 } from "./pages/Condominios";
import { Edificios, E1, E2 } from "./pages/Edificios";
import { Admin, A1, A2 } from "./pages/Admin";
import { Propietario, P1, P2 } from "./pages/Propietario";
import { Inquilino, I1, I2 } from "./pages/Inquilino";
import { Configuracion } from "./pages/Configuracion";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/condominios" element={<Condominios />} />
          <Route path="/condominios/c1" element={<C1 />} />
          <Route path="/condominios/c2" element={<C2 />} />
          <Route path="/edificios" element={<Edificios />} />
          <Route path="/edificios/e1" element={<E1 />} />
          <Route path="/edificios/E2" element={<E2 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/a1" element={<A2 />} />
          <Route path="/admin/a2" element={<A1 />} />
          <Route path="/propietario" element={<Propietario />} />
          <Route path="/propietario/p1" element={<P1 />} />
          <Route path="/propietario/p2" element={<P2 />} />
          <Route path="/inquilino" element={<Inquilino />} />
          <Route path="/inquilino/i1" element={<I1 />} />
          <Route path="/inquilino/i2" element={<I2 />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
