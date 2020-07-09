const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
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

export default reducer;
