const INITIAL_STATE = {
  user: {},
  favorite: [],
  body: [],
  roomsByLocation: [],
};

export default (state = INITIAL_STATE, action) => {
  const exist = state.favorite.find((item) => item._id === action.payload._id);
  switch (action.type) {
    case 'SET_FAVORITE':
      if (exist) return { ...state };
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorite: state.favorite.filter(
          (items) => items._id !== action.payload
        ),
      };
    case 'GET_ROOMS':
      return {
        ...state,
        body: action.payload,
      };
    case 'ROOMS_BY_LOCATION':
      const roomsByLocation = state.body.filter(rooms => rooms.localidad.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, roomsByLocation }
    default:
      return state;
  }
};
