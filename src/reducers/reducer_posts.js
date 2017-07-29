import {FETCH_POST, SHOW_SINGLE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {} , action){
    switch (action.type) {
        case SHOW_SINGLE_POST:
            console.log('reducer', action.payload);
            //return {...state} - fetch all the props.data and put to new one that we return
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POST:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}