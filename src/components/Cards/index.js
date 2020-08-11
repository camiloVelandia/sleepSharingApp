import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as favoriteActions from '../../actions/favoritesActions';
import useLazyload from '../../hooks/useLazyLoad';
import useLocalStorage from '../../hooks/useLocalStorage';
import {
  Detailscards,
  Imgprofile,
  Card,
  Services,
  ImgCover,
  Heart,
  Fullheart,
} from './styles';
// eslint-disable-next-line camelcase
const  notImg = 'https://i.imgur.com/CxYnsWp.jpg';

const  Imageprofile = 'https://i.imgur.com/bGLOkZi.jpg';

const Cards = (props) => {
  // console.log(props)
  const {
    _id,
    coverPage = notImg,
    imgProfile = Imageprofile,
    localidad,
    precio,
    barrio,
    fotografias,
    isfavorite,
  } = props;
  // console.log(fotografias)
  const cover = (fotografias) ? fotografias[0] : coverPage


  const key = `like-${_id}`;
  const { $element, show } = useLazyload();
  const [liked, setLiked] = useLocalStorage(key, false);

  const handleSetFavorite = () => {
    props.setFavorite({
      _id,
      coverPage,
      imgProfile,
      localidad,
      precio,
    });
    setLiked(!liked);
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
    setLiked(!liked);
  };

  const Icon = liked ? (
    <Fullheart
      className="fas fa-heart"
      onClick={() => handleDeleteFavorite(_id)}
    />
  ) : (
    <Heart className="far fa-heart" onClick={handleSetFavorite} />
  );

  return (
    <Card ref={$element} key={_id}>
      {show ? (
        <>
          <Link
            to={{
              pathname:'/Details',
              search:`${_id}`
            }}
          >
            <ImgCover loading="lazy" src={cover} alt="" />
          </Link>
          <Imgprofile loading="lazy" src={imgProfile} alt="" />
          <Detailscards>
            <p>
              <i className="fas fa-map-marker-alt" />
              {localidad}
              {' '}
              - Bogota - Colombia
            </p>
            <p>{barrio}</p>
            <p>
              <i className="fas fa-dollar-sign" />
              {precio}
              {' '}
              COP
            </p>
            <p>servicios y restricciones</p>
            <Services>
              <figure>
                <i className="fas fa-wifi" />
                <i className="fas fa-warehouse" />
                <i className="fas fa-broom" />
                <i className="fas fa-smoking-ban" />
              </figure>
              {isfavorite ? (
                <Fullheart
                  className="fas fa-heart"
                  onClick={() => handleDeleteFavorite(_id)}
                />
              ) : (
                Icon
              )}
            </Services>
          </Detailscards>
        </>
      ) : null}
    </Card>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer;
};

export default connect(mapStateToProps, favoriteActions)(Cards);
