import React from 'react';
import {Link} from 'react-router-dom';
import { HeroSearch, ButtonContainer, Search } from './styles';

const Hero = () => {
  return (
    <HeroSearch className="hola">
      <h1>
        ENCUENTRA ROOMIES, APARTAMENTOS EN ARRIENDO Y
        <br />
        {' '}
        COMIENZA A COMPARTIR GASTOS Y AHORRAR DINERO
      </h1>
      <Search>
        <input type="text" />
        <i className="fas fa-search" />
      </Search>
      <h2>
        Registrate en el mejor sistema de 
        {' '}
        <br />
        roomies de LatinoAmerica
      </h2>
      <ButtonContainer>
        <Link to="/Register">
          Buscando roomies
        </Link>
        <Link to="/NewRoom">Publicar una habitación</Link>
      </ButtonContainer>
    </HeroSearch>
  );
};

export default Hero;
