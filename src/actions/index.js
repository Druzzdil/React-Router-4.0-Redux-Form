
import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';

const ROOT_API = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=DUNE321'

export function fetchPosts(){
    const request = axios.get(`${ROOT_API}/posts${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}