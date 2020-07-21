const INITIAL_STATE = {
  body: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ROOMS':
      return {
        ...state,
        body: action.payload,
      };
      default:
        return state;
  }
}