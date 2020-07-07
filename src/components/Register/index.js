import React from 'react';
import {
  Section,
  H1,
  H2,
  FormGroup1,
  Button,
  FormField,
  FormGroup2,
  Photo,
  PhotoButton,
  PhotoContainer,
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
        <PhotoContainer>
          <Photo>
            <label htmlFor="upload-photo">
              <i className="fas fa-camera" />
            </label>
            <input type="file" name="photo" id="upload-photo" />
          </Photo>
          <input type="submit" value="Cargar imagen" />
        </PhotoContainer>
        <Button>
          <input type="submit" value="Registrarse" />
        </Button>
      </form>
    </Section>
  );
};

export default Register;
