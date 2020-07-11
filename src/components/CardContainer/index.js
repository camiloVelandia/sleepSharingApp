import React from 'react';
import {connect} from 'react-redux'
import { Section, Container } from './styles';
import Card from '../Cards';


const CardContainer = (props) => {
  const {body} = props
  console.log(props)
  return (
    <Section>
      <h2>Destacados</h2>
      <Container>
        {
          body.map(item => <Card {...item} key={item._id} />)
        }
      </Container>
    </Section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer;
}

export default connect(mapStateToProps, null)(CardContainer);

