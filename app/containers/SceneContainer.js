import React, { Component } from 'react';
import {
  Navigator,
  Image,
} from 'react-native';
import { themeable } from '../themes';
import TodoList from './TodoListScene';

class Navigation extends Component {
  configureScene() {
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {}
    };
  }

  renderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, { navigator, ...route.passProps });
    }
  }

  render() {
    const {mainBgImgStyle, mainBgImgSrc} = this.props;

    return (
      <Image style={mainBgImgStyle} resizeMode={'cover'} source={mainBgImgSrc}>
        <Navigator
          initialRoute={{name: 'List', component: TodoList}}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
        />
      </Image>
    );
  }
}

const ThemeableNavigation = themeable(Navigation, (theme) => {
  const { styles, variables } = theme;
  return {
    mainBgImgStyle: styles.mainBgImg,
    mainBgImgSrc: variables.mainBgImg
  };
});

export default ThemeableNavigation;
