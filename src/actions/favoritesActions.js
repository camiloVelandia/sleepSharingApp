export const setFavorite = (payload) => (dispatch) => {
    dispatch({
        type: 'SET_FAVORITE',
        payload
    })
}

export const deleteFavorite = (payload) => (dispatch)=>{
    dispatch({
        type: 'DELETE_FAVORITE',
        payload
    })
}


export const getrooms = () => async (dispatch) => {
    const API ='https://ssa-backend.herokuapp.com/api/rooms'
        const response = await fetch(API);
        const data = await response.json();
    dispatch({
        type: 'GET_ROOMS',
        payload: data.body,
    })
}