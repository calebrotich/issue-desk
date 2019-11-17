import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import loginUser from '../actions/loginUser';
import { withRouter } from 'react-router-dom';
import Intro from './Intro';
import axiosConfig from '../config/axios';
import '../css/Login.css';
import '../css/Home.css';

const Login = ({ loginUser, user, history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  if(user.password || localStorage.token) {
    localStorage.setItem('username', user.user.email);
    history.push('/dashboard');
  }

  const getSearchData = (searchData) => {
    setSearchTerm(searchData);
    axiosConfig
    .get(`/issue_tracking/issues?query=${searchData}&status=2`)
    .then((res) => {      
      if (res) {
        setData(res.data);
      }
    })
    .catch(() => {
    });
  }

  return (
    <main>
      <Intro IntroMessage="Welcome back!" getSearchData={getSearchData} />
      {
        searchTerm !== '' ? (
          <section className="result-section">
          <span className="result-title">{`${data.length} result(s) for '${searchTerm}'`}</span>
          <div className="result-content">
            {
              data.map((result) => (
                <div className="result-card">
                  <span className="result-issue">{result.query_issue}</span>
                  <p>{result.action}</p>
                </div>
             ))
            }
          </div>
        </section>
        ) : (null)
      }
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

