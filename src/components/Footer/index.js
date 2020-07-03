import React from 'react';
import { BottomNavbar, Container, Article, P, P2, Heading } from './styles';

const Footer = () => {
  return (
    <BottomNavbar>
      <Container>
        <Article>
          <P>
            Primer buscador de toomies en lationamerica, ubica facilmente el
            apartamento de tus sueños
          </P>
        </Article>

        <Article>
          <Heading>Contactanos</Heading>
          <P2>Email: example@example.com</P2>
        </Article>

        <Article>
          <Heading>con el respaldo de:</Heading>
        </Article>
      </Container>
    </BottomNavbar>
  );
};

export default Footer;
