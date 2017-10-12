// import functions from session api util once the calls are figured out
// import * as ApiUtil from '../util/session_api_util'
import config from '../config';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// export const login = user => dispatch => (
//   ApiUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))))
// );
//
// export const logout = () => dispatch => (
//   ApiUtil.logout().then(user => (dispatch(receiveCurrentUser(null))))
// );
//
// export const fetchUser = (id) => (dispatch) => (
//   ApiUtil.fetchUser(id).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
// );
//
// export const updateUser = user => dispatch => (
//   ApiUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
// );

export function getUser(username, password){
  const ipAddress = config.ip;
  return fetch(`${ipAddress}/api/session`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
//   try {
//     const user = await fetch(`${ipAddress}/api/session`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         user: {
//           username: username,
//           password: password
//         }
//       })
//     });
//     var data = await user.json()
//
//     this.setState({ user: data })
// } catch (e) {
//   console.log(e)
//   throw e;
//   }
}
