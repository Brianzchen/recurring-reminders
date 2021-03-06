import * as constants from './constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.HIDE:
      return {
        ...state,
        hidden: true,
      };
    case constants.SHOW:
      return {
        ...state,
        hidden: false,
      };
    case constants.SET_QUOTE:
      return {
        ...state,
        quote: action.payload.quote,
      };
    default:
      return state;
  }
};
