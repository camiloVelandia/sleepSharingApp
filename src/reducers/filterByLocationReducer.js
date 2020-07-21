const INITIAL_STATE= {
  roomsByLocation: [],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'ROOMS_BY_LOCATION':
      const roomsByLocation = state.body.filter(rooms => rooms.localidad.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, roomsByLocation };
    default:
      return state;
  }

}