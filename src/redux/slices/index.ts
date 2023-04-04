import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import home from './home';
import store from './store';

export const reducer = combineReducers({
  auth,
  home,
  store,
});
