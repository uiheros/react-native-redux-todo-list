import React, { Component, PropTypes } from 'react';

import {
  Text,
  TouchableHighlight
} from 'react-native';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(!this.props.activeOnly);
  }

  render() {
    const {style, textStyle, activeOnly} = this.props;
    const text = activeOnly ? 'Show Completed' : 'Show Active Only';

    return (
      <TouchableHighlight
          style={style}
          onPress={this.onPress}
          underlayColor='rgba(255,255,255, 0.5)'
          activeOpacity={1}>
        <Text style={textStyle}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

Filter.propTypes = {
  style: PropTypes.number,
  textStyle: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  activeOnly: PropTypes.bool.isRequired
};

export default Filter;
