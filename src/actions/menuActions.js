import * as types from './actionTypes';
var config = '../../config.json';
import axios from 'axios';
import _ from 'underscore';

let serverString;
if(process.env.NODE_ENV === 'production'){
    serverString = ''
} else {
    serverString = 'http://localhost:3001'
}

export function toggleSuccess(response){
    return {type: types.TOGGLE_SUCCESS, response}
}

export function toggleHamburger(response) {
    return function(dispatch) {
        dispatch(toggleSuccess(response))
    }
}

export function increment(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        dispatch(incrementSuccess(counter));
    }
}

export function decrement(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        dispatch(decrementSuccess(counter));
    }
}
