import React, { useState, useEffect } from "react";
import TableInquilinos from "../../components/Tables/TableInquilinos/TableInquilinos";

export function I1() {
  return (
    <div className="inquilino">
      <h1>Inquilino/sub1</h1>
    </div>
  );
}

export function I2() {
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
      <TableInquilinos data={condominiums} />
    </>
  );
}
