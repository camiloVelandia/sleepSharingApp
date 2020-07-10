const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
    const exist = state.favorite.find(item => item._id === action.payload._id)
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
};

export default reducer;
