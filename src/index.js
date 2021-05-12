import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'  
// Provider Makes the Redux store available to all Nested components(notice the wrapped components below)
import { createStore, applyMiddleware, compose } from 'redux' 
/// createStore to set up your store, applyMiddleware enhancer in order to use Thunk, and compose to use enhancer for 3rd party options(Redux Dev Tools)
import reduxThunk from 'redux-thunk'

/// Import reducers Here

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // To allow access of Redux dev tools to your store

const store = createStore(    // initial Store Setup
  reducerName,                // Name of YOUR reducer
  composeEnhancers(applyMiddleware(reduxThunk))
)

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(           // Wrap all compoents with Provider component and store props to access your store in all nested components
  <Provider store={store}>    
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
