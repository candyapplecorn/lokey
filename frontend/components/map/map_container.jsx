import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Map from './map';
import { getEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(getEvents())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Map));
