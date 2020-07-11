import React from 'react';
import { connect } from 'react-redux';
import { Section, Container } from './style';
import Card from '../Cards';


const Favorites = ({ favorite }) => {
  return (
    <Section>
      <h2>Favoritos</h2>
      <Container>
        {favorite.map((item) => (
          <Card {...item} isfavorite />
        ))}
      </Container>
    </Section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer
};

export default connect(mapStateToProps, null)(Favorites);
