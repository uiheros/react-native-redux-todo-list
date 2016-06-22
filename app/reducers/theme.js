import { SET_THEME } from '../actions';

const theme = (state = 'slateGray', action) => {
  switch (action.type) {
    case SET_THEME:
      return action.theme;
    default:
      return state;
  }
};

export default theme;
