import React from 'react';
import {TopNavbar, Menu, Ul, A} from './styles'

const Header = () => {
  return(
    <>
      <TopNavbar>
        <span>Logo</span>
        <Menu>
          <Ul>
            <li>
              Inicio
            </li>
            <li>
              Contacto
            </li>
          </Ul>
          <Ul>
            <li>
              corazon
            </li>
            <li>
              Iniciar sesión
            </li>
            <li>
              <A href="/">Regístrarse</A>
            </li>
          </Ul>
        </Menu>
      </TopNavbar>
    </>
  )
}

export default Header