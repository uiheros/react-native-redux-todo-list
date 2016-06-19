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
    const {styles} = this.props;
    if (this.props.todo.completed) {
      return <Icon name="check-circle" style={styles.todoItemCompleteTaskIcon} size={20} color="#999" />;
    } else {
      return <Icon name="circle-o" style={styles.todoItemCompleteTaskIcon} size={20} color="#999" />;
    }
  }

  render() {
    const {styles, todo} = this.props;
    const {title, createdAt, completedAt} = todo;

    return (
      <View style={styles.todoItem}>
        <TouchableHighlight
            onPress={this.onPress}
            activeOpacity={75 / 100}
            style={styles.todoItemCompleteTask}
            >
          {this.renderButton()}
        </TouchableHighlight>
        <View style={styles.todoItemDetails}>
          <Text style={styles.todoItemTitle}>{title}</Text>
          <Text style={styles.todoItemTimeStamp}>Created at: {createdAt.toGMTString()}</Text>
          {completedAt && <Text style={styles.todoItemTimeStamp}>Completed at: {completedAt.toGMTString()}</Text>}
        </View>
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
