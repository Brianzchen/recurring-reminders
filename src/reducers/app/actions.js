import * as constants from './constants';

export const bootstrap = () => (
  (dispatch, getState, { service }) => {
    service.getQuote().then(quote => {
      dispatch({
        type: constants.SET_QUOTE,
        payload: {
          quote,
        },
      });
    });
  }
);

export const hide = () => (
  (dispatch, getState, { service }) => {
    service.enableHiddenMode().then(() => {
      dispatch({
        type: constants.HIDE,
      });
    });
  }
);

export const show = () => (
  (dispatch, getState, { service }) => {
    service.disableHiddenMode().then(() => {
      dispatch({
        type: constants.SHOW,
      });
    });
  }
);
