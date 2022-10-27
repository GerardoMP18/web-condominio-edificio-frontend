import React, { useState, useEffect } from "react";
import TablePropietarios from "../../components/Tables/TablePropietarios/TablePropietarios";


export function P1() {
  return (
    <div className="propietario">
      <h1>Propietario/sub1</h1>
    </div>
  );
}

export function P2() {
  const [condominiums, setCondominiums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
    setCondominiums(data);
  };

  return (
    <>
      <TablePropietarios data={condominiums} />
    </>
  );
}
