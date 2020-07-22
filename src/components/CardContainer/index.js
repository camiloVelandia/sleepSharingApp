import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { Section, Container } from './styles';
import Card from '../Cards';
import *as favoritesActions from '../../actions/favoritesActions'

const CardContainer = (props) => {
  useEffect(() => {
    props.getrooms()
  },[])


  const { getRoomReducer} = props
  const { body,roomsByLocation  } = getRoomReducer
  return (
    <Section>
      <h2>Destacados</h2>
      <Container>
        {
          (roomsByLocation.length)
            ? roomsByLocation.map(item => <Card {...item} key={item._id}  />)
            : body.map(item => <Card {...item} key={item._id}  />)
        }
      </Container>
    </Section>
  );
};

const mapStateToProps = ({ getRoomReducer, favoriteReducer}) => {
  return {
    getRoomReducer,
    favoriteReducer,
  }
}

export default connect(mapStateToProps, favoritesActions)(CardContainer);

