export const noAuth = () => {
  localStorage.removeItem('token');
  window.history.pushState({}, 'login', '/');
  window.location.reload();
};
