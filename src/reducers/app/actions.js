import * as constants from './constants';

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
