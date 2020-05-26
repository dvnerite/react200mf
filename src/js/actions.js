import axios from 'axios';

import {
MOVIE_REQUEST,
MOVIE_SEARCH,
MOVIE_SEARCH_DETAILS,
} from './constants';


export function movieRequest(inputValue) {
    return {
        type: MOVIE_REQUEST,
        payload: inputValue,
    };
}
export function movieSearch (inputValue) {
    return {
        type: MOVIE_SEARCH,
        payload: axios.get(`/movieInfo/${ inputValue }`)}
};

export function movieSearchDetails (id) {

return {
    type: MOVIE_SEARCH_DETAILS,
    payload: axios.get(`/movie/${ id }`)}
};