/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import theme from './themes/default';
const {styles} = theme;
import todoApp from './reducers';
import TodoList from './scenes/TodoList';
let store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'List', component: TodoList}}
          configureScene={() => ({
            ...Navigator.SceneConfigs.PushFromRight,
            gestures: {},
          })}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator, theme, ...route.passProps });
            }
          }}
        />
      </Provider>
    );
  }
}

export default App;
