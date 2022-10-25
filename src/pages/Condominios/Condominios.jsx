import React, { useState, useEffect } from "react";
import TableCondominiums from "../../components/Tables/TableCondominiums/TableCondominiums";

export function C1() {
  return (
    <div className="condominios">
      <h1>Condominios/sub11</h1>
    </div>
  );
}

export function C2() {
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
      <TableCondominiums data={condominiums} />
    </>
  );
}
