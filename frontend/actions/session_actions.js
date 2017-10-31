import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(u => (dispatch(receiveCurrentUser(u))),
<<<<<<< HEAD
  err => (dispatch(receiveErrors(err.responseJSON))))
=======
  err => (dispatch(receiveErrors(err.responseJSON)), err))
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(u => (
    dispatch(receiveCurrentUser(u))
<<<<<<< HEAD
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
=======
  ), err => {
    dispatch(receiveErrors(err.responseJSON));
    return err; // We must return the error object, not the action!
  })
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (dispatch(receiveCurrentUser(null))))
);
