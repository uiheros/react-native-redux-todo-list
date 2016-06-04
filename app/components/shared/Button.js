import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {theme, disabled} = this.props;
    const {styles} = theme;
    
    const btnStyles = [styles.button];
    if (disabled) {
      btnStyles.push(styles.buttonDisabled);
    }
    
    return (
      <TouchableHighlight
          onPress={this.props.onPress}
          style={btnStyles}
          underlayColor="#a30000"
          activeOpacity={1}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func
};

export default Button;
