import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {SlideMenuStack} from './Router';
import {Provider} from 'react-redux';
import store from './redux/store';

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <SlideMenuStack/>
      </Provider>
    );
  }
}
