import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reminders from './reminders';

export default combineReducers({
  reminders,
  router: routerReducer,
});
