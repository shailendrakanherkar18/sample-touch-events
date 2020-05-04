import React from 'react';
import ReactDOM from 'react-dom';
import ReactNotification from 'react-notifications-component'

import './index.css';
import * as serviceWorker from './serviceWorker';
import { ListComponent } from './components/ListComponent';
// import TouchEventComponent from './TouchEventComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css'
import { PopoverComponent } from './components/PopoverComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <TouchEventComponent /> */}
    <ReactNotification />
    <ListComponent />
    <PopoverComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
