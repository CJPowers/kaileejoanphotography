import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function counterReducer(state=initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {counter: action.counter});
        case types.DECREMENT:
            return Object.assign({}, state, {counter: action.counter});
        case types.TOGGLE_SUCCESS:
            return Object.assign({}, state, {showHamburger: action.response});
        default:
            return state;
    }
}
