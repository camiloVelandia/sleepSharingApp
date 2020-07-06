import React from 'react';
import {
  Form,
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
    <Form>
      <H1>Registrar un nuevo inmueble</H1>
      <Container>
        <SubHeading>Acerca de la zona</SubHeading>
        <InputContainer>
          <select name="" id="">
            <option value="value1">Bogota</option>
          </select>
          <input type="text" placeholder="Direccion" />
          <input type="text" placeholder="Barrio" />
          <select name="" id="">
            <option value="value1">Engativa</option>
          </select>
          <input type="text" placeholder="Tamaño em mts2" />
          <input type="text" placeholder="Precio" />
        </InputContainer>
        <TextArea>
          <label htmlFor="">
            Describe con detalle el lugar
            <textarea
              placeholder="Describe con detalle el lugar"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <label htmlFor="">
            Describe los muebles con que cuenta el lugar
            <textarea
              placeholder="Describe los muebles con que cuenta el lugar"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </TextArea>
      </Container>
      <Container2>
        <Label>Agrega fotografias del lugar(minimo 2, maximo 8)</Label>
        <File>
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
          <label htmlFor="upload-photo">
            <i className="fas fa-camera" />
          </label>
          <input type="file" name="photo" id="upload-photo" />
        </File>
        <Label>servicios</Label>
        <ChecboxContainer>
          <Checkbox>
            <label>
              <i className="fas fa-wifi" />
              <span>wifi</span>
            </label>
            <input type="checkbox" name="" id="" />
          </Checkbox>
          <Checkbox>
            <label>
              <i className="fas fa-bath" />
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
              <i className="fas fa-dog" />
              <span>zona de fumadores</span>
            </label>
            <input type="checkbox" name="" id="" />
          </Checkbox>
          <Checkbox>
            <label>
              <i className="fas fa-warehouse" />
              <span>servicio de limpieza</span>
            </label>
            <input type="checkbox" name="" id="" />
          </Checkbox>
        </ChecboxContainer>
        <Label>Acerca de ti</Label>
        <TextArea2>
          <textarea
            placeholder="Deja un mensaje para que te conozcamos mejor"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </TextArea2>
      </Container2>

      <Submit>
        <input type="submit" value="Publicar" />
      </Submit>
    </Form>
  );
};

export default RegisterRoom;
