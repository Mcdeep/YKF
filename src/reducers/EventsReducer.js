import { FETCH_EVENTS, SINGLE_EVENT } from '../actions';
const INITIAL_STATE = { all : [], event: null };

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
        case FETCH_EVENTS:
            return {...state, all: action.payload}
        case SINGLE_EVENT:
            return {...state, event: action.payload}
        default :
            return state;
    }
}
