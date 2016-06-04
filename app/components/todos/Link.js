import React, { Component, PropTypes } from 'react';

import {
  Text,
  TouchableHighlight
} from 'react-native';

class Link extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onPress();
  }

  render() {
    const {theme, children} = this.props;
    const {styles} = theme;
    const linkTextStyle = [styles.linkText];
    const linkStyle = [styles.link];
    if (this.props.active) {
      linkTextStyle.push(styles.linkTextActive);
      linkStyle.push(styles.linkActive);
    }
    return (
      <TouchableHighlight
          onPress={this.handlePress}
          style={linkStyle}
          underlayColor={'rgba(0,0,0,0)'}
          activeOpacity={1}>
        <Text style={linkTextStyle}>{children}</Text>
      </TouchableHighlight>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  theme: PropTypes.object
};

export default Link;
