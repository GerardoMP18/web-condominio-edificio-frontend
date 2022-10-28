import React from "react";
import {Container, Item, Background} from './someStyle'
import Egresos from "../../components/Tables/TableAdmin/Egresos";
import Ingresos from "../../components/Tables/TableAdmin/Ingresos";
import { dataI } from "../../components/Tables/TableAdmin/DataIngresos";
import { dataE } from "../../components/Tables/TableAdmin/DataEgresos";
import ExtraCosts from '../../components/Costs/ExtraCosts/ExtraCosts';

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

export function G1() {
  return (
    <Background>
      <Container>
        <Item>
          <ExtraCosts />
        </Item>
      </Container>
    </Background>
  );
}

