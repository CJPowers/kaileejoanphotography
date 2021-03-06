import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './routes';
import initialState from './reducers/initialState';

//this accepts an initial state as a param, which is useful for initializing store with data  from server
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
