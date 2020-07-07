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
            <option value="value1">Bogotá</option>
          </select>
          <input type="text" placeholder="Dirección" />
          <input type="text" placeholder="Barrio" />
          <select name="" id="">
            <option value="value1">Seleccione</option>
            <option value="value2">Antonio Nariño</option>
            <option value="value2">Barrios Unidos</option>
            <option value="value2">Bosa</option>
            <option value="value2">Chapinero</option>
            <option value="value2">Ciudad Bolívar</option>
            <option value="value2">Fontibón</option>
            <option value="value2">Kennedy</option>
            <option value="value2">La Candelaria</option>
            <option value="value2">Los Mártires</option>
            <option value="value2">Puente Aranda</option>
            <option value="value2">Rafael Uribe Uribe</option>
            <option value="value2">San Cristóbal</option>
            <option value="value2">Santa Fe</option>
            <option value="value2">Suba</option>
            <option value="value2">Sumapaz</option>
            <option value="value2">Teusaquillo</option>
            <option value="value2">Tunjuelito</option>
            <option value="value2">Usaquén</option>
            <option value="value2">Usme</option>
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
            />
          </label>
          <label htmlFor="">
            Describe los muebles con que cuenta el lugar
            <textarea
              placeholder="Describe los muebles con que cuenta el lugar"
              name=""
              id=""
              cols="30"
              rows="10"
            />
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
              <i className="fas fa-smoking" /> 
              {' '}
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
        </ChecboxContainer>
        <Label>Acerca de ti</Label>
        <TextArea2>
          <textarea
            placeholder="Deja un mensaje para que te conozcamos mejor"
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </TextArea2>
      </Container2>

      <Submit>
        <input type="submit" value="Publicar" />
      </Submit>
    </Form>
  );
};

export default RegisterRoom;
