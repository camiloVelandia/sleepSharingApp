import React from 'react';

import { TopNavbar, Menu, Ul, A, Img, MenuResponsive } from './styles';
import logo from '../../../static/logo.png';

const Header = () => {
  return (
    <>
      <TopNavbar>
        <Img src={logo} alt="logo" />
        <Menu>
          <Ul>
            <li>Inicio</li>
            <li>Contacto</li>
          </Ul>
          <Ul>
            <li>
              <i className="fas fa-heart" />
            </li>
            <li>Iniciar sesión</li>
            <li>
              <A href="/">Regístrarse</A>
            </li>
          </Ul>
        </Menu>
        <MenuResponsive>
          <a href="">
            <i className="fas fa-heart" />
          </a>
          <a href="">
            <i className="fas fa-bars" />
          </a>
        </MenuResponsive>
      </TopNavbar>
    </>
  );
};

export default Header;
