import React, { useState, useEffect } from "react";
import TableEdificios from "../../components/Tables/TableEdificios/TableEdificios";

export function E1() {
  return (
    <div className="edificios">
      <h1>Edificios/sub1</h1>
    </div>
  );
}

export function E2() {
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
      <TableEdificios data={condominiums} />
    </>
  );
}
