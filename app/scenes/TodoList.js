import NavigationBar from 'react-native-navbar';
import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import NewTodo from './NewTodo';
import Todos from '../components/todos/TodosContainer';
import Filter from '../components/todos/FilterContainer';

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
          statusBar={{tintColor: variables.colorNavBg, style: 'light-content'}}
          title={{ title: 'Tasks', }}
          rightButton={{ title: 'Add', handler: this.addNewTodo, tintColor: variables.colorNavbarText }}
          style={styles.navbar}
        />
        <ScrollView horizontal={false}>
          <Todos theme={theme} />
        </ScrollView>
        <Filter style={styles.filterItem} textStyle={styles.filterTextStyle} />
      </View>
    );
  }
}

TodoList.propTyeps = {
  theme: PropTypes.object
};

export default TodoList;
