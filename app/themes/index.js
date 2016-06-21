import { connect } from 'react-redux';
import {default as slateGray} from './default';

export const themes = {
  'slateGray': slateGray
};

export const themeable = (component, themeMapper) => {
  const mapStateToProps = (state) => {
    const theme = themes[state.theme];
    const props = themeMapper(theme);
    return {
      ...props
    };
  };

  const mapDispatchToProps = () => ({});

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
};
