import { combineReducers } from 'redux';
import {authMessage} from './authReducer';
import {messageReducer} from './message';

export default combineReducers({
  auth: authMessage,
  message: messageReducer,
});

