
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



