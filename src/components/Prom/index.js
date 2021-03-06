import React from 'react';
import { Section, Article, Wrapper} from './styles';

const Prom = () => {
  return (
    <Wrapper>
      <Section>
        <Article>
          <figure>
            <i className="fas fa-warehouse" />
          </figure>
          <p>La red de pisos compartidos mas grande del mundo</p>
        </Article>
        <Article>
          <figure>
            <i className="fas fa-money-bill-alt" />
          </figure>
          <p>Registrate gratis y de forma segura</p>
        </Article>
        <Article>
          <figure>
            <i className="fas fa-tv" />
          </figure>
          <p>
            contacta, entrevista y conoce roomies hasta encontrar tu match
            perfecto
          </p>
        </Article>
      </Section>
    </Wrapper>
  );
};

export default Prom;
