import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { getEvent } from '../../actions/event_actions';
import Search from './search';

const mapStateToProps = state => ({
  events: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  getEvent: (eventId) => dispatch(getEvent(eventId)),
  updateFilter: (bounds) => dispatch(updateFilter(bounds))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
