import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { Section, Container } from './styles';
import Card from '../Cards';
import *as favoritesActions from '../../actions/favoritesActions'

const CardContainer = (props) => {
  useEffect(() => {
    props.getrooms()
  },[])

  const {body} = props
  return (
    <Section>
      <h2>Destacados</h2>
      <Container>
        {
          body.map(item => <Card {...item} key={item._id}  />)
        }
      </Container>
    </Section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer;
}

export default connect(mapStateToProps, favoritesActions)(CardContainer);

