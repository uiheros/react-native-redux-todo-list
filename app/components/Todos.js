import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
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
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(todo) {
    const {onTodoPress} = this.props;
    return <Todo todo={todo} onTodoPress={onTodoPress} />;
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
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoPress: PropTypes.func.isRequired
};

export default Todos;
