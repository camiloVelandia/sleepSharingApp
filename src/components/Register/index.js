import React from 'react';
import {
  Section,
  H1,
  H2,
  FormGroup1,
  Button,
  FormField,
  FormGroup2,
} from './styles';

const Register = () => {
  return (
    <Section>
      <H1>Por favor complete sus datos de registro</H1>
      <H2>
        <span>¿que deseas hacer?</span>
      </H2>
      <form action="">
        <FormGroup1>
          <div>
            <label htmlFor="user">buscar roomie</label>
            <input type="radio" name="user" value="1" />
          </div>
          <div>
            <label htmlFor="user">publicar habitacion</label>
            <input type="radio" name="user" value="2" />
          </div>
        </FormGroup1>
        <FormField>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="nombres" />
            </label>
          </FormGroup2>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="apellidos" />
            </label>
          </FormGroup2>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="Numero de celular" />
            </label>
          </FormGroup2>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="email" />
            </label>
          </FormGroup2>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="contraseña" />
            </label>
          </FormGroup2>
          <FormGroup2>
            <label htmlFor="">
              <input type="text" placeholder="verificar contraseña" />
            </label>
          </FormGroup2>
        </FormField>
        <Button>
          <input type="submit" value="Registrarse" />
        </Button>
      </form>
    </Section>
  );
};

export default Register;
