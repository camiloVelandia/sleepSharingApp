const INITIAL_STATE = {
  user: {},
  favorite: [],
};

export default (state = INITIAL_STATE, action) => {
  // const exist = state.favorite.find((item) => item._id === action.payload._id);
  switch (action.type) {
    case 'SET_FAVORITE':
      // if (exist) return { ...state };
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
    default:
      return state;
  }
};
