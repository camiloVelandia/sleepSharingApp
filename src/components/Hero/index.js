import React from 'react';
import { HeroSearch, ButtonContainer, Search } from './styles';

const Hero = () => {
  return (
    <HeroSearch className="hola">
      <h1>
        ENCUENTRA ROOMIES Y APARTAMENTOS EN ARRIENDO Y
        <br /> COMIENZA A COMPARTIR GASTOS AMIGOS MOMENTOS TU VIDA
      </h1>
      <Search>
        <input type="text" />
        <i className="fas fa-search" />
      </Search>
      <h2>
        Registrate en el mejor sistema de <br />
        roomies de LatinoAmerica
      </h2>
      <ButtonContainer>
        <a className="host__button" href="/">
          Buscando roomies
        </a>
        <a href="/">Publicar una habitación</a>
      </ButtonContainer>
    </HeroSearch>
  );
};

export default Hero;
