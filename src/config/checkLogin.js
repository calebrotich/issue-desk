const CheckLogin = () => {
  const token = localStorage.token;
  if(!token) window.location.replace('/login');
};

export default CheckLogin;
