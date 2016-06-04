import React, { Component, PropTypes } from 'react';
import { View, ListView, Text } from 'react-native';
import Todo from './Todo';

const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1.id !== row2.id,
});

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
    this.renderSeparator = this.renderSeparator.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderSeparator(sectionID, rowID) {
    const {styles} = this.props.theme;
    return <View key={`${sectionID}-${rowID}`} style={styles.separator} />;
  }

  renderRow(todo) {
    const {theme, onTodoPress} = this.props;
    const {styles} = theme;
    return <Todo todo={todo} onTodoPress={onTodoPress} styles={styles} />;
  }

  updateDataSource(todos) {
    this.setState({
      dataSource: ds.cloneWithRows(todos)
    });
  }

  componentWillReceiveProps(newProps) {
    this.updateDataSource(newProps.todos);
  }

  render() {
    const {styles} = this.props.theme;

    return (
      <View>
        <View style={styles.todoHeader}>
          <Text style={styles.todoHeaderTask}>Tasks</Text>
          <Text style={styles.todoHeaderCompleted}>Completed?</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}

Todos.propTypes = {
  theme: PropTypes.object,
  todos: PropTypes.array.isRequired 
}

export default Todos;
