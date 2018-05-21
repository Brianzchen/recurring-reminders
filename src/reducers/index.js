import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import note from './note';
import reminders from './reminders';
import todo from './todo';

export default combineReducers({
  note,
  reminders,
  router: routerReducer,
  todo,
});
