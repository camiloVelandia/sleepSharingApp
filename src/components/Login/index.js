import React from 'react';
import { Section, Heading, Inputs, Submit, H3, Anchor } from './styles';

const Login = () => {
  return (
    <Section>
      <Heading>
        <h2>Inicia sesion</h2>
        <button>x</button>
      </Heading>
      <form action="">
        <Inputs>
          <input type="text" placeholder="Correo electronico" />
          <input type="text" placeholder="Contraseña" />
        </Inputs>
        <Submit type="submit" value="Iniciar sesion" />
      </form>
      <div>
        <H3>¿olvidaste tu contraseña?</H3>
        <Anchor href="">Enviar correo de recuperacion</Anchor>
        <H3>
          ¿No tienes una cuenta? <br /> Registrate
        </H3>
        <Anchor href="">Publicando una habitacion</Anchor>
        <Anchor href="">Buscando roomies</Anchor>
      </div>
    </Section>
  );
};

export default Login;
