import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { themeable } from '../themes';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.cancel = this.backToList.bind(this);
    this.done = this.backToList.bind(this);
    this.save = this.save.bind(this);
  }

  backToList() {
    this.props.navigator.pop();
  }

  save(text) {
    this.props.saveTodo(text);
    this.backToList();
  }

  render() {
    const {
      style,
      navBarStyle,
      statusBarTintColor,
      statusBarStyle,
      navBarBtnTextColor,
    } = this.props;

    return (
      <View style={style}>
        <NavigationBar
          statusBar={{tintColor: statusBarTintColor, style: statusBarStyle}}
          title={{ title: 'Add a new task' }}
          leftButton={{ title: 'Cancel', handler: this.cancel, tintColor: navBarBtnTextColor }}
          style={navBarStyle}
        />
        <ScrollView horizontal={false}>
          <AddTodo saveTodo={this.save} onFinish={this.done} />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
};

const NewTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(NewTodo);


const ThemableAddTodo = themeable(NewTodoContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText
  };
});

export default ThemableAddTodo;
