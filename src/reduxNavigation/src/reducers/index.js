import { combineReducers } from 'redux';

import nav from './navigation';
import auth from './auth';
import group from './group';

const AppReducer = combineReducers({
  nav,
  auth,
  group
});

export default AppReducer;
