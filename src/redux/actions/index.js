import { toJson } from "unsplash-js";
import { unsplash } from "../../api/unsplashAPI.js";
import dataHelper from "../../helper/dataHelper";


export const getPhotosRequest = () => {
  return {
    type: 'GET_PHOTO_REQUEST'
  }
}

export const getPhotosSuccess = (stock) => {
  return {
    type: 'GET_PHOTO_SUCCESS',
    stock: dataHelper(stock)
  }
}

export const getPhotosFailure = (errMsg) => {
  return {
    type: 'GET_PHOTO_FAILURE',
    errMsg
  }
}

export const likePhoto = (id) => {
  return {
    type: 'SET_LIKE',
    id
  }
}

export const unlikePhoto = (id) => {
  return {
    type: 'DELETE_LIKE',
    id
  }
}

export const setPhoto = (thisPage) => {
  return dispatch => {
    dispatch(getPhotosRequest())
    unsplash.photos.listPhotos(thisPage, 10, 'latest')
      .then(toJson)
      .then(stock => {
        dispatch(getPhotosSuccess(stock))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}

export const like = (id) => {
  return dispatch => {
    unsplash.photos.likePhoto(id)
      .then(() => {
        dispatch(likePhoto(id))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}

export const dislike = (id) => {
  return dispatch => {
    unsplash.photos.unlikePhoto(id)
      .then(() => {
        dispatch(unlikePhoto(id))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}