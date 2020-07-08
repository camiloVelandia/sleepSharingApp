import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducers'
import App from "./container/App";

const  initialState = {
  "user":{},
  "favorite":{},
  "error": "",
  "body": [
    {
      "_id": "5f05271fe189974896ee6537",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion confortable1",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f05274e636cdb48ec36d2ff",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion confortable1",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f05278086e4b94948abecfd",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion confortable1",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0527bf8000f649792d23e0",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion confortable1",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f053df580a2735679761ac3",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion confortable1",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f053e3580a2735679761ac4",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion 1000",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f053e8480a2735679761ac5",
      "idHost": "5f0391f38dfb6836c3e11329",
      "description": "Habitacion 2000",
      "tamanio": "45 m2",
      "localidad": "Usme",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f05404accfc975927fc281e",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 5000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f05418033c81e59bda0318d",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0541b2bdd52559f71c4a6e",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f054274d08abc5ae8a467ed",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0542ef43a2ca5b427fbd27",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f054384b564d65b937ccca8",
      "idHost": "5f054013ccfc975927fc281d",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0544b9d26b895c6afe6d10",
      "idHost": "5f053fe12b302758fd5084a3",
      "description": "Habitacion 6000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0544dad26b895c6afe6d11",
      "idHost": "5f053fe12b302758fd5084a3",
      "description": "Habitacion 7000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    },
    {
      "_id": "5f0544ead26b895c6afe6d12",
      "idHost": "5f053fe12b302758fd5084a3",
      "description": "Habitacion 8000",
      "tamanio": "45 m2",
      "localidad": "Chapinero",
      "barrio": "Un barrio",
      "direccion": "Carrera 7ma #65 - 34",
      "precio": "450000",
      "lugaresCercanos": "Universidad Javeriana",
      "mensajeAnfitrion": "Un buen mensaje",
      "estado": "Disponible",
      "ciudad": "Bogota DC",
      "fotografias": [
        "Foto1",
        "Foto2",
        "Foto3",
        "Foto4",
        "Foto5"
      ],
      "muebles": "cama, silla, mesa pc",
      "iconos": [
        "wifi",
        "aire",
        "aseo"
      ]
    }
  ]
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
