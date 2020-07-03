import React from 'react';
import { Section, ImageContainer, P } from './styles';

const index = () => {
  return (
    <Section>
      <h2>¿Estas buscando un inquilino o un compañero de piso?</h2>
      <P>Somos tus aliados estrategicos</P>
      <ImageContainer>
        <figure>
          <i className="fas fa-envelope" />
        </figure>
        <figure>
          <i className="fab fa-whatsapp-square" />
        </figure>
      </ImageContainer>
    </Section>
  );
};

export default index;
