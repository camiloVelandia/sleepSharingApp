const API = 'https://ssa-backend.herokuapp.com/api';

export default function newRoom({
  idHost,
  description,
  tamanio,
  localidad,
  barrio,
  direccion,
  precio,
  lugaresCercanos,
  mensajeAnfitrion,
  // estado,
  ciudad,
  fotografias,
  muebles,
  iconos,
}) {
  return fetch(`${API}/rooms`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      idHost,
      description,
      tamanio,
      localidad,
      barrio,
      direccion,
      precio,
      lugaresCercanos,
      mensajeAnfitrion,
      // estado,
      ciudad,
      fotografias,
      muebles,
      iconos,
    }),
  }).then((res) => {
    if (!res.ok)
      throw (
        new Error('response is not ok') &&
        alert('algo salio mal, intenta mas tarde')
      );
    return true;
  });
}
