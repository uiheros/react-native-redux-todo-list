import React, { PropTypes } from 'react';
import {
    Text,
    TouchableHighlight
} from 'react-native';

const Button = ({theme, disabled}) => {
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
};

Button.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func
};

export default Button;
