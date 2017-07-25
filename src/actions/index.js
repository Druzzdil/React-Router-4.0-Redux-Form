export const FETCH_POST = 'FETCH_POST';
import axios from 'axios';

export function fetchPosts(){
    return {
        type: FETCH_POST
    }
}