import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ContactReducer from './components/redux/reducer/ContactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(ContactReducer, composeWithDevTools());
//here implementing redux without redux tools
//createStore to create the Store and the reducer function ContactReducer is called

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

