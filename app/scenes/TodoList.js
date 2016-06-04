import NavigationBar from 'react-native-navbar';
import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import NewTodo from './NewTodo';
import VisibleTodoList from '../components/todos/VisibleTodoList';
import Filters from '../components/todos/Filters';

class TodoList extends Component {
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
    const {theme} = this.props;
    const {styles, variables} = theme;

    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Tasks', tintColor:  variables.colorTint }}
          rightButton={{ title: 'Add', handler: this.addNewTodo, tintColor: variables.colorNavbarText }}
          style={styles.navbar}
        />
        <Filters theme={theme} />
        <ScrollView horizontal={false}>
          <VisibleTodoList theme={theme} />
        </ScrollView>
      </View>
    );
  }
}  
  
TodoList.propTyeps = {
  theme: PropTypes.object
}

export default TodoList;
