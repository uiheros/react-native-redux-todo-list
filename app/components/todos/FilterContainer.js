import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';
import Filter from './Filter';

const mapStateToProps = (state) => {
  return {
    activeOnly: state.visibilityFilter === 'SHOW_ACTIVE'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (activeOnly) => {
      const filter = activeOnly ? 'SHOW_ACTIVE' : 'SHOW_ALL';
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
