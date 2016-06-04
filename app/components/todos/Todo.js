import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {todo, onTodoPress} = this.props;
    onTodoPress(todo.id);
  }

  renderButton() {
    if (this.props.todo.completed) {
      return <Icon name="check-circle" size={20} color="#999" />;
    } else {
      return <Icon name="circle-o" size={20} color="#999" />;
    }
  }

  render() {
    const {styles, todo} = this.props;
    const {title} = todo;

    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{title}</Text>
        <TouchableHighlight
          onPress={this.onPress}
          activeOpacity={75 / 100}
          style={styles.todoItemCompleteCheck}
          underlayColor={"rgb(210,210,210)"}>
          {this.renderButton()}
        </TouchableHighlight>
      </View>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  styles: PropTypes.object,
  onTodoPress: PropTypes.func.isRequired
};

export default Todo;
