import React from 'react';
import {connect} from 'react-redux'
import { Section, Container } from './styles';
import Card from '../Cards';

const CardContainer = ({body}) => {
  return (
    <Section>
      <h2>Destacados</h2>
      <Container>
        {
          body.map(item => <Card {...item} />)
        }
      </Container>
    </Section>
  );
};

const mapStateToProps = state => {
  return {
    body: state.body
  }
}

export default connect(mapStateToProps, null)(CardContainer);