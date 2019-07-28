/*
AUTHOR: ABDELRAHMAN NABIL
LICENSE: FREE
*/
import React from 'react';
import Navigator from './navigation/Navigator'
import store from './redux/store'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store = {store}>
      <Navigator />
    </Provider>
  );
}
