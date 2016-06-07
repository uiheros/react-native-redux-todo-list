import React, { Component, PropTypes } from 'react';
import {
  Navigator,
} from 'react-native';

import TodoList from './scenes/TodoList';

class Tasks extends Component {
  render() {
    const {theme} = this.props;
    return (
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
    );
  }
}

Tasks.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Tasks;
