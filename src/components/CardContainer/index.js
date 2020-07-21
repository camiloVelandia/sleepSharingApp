import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { Section, Container } from './styles';
import Card from '../Cards';
import *as favoritesActions from '../../actions/favoritesActions'

const CardContainer = (props) => {
  useEffect(() => {
    props.getrooms()
  },[])

const {filterByLocationReducer} = props
  const {roomsByLocation} = filterByLocationReducer
  const { getRoomReducer } = props
  const { body } = getRoomReducer
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

const mapStateToProps = ({ getRoomReducer, favoriteReducer, filterByLocationReducer }) => {
  return {
    getRoomReducer,
    favoriteReducer,
    filterByLocationReducer,
  }
}

export default connect(mapStateToProps, favoritesActions)(CardContainer);

