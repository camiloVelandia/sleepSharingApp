import React from 'react';
import { Formik, Form, Field } from 'formik';
import newRoom from '../../services/newRoom';
import Loader from '../../general/Sppiner';

import {
  Submit,
  H1,
  Container,
  SubHeading,
  InputContainer,
  TextArea,
  Label,
  Container2,
  File,
  Checkbox,
  ChecboxContainer,
  TextArea2,
} from './styles';

const RegisterRoom = () => {
  return (
    <Formik
      initialValues={{
        idHost: '1sasdasd56dsa54',
        description: '',
        tamanio: '',
        localidad: '',
        barrio: '',
        direccion: '',
        precio: '',
        lugaresCercanos: '',
        mensajeAnfitrion: '',
        estado: '',
        ciudad: '',
        fotografias: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTJ2DIWbZJI1h_C8oYFfxyOX1lj9PGjLERAQ&usqp=CAU',
          'https://s3.amazonaws.com/imagenes.fincaraiz.com.co/FC_COL/2018/08/06/3839078/casa-venta-atlantico-barranquilla-274592551.jpg',
          'https://images.ctfassets.net/8lc7xdlkm4kt/4sInYEGeWyztEJ9RQSIWgF/210cb7dcc3367bd5ef269436788ce4f7/lemont-casas-envigado-sala.jpg?w=1366&q=100',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYDkf-jhQgJqLW39kMUOXmlKjWpkalX7NDw&usqp=CAU',
        ],
        muebles: '',
        iconos: ['wifi', 'baño'],
      }}
      validate={(values) => {
        const errors = {};

        if (!values.description) {
          errors.description = 'descripcion es requerido';
        }
        if (!values.tamanio) {
          errors.tamanio = 'tamaño es requerido';
        }
        if (!values.localidad) {
          errors.localidad = 'localidad es requerido';
        }
        if (!values.barrio) {
          errors.barrio = 'barrio es requerido';
        }
        if (!values.direccion) {
          errors.direccion = 'direccion es requerido';
        }
        if (!values.precio) {
          errors.precio = 'precio es requerido';
        }
        if (!values.mensajeAnfitrion) {
          errors.mensajeAnfitrion = 'mensaje del anfitrion es requerido';
        }
        if (!values.ciudad) {
          errors.ciudad = 'ciudad es requerido';
        }
        if (!values.muebles) {
          errors.muebles = 'muebles es requerido';
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        return newRoom(values);
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <H1>Registrar un nuevo inmueble</H1>
          <Container>
            <SubHeading>Acerca de la zona</SubHeading>
            <InputContainer>
              <Field as="select" name="ciudad" placeholder="ciudad">
                <option value="" defaultValue disabled="disabled">
                  ciudad
                </option>
                <option value="Bogota">Bogotá</option>
              </Field>
              <span>{errors.ciudad}</span>
              <Field name="direccion" type="text" placeholder="Dirección" />
              <span>{errors.direccion}</span>
              <Field name="barrio" type="text" placeholder="Barrio" />
              <span>{errors.barrio}</span>
              <Field as="select" name="localidad" placeholder="localidad">
                <option value="" defaultValue disabled="disabled">
                  Seleccione
                </option>
                <option value="Antonio Nariño">Antonio Nariño</option>
                <option value="Barrios Unidos">Barrios Unidos</option>
                <option value="Bosa">Bosa</option>
                <option value="Chapinero">Chapinero</option>
                <option value="Ciudad Bolívar">Ciudad Bolívar</option>
                <option value="Fontibón">Fontibón</option>
                <option value="Kennedy">Kennedy</option>
                <option value="La Candelaria">La Candelaria</option>
                <option value="Los Mártires">Los Mártires</option>
                <option value="Puente Aranda">Puente Aranda</option>
                <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
                <option value="San Cristóbal">San Cristóbal</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Suba">Suba</option>
                <option value="Sumapaz">Sumapaz</option>
                <option value="Teusaquillo">Teusaquillo</option>
                <option value="Tunjuelito">Tunjuelito</option>
                <option value="Usaquén">Usaquén</option>
                <option value="Usme">Usme</option>
              </Field>
              <span>{errors.localidad}</span>

              <Field
                name="tamanio"
                type="text"
                placeholder="Tamaño em mts2"
              />
              <span>{errors.tamanio}</span>
              <Field name="precio" type="text" placeholder="Precio" />
              <span>{errors.precio}</span>
            </InputContainer>
            <TextArea>
              <label htmlFor="">
                Describe con detalle el lugar
                <Field
                  as="textarea"
                  placeholder="Describe con detalle el lugar"
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                />
                <span>{errors.description}</span>
              </label>
              <label htmlFor="">
                Describe los muebles con que cuenta el lugar
                <Field
                  as="textarea"
                  placeholder="Describe los muebles con que cuenta el lugar"
                  name="muebles"
                  id=""
                  cols="30"
                  rows="10"
                />
                <span>{errors.muebles}</span>
              </label>
            </TextArea>
          </Container>
          <Container2>
            <Label>Agrega fotografias del lugar(minimo 2, maximo 8)</Label>
            {/* <File>
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
              <label htmlFor="upload-photo">
                <i className="fas fa-camera" />
              </label>
              <Field type="file" name={'fotografias'} id="upload-photo" />
            </File> */}
            <Label>servicios</Label>
            {/* <ChecboxContainer>
              <Checkbox>
                <label>
                  <i className="fas fa-wifi" />
                  <span>wifi</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
              <Checkbox>
                <label>
                  <i className="fas fa-toilet" />
                  <span>baño privado</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
              <Checkbox>
                <label>
                  <i className="fas fa-warehouse" />
                  <span>parqueadero publico</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
              <Checkbox>
                <label>
                  <i className="fas fa-dog" />
                  <span>mascotas</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
              <Checkbox>
                <label>
                  <i className="fas fa-smoking" />{' '}
                  <span>zona de fumadores</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
              <Checkbox>
                <label>
                  <i className="fas fa-broom" />
                  <span>servicio de limpieza</span>
                </label>
                <input type="checkbox" name="" id="" />
              </Checkbox>
            </ChecboxContainer> */}

            <Label>Acerca de ti</Label>
            <TextArea2>
              <Field
                as="textarea"
                placeholder="Deja un mensaje para que te conozcamos mejor"
                name="mensajeAnfitrion"
                id=""
                cols="30"
                rows="10"
              />
              <span>{errors.mensajeAnfitrion}</span>
            </TextArea2>
          </Container2>

          <Submit>
            <Field type="submit" disabled={isSubmitting} value="Publicar" />
            {isSubmitting ? <Loader /> : ''}
          </Submit>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterRoom;
