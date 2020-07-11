import React from 'react';
import {
  BottomNavbar,
  Figure,
  Container,
  Article,
  P,
  P2,
  Heading,
} from './styles';
import Platzi from '../../../static/platzi-logo.png';
import mainLogo from '../../../static/Logoblanco.png';

const Footer = () => {
  return (
    <BottomNavbar>
      <Container>
        <Article>
          <Figure>
            <img src={mainLogo} alt="Logo" />
            {' '}
          </Figure>
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
          <Heading>
            con el respaldo de:
            <figure>
              <img src={Platzi} alt="platzi logo" />
            </figure>
          </Heading>
        </Article>
      </Container>
    </BottomNavbar>
  );
};

export default Footer;
