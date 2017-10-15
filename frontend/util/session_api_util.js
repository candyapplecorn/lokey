export const login = user => {
  const { username, password } = user; // Express compatibility
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user, username, password }
  })
};

export const signup = user => {
  const { username, password } = user; // Express compatibility
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user, username, password }
  })
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
