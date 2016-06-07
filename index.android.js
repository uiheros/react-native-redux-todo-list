import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './app/reducers';
import Tasks from './app/Tasks';
import theme from './app/themes/default';

const store = createStore(todoApp);

class AndroidApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tasks theme={theme}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTodoList', () => AndroidApp);
