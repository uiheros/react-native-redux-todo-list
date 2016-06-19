import React, { Component } from 'react';
import {
  Navigator,
  Image,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Theme is not required, I just want to try to provide different skins for the todo app
import theme from './themes/default';
import todoApp from './reducers';
import TodoList from './scenes/TodoList';

const store = createStore(todoApp);

class App extends Component {
  render() {
    const {styles, variables} = theme;

    return (
      <Provider store={store}>
        <Image style={styles.mainBgImg} resizeMode={'cover'} source={variables.mainBgImg}>

        <Navigator
          initialRoute={{name: 'List', component: TodoList}}
          configureScene={() => ({
            ...Navigator.SceneConfigs.VerticalDownSwipeJump,
            gestures: {},
          })}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator, theme, ...route.passProps });
            }
          }}
        />
        </Image>
      </Provider>
    );
  }
}

export default App;
