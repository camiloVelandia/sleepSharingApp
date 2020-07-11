const API = 'https://ssa-backend.herokuapp.com/api';

export default function register({
  firstName,
  lastName,
  email,
  password,
  celWpp,
  foto,
  typeUser,
}) {
  return fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      celWpp,
      foto,
      typeUser,
    }),
  }).then((res) => {
    if (!res.ok) throw new Error('response is not ok');
    return true;
  });
}
