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
    const API ='https://jsonplaceholder.typicode.com/users'
        const response = fetch(API)
        .then(response => response.json())
        .then(data => console.log(data))
    dispatch({
        type: 'GET_ROOMS',
        payload: response,
    })
}