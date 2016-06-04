import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text} from 'react-native';
import Button from '../shared/Button';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.save = this.save.bind(this);
  }

  save() {
    const {saveTodo, onFinish} = this.props;
    saveTodo(this.state.text);
    onFinish();
  }

  render() {
    const {theme} = this.props;
    const {styles, variables} = theme;
    const btnDisabled = this.state.text.trim().length === 0;
    
    return (
      <View style={styles.todoEditForm}>
        <TextInput
          style={styles.addTodoInput}
          placeholder={'Type a new task here'}
          placeholderTextColor={ variables.placeholderTextColor }
          onChangeText={(text) => {this.setState({text});}}
          onSubmitEditing={() => {this.setState({text: ''});}}
          value={(this.state && this.state.text) || ''}
        />

        <Button onPress={this.save} theme={theme} disabled={btnDisabled}>Save</Button>
      </View>
    );
  }
}

AddTodo.propTypes = {
  theme: PropTypes.object,
  saveTodo: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired
}

export default AddTodo;
