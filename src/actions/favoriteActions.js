export const setFavorite = () => (dispatch) => {
    dispatch({
      type: 'SET_FAVORITE',
      payload:[],
    })
  };

export const deleteFavorite = () => (dispatch) => {
  dispatch({
    type: 'DELETE_FAVORITE',
    payload:[],
  })
};



