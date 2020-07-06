import React from 'react';
import { Bgimg, Detailscards, Imgprofile } from './styles';
import Imageprofile from '../../../static/profile.jpg';

const Cards = () => {
  return (
    <section>
      <Bgimg>
        <Imgprofile src={Imageprofile} alt="" />
      </Bgimg>
      <Detailscards>
        <p>
          <i className="fas fa-map-marker-alt" />
          Bella vista-Bogota-Colombia
        </p>
        <p>Barrios Unidos</p>
        <p>
          <i className="fas fa-dollar-sign" />
          500.00 COP
        </p>
        <p>servicios y restricciones</p>
        <div>
          <i className="fas fa-wifi" />
          <i className="fas fa-warehouse" />
          <i className="fas fa-broom" />
          <i className="fas fa-smoking-ban" />
        </div>
        <i className="far fa-heart" />
      </Detailscards>
    </section>
  );
};

export default Cards;
