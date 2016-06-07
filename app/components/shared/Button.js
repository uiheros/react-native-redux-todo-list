import React, { PropTypes } from 'react';
import {
    Text,
    TouchableHighlight
} from 'react-native';

const Button = ({theme, disabled, children, onPress}) => {
  const {styles} = theme;
  const btnStyles = [styles.button];
  if (disabled) {
    btnStyles.push(styles.buttonDisabled);
  }

  return (
    <TouchableHighlight
        onPress={onPress}
        style={btnStyles}
        underlayColor="#a30000"
        activeOpacity={1}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func
};

export default Button;
