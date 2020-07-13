import React from 'react';
import { Section, Place, Accesories, Anfitrion, Contact } from './styles';

const TextDetails = () => {
  return (
    <Section>
      <Place>
        <h2>Detalles del lugar</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, non
          earum voluptatibus sit dolores error cum neque odit, iusto sed aliquid
          cumque est quos explicabo amet. Facere autem quia asperiores.
        </p>
      </Place>
      <Accesories>
        <h2>Detalles del los muebles con que cuenta el lugar</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, non
          earum voluptatibus sit dolores error cum neque odit, iusto sed aliquid
          cumque est quos explicabo amet. Facere autem quia asperiores.
        </p>
      </Accesories>
      <Anfitrion>
        <figure>
          <img src="../../static/ellipse 1.png" alt="" />
        </figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          error cumque impedit harum ex maiores tempora accusantium id labore
          reprehenderit!
        </p>
      </Anfitrion>
      <Contact>
        <h2>Si quieres contactar conmigo usa estos canales</h2>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=573208966501&text=Hola!%20me%20parecio%20genial%20tu%20publicacion%20y%20estoy%20interesado!"
            target="blank"
          >
            <i className="fab fa-whatsapp" />
          </a>
          {/* <a
            target="blank"
            href="mailto:velandiacamilo356@gmail.com?subject=quiero mas info acerca de la habitacion para ser tu roomie&body=hola, 
te contacto de sleepSharinApp"
          > */}
          <a
            href="https://www.google.com/intl/es-419/gmail/about/"
            target="blank"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </Contact>
    </Section>
  );
};

export default TextDetails;
