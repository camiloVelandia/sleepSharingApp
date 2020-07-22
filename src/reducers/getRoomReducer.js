const INITIAL_STATE = {
  body: [],
  roomsByLocation:[],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ROOMS':
      return {
        ...state,
        body: action.payload,
      };
    case 'ROOMS_BY_LOCATION':
    console.log(action.payload)
    const roomsByLocation = state.body.filter(rooms => rooms.localidad.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, roomsByLocation};
      default:
        return state;
  }
}