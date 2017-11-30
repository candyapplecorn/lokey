import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import eventsReducer from './events_reducer';
import filtersReducer from './filters_reducer';
import activitiesReducer from './activities_reducer';
import interestReducer from './interests_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  events: eventsReducer,
  activities: activitiesReducer,
  filters: filtersReducer,
  interests: interestReducer
});

export default rootReducer;
