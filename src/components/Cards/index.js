import React from 'react';
import useLazyload from '../../hooks/useLazyLoad'
import {
  Bgimg,
  Detailscards,
  Imgprofile,
  Card,
  Services,
  Heart
} from './styles';
import Imageprofile from '../../../static/profile.jpg'

const Cards = () => {
  const {$element, show} = useLazyload()
  return(
    <Card ref={$element}>
      { show
        ?(
          <>
            <Bgimg>
              <Imgprofile src={Imageprofile} alt="" />
            </Bgimg>
            <Detailscards>
              <p>
                <i className="fas fa-map-marker-alt" />
                {" "}
                Bella vista-Bogota-Colombia
              </p>
              <p>Barrios Unidos</p>
              <p>
                <i className="fas fa-dollar-sign" />
                {" "}
                500.00 COP
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
                  <Heart className="far fa-heart" />
                </figure>
              </Services>
            </Detailscards>
          </>
        ):(null)}
    </Card>
  )
}

export default Cards;
