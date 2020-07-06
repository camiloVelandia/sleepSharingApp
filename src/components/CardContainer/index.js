import React from 'react';
import { Section, Container } from './styles';
import Card from '../Cards';

const CardContainer = () => {
  return (
    <Section>
      <h2>Destacados</h2>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Section>
  );
};

export default CardContainer;
