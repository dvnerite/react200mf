import {
    MOVIE_REQUEST,
    MOVIE_SEARCH_PENDING,
    MOVIE_SEARCH_FULFILLED,
    MOVIE_SEARCH_REJECTED,
    MOVIE_SEARCH_DETAILS_PENDING,
    MOVIE_SEARCH_DETAILS_FULFILLED,
    MOVIE_SEARCH_DETAILS_REJECTED
  } from './constants';
  
  const defaultState = {
    inputValue: '',
    movieInfo: [],
    movie: [],
  };
  
  export default function reducers (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case MOVIE_REQUEST: {
          return {
            ...state,
            inputValue: payload,
          };
          }
        case MOVIE_SEARCH_PENDING: {
          return {
            ...state,
          };
        }
        case MOVIE_SEARCH_FULFILLED: {
          return {
            ...state,
            movieInfo: payload.data,
          }
        }
        case MOVIE_SEARCH_REJECTED: {
          return {
            ...state,
            status: 'Rejected',
            error: payload.data,
          };
        }
        case MOVIE_SEARCH_DETAILS_PENDING: {
          return {
            ...state,
          };
        }
        case MOVIE_SEARCH_DETAILS_FULFILLED: {
          console.log(payload, 'inside fulfilled reducer detailmoviesearch')
          return {
            ...state,
            movie: payload.data,
          }
        }
        case MOVIE_SEARCH_DETAILS_REJECTED: {
          return {
            ...state,
            status: 'Rejected',
            error: payload.data,
          };
        }
          default: {
            return state;
          }
      }
    };