const INITIAL_STATE = {
  user: {},
  favorite: [],
  error: '',
  body: [
    {
      _id: '5f05271fe189974896ee6537',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion confortable1',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '451000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
    {
      _id: '5f05274e636cdb48ec36d2ff',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion confortable1',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '450000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
    {
      _id: '5f05278086e4b94948abecfd',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion confortable1',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '450000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
    {
      _id: '5f0527bf8000f649792d23e0',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion confortable1',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '450000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
    {
      _id: '5f053df580a2735679761ac3',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion confortable1',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '450000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
    {
      _id: '5f053e3580a2735679761ac4',
      idHost: '5f0391f38dfb6836c3e11329',
      description: 'Habitacion 1000',
      tamanio: '45 m2',
      localidad: 'Usme',
      barrio: 'Un barrio',
      direccion: 'Carrera 7ma #65 - 34',
      precio: '450000',
      lugaresCercanos: 'Universidad Javeriana',
      mensajeAnfitrion: 'Un buen mensaje',
      estado: 'Disponible',
      ciudad: 'Bogota DC',
      fotografias: ['Foto1', 'Foto2', 'Foto3', 'Foto4', 'Foto5'],
      muebles: 'cama, silla, mesa pc',
      iconos: ['wifi', 'aire', 'aseo'],
    },
  ],
};


export default(state = INITIAL_STATE, action ) => {
  const exist = state.favorite.find(item => item._id === action.payload._id)
  switch (action.type) {
    case 'SET_FAVORITE':
    if (exist) return {...state}
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorite: state.favorite.filter(
          (items) => items._id !== action.payload
        )
      };
    default:
      return state;
  }
}