import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../Login';

import { TopNavbar, Menu, Ul, Button, Img, MenuResponsive } from './styles';
import logo from '../../../static/Logoblanco.png';

Modal.setAppElement('#app');
const Header = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
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
          </Ul>
          <Ul>
            <li>
              <Link to="/Favs">
                <i className="fas fa-heart" />
              </Link>
            </li>
            <button className="login" onClick={() => setmodalIsOpen(true)}>
              Iniciar sesión
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setmodalIsOpen(false)}
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                content: {
                  height: '90%',
                  maxHeight: '562px',
                  width: 'fit-content',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '0',
                  background: 'transparent',
                  overflow: 'hidden',
                  outline: 'none',
                },
              }}
            >
              <Login />
            </Modal>
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
          <i className="fas fa-bars" />
          <Ul>
            <i onClick={() => setmodalIsOpen(true)}>Iniciar sesion</i>
            <Link to="/Register">
              <i>Registrarse</i>
            </Link>
            <i>Cerrar sesion</i>
          </Ul>
        </MenuResponsive>
      </TopNavbar>
    </>
  );
};

export default Header;
