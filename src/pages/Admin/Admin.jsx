import React from "react";
import Egresos from "../../components/Tables/TableAdmin/Egresos";
import Ingresos from "../../components/Tables/TableAdmin/Ingresos";
import { dataI } from "../../components/Tables/TableAdmin/DataIngresos";
import { dataE } from "../../components/Tables/TableAdmin/DataEgresos";

export function A1() {
  return (
    <>
      <Ingresos data={dataI} />
    </>
  );
}

export function A2() {
  return (
    <>
      <Egresos data={dataE} />
    </>
  );
}
