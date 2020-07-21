import React from 'react';
import {
  Section,
  H1,
  H2,
  CaroselContainer,
  Ubicacion,
  InfoContainer,
  Costo,
  Services,
} from './styles';
import Carousel from '../Carousel';
import TextDetails from '../TextDetails';

const Details = () => {
  return (
    <Section>
      <H1>Detalles del inmueble</H1>
      <H2>Fotografias del inmueble</H2>
      <CaroselContainer>
        <Carousel />
      </CaroselContainer>
      <InfoContainer>
        <Ubicacion>
          <h2>Ubicacion</h2>
          <div>
            <i className="fas fa-map-marker-alt" />
            <p>
              Bella vista - barrios unidos <br />
              Bogota <br />
              Colombia
            </p>
          </div>
        </Ubicacion>
        <Costo>
          <h2> Costo</h2>
          <p>
            <i className="fas fa-dollar-sign" />
            500.00 COP
          </p>
        </Costo>
        <Costo>
          <h2> Tamaño en m2</h2>
          <p>6 m2</p>
        </Costo>
        <Services>
          <h2>Servicios y restricciones</h2>
          <div>
            <i className="fas fa-wifi" />
            <i className="fas fa-warehouse" />
            <i className="fas fa-broom" />
            <i className="fas fa-smoking-ban" />
          </div>
        </Services>
      </InfoContainer>
      <TextDetails />
    </Section>
  );
};

export default Details;
