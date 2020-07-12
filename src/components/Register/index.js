import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';
import register from '../../services/register';
import Loader from '../../general/Sppiner';
import {
  Section,
  H1,
  H2,
  FormGroup1,
  Button,
  FormField,
  FormGroup2,
  Photo,
  PhotoContainer,
} from './styles';

const Register = () => {
  const [registered, setRegistered] = useState(false);
  if (registered) {
    return <Redirect from="/Register" to="/" />;
  }
  return (
    <Section>
      <H1>Por favor complete sus datos de registro</H1>
      <H2>
        <span>¿que deseas hacer?</span>
      </H2>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          celWpp: '',
          foto: '',
          typeUser: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = 'nombres es requerido';
          }
          if (!values.lastName) {
            errors.lastName = 'apellidos es requerido';
          }
          if (!values.celWpp) {
            errors.celWpp = 'numero de celular es requerido';
          } else if (values.celWpp.length < 10) {
            errors.celWpp = 'minimo 10 numeros';
          }
          if (!values.email) {
            errors.email = 'email es requerido';
          }
          if (!values.password) {
            errors.password = 'contraseña es requerido';
          }
          if (!values.foto) {
            errors.foto = 'foto es requerido';
          }
          if (!values.typeUser) {
            errors.typeUser = 'que deseas hacer es requerido';
          }
          if (values.password !== values.verificar){
            errors.password ='las contraseñas no son iguales';
          }
           return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          return register(values).then(() => {
            setRegistered(true);
          });
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <FormGroup1>
              <div>
                <label htmlFor="typeUser">buscar roomie</label>
                <Field
                  name="typeUser"
                  type="radio"
                  name="typeUser"
                  value="2"
                />
              </div>
              <div>
                <label htmlFor="typeUser">publicar habitacion</label>
                <Field
                  name="typeUser"
                  type="radio"
                  name="typeUser"
                  value="1"
                />
              </div>
              <span>{errors.typeUser}</span>
            </FormGroup1>
            <FormField>
              <FormGroup2>
                <label htmlFor="">
                  <Field name="firstName" type="text" placeholder="nombres" />
                </label>
                <span>{errors.firstName}</span>
              </FormGroup2>
              <FormGroup2>
                <label htmlFor="">
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="apellidos"
                  />
                </label>
                <span>{errors.lastName}</span>
              </FormGroup2>
              <FormGroup2>
                <label htmlFor="">
                  <Field
                    name="celWpp"
                    type="text"
                    placeholder="Numero de celular"
                  />
                </label>
                <span>{errors.celWpp}</span>
              </FormGroup2>
              <FormGroup2>
                <label htmlFor="">
                  <Field name="email" type="email" placeholder="email" />
                </label>
                <span>{errors.email}</span>
              </FormGroup2>
              <FormGroup2>
                <label htmlFor="">
                  <Field
                    name="password"
                    type="password"
                    placeholder="contraseña"
                  />
                </label>
                {errors.password && <span>{errors.password}</span>}
              </FormGroup2>
              <FormGroup2>
                <label htmlFor="">
                  <Field 
                    name="verificar"
                    type="password" 
                    placeholder="verificar contraseña"
                  />
                </label>
              </FormGroup2>
            </FormField>
            <PhotoContainer>
              <Photo>
                <label htmlFor="upload-photo">
                  <i className="fas fa-camera" />
                </label>
                <Field
                  name="photo"
                  type="file"
                  name="foto"
                  id="upload-photo"
                />
              </Photo>
              <p>sube tu foto</p>
              <span>{errors.foto}</span>
            </PhotoContainer>
            <Button>
              <Field
                type="submit"
                disabled={isSubmitting}
                value="Registrarse"
              />
            </Button>
            {isSubmitting ? <Loader /> : ''}
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Register;
