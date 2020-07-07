import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavbar, Menu, Ul, Button, Img, MenuResponsive } from './styles';
import logo from '../../../static/logo.png';

const Header = () => {
  return (
    <>
      <TopNavbar>
        <Link to="/">
          <Img src={logo} alt="logo" />
        </Link>
        <Menu>
          <Ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>Contacto</li>
          </Ul>
          <Ul>
            <li>
              <Link to="/Favs">
                <i className="fas fa-heart" />
              </Link>
            </li>
            <li>Iniciar sesión</li>
            <li>
              <Link to="/Register">
                <Button type="button">Regístrarse</Button>
              </Link>
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
