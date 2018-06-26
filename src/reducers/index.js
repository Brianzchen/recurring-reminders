import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import note from './note';
import reminders from './reminders';
import todo from './todo';

export default combineReducers({
  app,
  note,
  reminders,
  router: routerReducer,
  todo,
});
