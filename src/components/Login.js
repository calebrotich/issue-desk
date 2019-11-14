import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import loginUser from '../actions/loginUser';
import { withRouter } from 'react-router-dom';
import Intro from './Intro';
import '../css/Login.css';

const Login = ({ loginUser, user, history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const attemptLogin = () => {
    const loginCredentials = {
      email: values.email,
      password: values.password
    };
    loginUser(loginCredentials);
  }

  if(user.user.token || localStorage.token) {
    localStorage.setItem('username', user.user.email);
    localStorage.setItem('token', user.user.token);
    history.push('/dashboard');
  }

  return (
    <main>
      <Intro IntroMessage="Welcome back!" />
      <section className="login-section">
        <div>
          <form className="form-container" noValidate autoComplete="off">
          <TextField
            label="E-mail"
            value={values.email}
            onChange={handleChange('email')}
            className="text-field"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            className="text-field"
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
            variant="outlined"
            type="password"
          />
          <Button
           variant="filled"
           onClick={() => attemptLogin()}
           >
            Login
          </Button>
    </form>
        </div>
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  user: state.login,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(withRouter(Login));

