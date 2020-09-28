import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root';
import App from './App';

const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
