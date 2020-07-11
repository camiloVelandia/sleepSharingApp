/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../actions';
import useLazyload from '../../hooks/useLazyLoad';
import useLocalStorage from '../../hooks/useLocalStorage';
import {
  Detailscards,
  Imgprofile,
  Card,
  Services,
  ImgCover,
  Heart,
  Fullheart
} from './styles';
import Imageprofile from '../../../static/profile.jpg';
// eslint-disable-next-line camelcase
import Rectangle_13 from '../../../static/Rectangle_13.jpg';



const Cards = (props) => {
  const {
    _id,
    coverPage = Rectangle_13,
    imgProfile = Imageprofile,
    localidad,
    precio,
    isfavorite,
  } = props;
  const key =`like-${_id}`
  const { $element, show } = useLazyload();
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleSetFavorite = () => {
    console.log('hola', liked);

    // eslint-disable-next-line no-console
    props.setFavorite({
      _id,
      coverPage,
      imgProfile,
      localidad,
      precio,
    });
    setLiked(!liked)
  };
  const handleDeleteFavorite = (itemId) => {
    // eslint-disable-next-line no-console
    console.log('bye', liked);
    props.deleteFavorite(itemId);
    setLiked(!liked)
  };

  const Icon = liked ? <Fullheart className="fas fa-heart" onClick={() => handleDeleteFavorite(_id)} /> : <Heart className="far fa-heart" onClick={handleSetFavorite} />


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
              {localidad}
              {' '}
              - Bogota - Colombia
            </p>
            <p>Barrios Unidos</p>
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
              {
                isfavorite
                ?(<Fullheart className="fas fa-heart" onClick={() => handleDeleteFavorite(_id)} />)
                :(Icon)
              }
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
