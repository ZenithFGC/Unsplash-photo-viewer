const initialState = {
    data: [],
    thisPage: 1,
    isFetching: false,
    errMsg: null,
    detailPhoto: null,
  }
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PHOTO_REQUEST':
        return {
          ...state,
          isFetching: true,
          errMsg: null,
        }
      case 'GET_PHOTO_SUCCESS':
        return {
          ...state,
          data: [...state.data, ...action.stock],
          isFetching: false,
          errMsg: null,
          thisPage: state.thisPage + 1,
        }
      case 'GET_PHOTO_FAILURE':
        return {
          ...state,
          isFetching: false,
          errMsg: action.errMsg,
        }
      case 'SET_LIKE': {
        const stock = [...state.data]
        const indexLikedPhoto = stock.findIndex(el => {
          return el.id === action.id
        })
        stock[indexLikedPhoto].isLiked = true
        stock[indexLikedPhoto].likes++
        return {
          ...state,
          data: stock,
        } }
      case 'DELETE_LIKE': {
        const stock = [...state.data]
        const indexLikedPhoto = stock.findIndex(el => {
          return el.id === action.id
        })
        stock[indexLikedPhoto].isLiked = false
        stock[indexLikedPhoto].likes--
        return {
          ...state,
          data: stock,
        } }
      default:
        return state
    }
  }
  
  export default mainReducer