import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import theme from './theme';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  theme
});

export default todoApp;
