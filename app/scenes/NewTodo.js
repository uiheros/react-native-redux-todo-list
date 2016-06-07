import NavigationBar from 'react-native-navbar';
import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import {default as AddTodo} from '../components/add-todo';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.cancel = this.backToList.bind(this);
    this.done = this.backToList.bind(this);
  }

  backToList() {
    this.props.navigator.pop();
  }

  render() {
    const {theme} = this.props;
    const {styles, variables} = theme;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'New Task', tintColor: variables.colorTint }}
          leftButton={{ title: 'Cancel', handler: this.cancel, tintColor: variables.colorNavbarText }}
          style={styles.navbar}
        />
        <ScrollView horizontal={false}>
          <AddTodo onFinish={this.done} theme={theme} />
        </ScrollView>
      </View>
    );
  }
}

NewTodo.propTypes = {
  theme: PropTypes.object
};

export default NewTodo;
