import React from 'react';
import reactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

reactDOM.render(

  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)
