import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { themeable } from '../themes';
import { toggleTodo, setVisibilityFilter } from '../actions';
import Todos from '../components/Todos';
import Filter from '../components/Filter';
import NewTodo from './AddTodoScene';

class TodoListScene extends Component {
  constructor(props) {
    super(props);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo() {
    this.props.navigator.push({
      component: NewTodo
    });
  }

  render() {
    const {
      todos,
      style,
      navBarStyle,
      statusBarTintColor,
      statusBarStyle,
      navBarBtnTextColor,
      onFilterPress,
      onTodoPress,
      activeOnly
    } = this.props;

    return (
      <View style={style}>
        <NavigationBar
          statusBar={{tintColor: statusBarTintColor, style: statusBarStyle}}
          title={{ title: 'Tasks' }}
          rightButton={{ title: 'Add', handler: this.addNewTodo, tintColor: navBarBtnTextColor }}
          style={navBarStyle}
        />
        <ScrollView horizontal={false}>
          <Todos todos={todos} onTodoPress={onTodoPress}/>
        </ScrollView>
        <Filter activeOnly={activeOnly} onPress={onFilterPress} />
      </View>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeOnly: state.visibilityFilter === 'SHOW_ACTIVE'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoPress: (id) => {
      dispatch(toggleTodo(id));
    },
    onFilterPress: (activeOnly) => {
      const filter = activeOnly ? 'SHOW_ACTIVE' : 'SHOW_ALL';
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const TodoListSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListScene);

const ThemableTodoListScene = themeable(TodoListSceneContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText,
    filterStyle: styles.filterItem,
    filterTextStyle: styles.filterTextStyle
  };
});

export default ThemableTodoListScene;
