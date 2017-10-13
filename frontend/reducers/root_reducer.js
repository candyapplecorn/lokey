import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import eventsReducer from './events_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  events: eventsReducer
});

export default rootReducer;
