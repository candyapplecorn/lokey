import { connect } from 'react-redux';
import { getInterests, deleteInterest } from '../../actions/interests_actions';
import asArray from '../../reducers/selectors';

const mapStateToProps = state => ({
  interests: asArray(state.interests),
});

const mapDispatchToProps = dispatch => ({
  getInterests: () => dispatch(getInterests()),
  deleteInterest: (activityId) => dispatch(deleteInterest({activityId}))
});

export default (connect(
  mapStateToProps,
  mapDispatchToProps
// )(InterestsList)); need to create this component still
