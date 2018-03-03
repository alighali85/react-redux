import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore( myApp );

function render() {

    ReactDOM.render(
    <App store={ store }/>
    , 
    document.getElementById('root'));
}

store.subscribe( render )

render()



