import React from 'react';
import {TopNavbar, Menu} from './styles'

const Header = () => {
  return(
    <>
      <TopNavbar>
        <span>Logo</span>
        <Menu>
          <ul>
            <li>
              Inicio
            </li>
            <li>
              Contacto
            </li>
          </ul>
          <ul>
            <li>
              corazon
            </li>
            <li>
              Iniciar sesión
            </li>
            <li>
              Regístrarse
            </li>
          </ul>
        </Menu>
      </TopNavbar>
    </>
  )
}

export default Header