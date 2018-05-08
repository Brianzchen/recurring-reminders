import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import note from './note';
import reminders from './reminders';

export default combineReducers({
  note,
  reminders,
  router: routerReducer,
});
