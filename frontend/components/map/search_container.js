import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { getEvent, createEvent } from '../../actions/event_actions';
import { getActivities } from '../../actions/activity_actions';
import Search from './search';

const mapStateToProps = state => ({
  events: asArray(state),
  activities: state.activities,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getEvent: (eventId) => dispatch(getEvent(eventId)),
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  getActivities: () => dispatch(getActivities()),
  createEvent: event => dispatch(createEvent(event))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
