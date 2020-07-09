import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../actions';
import useLazyload from '../../hooks/useLazyLoad';
import {
  Detailscards,
  Imgprofile,
  Card,
  Services,
  ImgCover,
  Heart,
} from './styles';
import Imageprofile from '../../../static/profile.jpg';
import Rectangle_13 from '../../../static/Rectangle_13.jpg';

const Cards = (props) => {
  const {
    _id,
    coverPage = Rectangle_13,
    imgProfile = Imageprofile,
    localidad,
    precio,
  } = props;
  const { $element, show } = useLazyload();
  const handleSetFavorite = () => {
    console.log('hola');
    props.setFavorite({
      _id,
      coverPage,
      imgProfile,
      localidad,
      precio,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    console.log('bye');
    props.deleteFavorite(itemId);
  };
  return (
    <Card ref={$element}>
      {show ? (
        <>
          <Link to="/Details">
            <ImgCover loading="lazy" src={coverPage} alt="" />
          </Link>
          <Imgprofile loading="lazy" src={imgProfile} alt="" />
          <Detailscards>
            <p>
              <i className="fas fa-map-marker-alt" />
              {localidad} - Bogota - Colombia
            </p>
            <p>Barrios Unidos</p>
            <p>
              <i className="fas fa-dollar-sign" />
              {precio} COP
            </p>
            <p>servicios y restricciones</p>
            <Services>
              <figure>
                <i className="fas fa-wifi" />
                <i className="fas fa-warehouse" />
                <i className="fas fa-broom" />
                <i className="fas fa-smoking-ban" />
              </figure>
              <figure>
                <Heart className="far fa-heart" onClick={handleSetFavorite} />
                <Heart
                  className="fas fa-trash "
                  onClick={() => handleDeleteFavorite(_id)}
                />
              </figure>
            </Services>
          </Detailscards>
        </>
      ) : null}
    </Card>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Cards);
