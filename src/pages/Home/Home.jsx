import React from "react";
import {Building, Container, Background, Span, FeatureTitle, Span1, Container1, Container2} from './someStyle'
import Area from '../../components/Charts/AreaChart/AreaChart';
import Donut from '../../components/Charts/DonutChart/DonutChart';

export function Home() {
  return (
    <Background>
      <Container>
        <Building>
          <Span>Bienvenido a</Span>
          <FeatureTitle>GBS</FeatureTitle>
          <Span1>Everything is possible</Span1>
        </Building>
        <Container1><Donut/></Container1>
        <Container2><Area/></Container2>
      </Container>
    </Background>
  );
}
