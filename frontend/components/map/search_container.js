import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import { updateBounds } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  benches: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
