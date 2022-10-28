import React from "react";
import {Container, Item, Background} from './someStyle'
import OrdiCosts from '../../components/Costs/OrdiCosts/OrdiCosts';
import ExtraCosts from '../../components/Costs/ExtraCosts/ExtraCosts';

export function G1() {
  return (
    <Background>
      <Container>
        <Item>
          <OrdiCosts />
        </Item>
      </Container>
    </Background>
  );
}

export function G2() {
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
