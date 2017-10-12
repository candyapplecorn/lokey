import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const submitForm = (formType === 'sign-in') ? login : signup;
  return {
    submitForm: user => dispatch(submitForm(user)),
    formType,
    logOut: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
