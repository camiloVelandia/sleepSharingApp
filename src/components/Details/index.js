import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import *as favoritesActions from '../../actions/favoritesActions'



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


const Details = (props) => {

  const url = window.location.href;
  const regex = /[0-9a-fA-F]{24}$/
  const result = regex.exec(url);

  useEffect(() => {
    props.getrooms()
    props.getdetails(result[0])
  },[])


const {detailsRooms} = props

const asd = JSON.parse(JSON.stringify(detailsRooms))

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
              {asd._id}
              {' '}
              vista - barrios unidos
              {' '}
              <br />
              Bogota
              {' '}
              <br />
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

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer;
};

export default connect(mapStateToProps, favoritesActions)(Details);
