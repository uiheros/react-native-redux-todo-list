import React, { Component, PropTypes } from 'react';
import { View, } from 'react-native';
import FilterLink from './FilterLink';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {theme} = this.props;
    const {styles} = theme;
    return (
      <View style={styles.filtersContainer}>
        <FilterLink filter="SHOW_ACTIVE" theme={theme}>
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED" theme={theme}>
          Completed
        </FilterLink>
        <FilterLink filter="SHOW_ALL" theme={theme}>
          All
        </FilterLink>
      </View>
    );
  }
}

Filters.propTypes = {
  theme: PropTypes.object
};

export default Filters;
