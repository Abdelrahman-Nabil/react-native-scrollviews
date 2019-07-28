/*
AUTHOR: ABDELRAHMAN NABIL
LICENSE: FREE
*/
import React from 'react';
import Navigator from './navigation/Navigator'
import store from './redux/store'
import { Provider } from 'react-redux'
import { View } from 'react-native'

export default function App() {
  return (
    <Provider store = {store}>
      <View style = {{ flex: 1, marginTop: 26 }}>
        <Navigator />
      </View>
    </Provider>
  );
}
