import React, { useEffect, useState } from 'react';
import { login, logout } from '../../../redux/actions/auth';
import { connect, useDispatch } from 'react-redux';
import { setAlert } from '../../../redux/actions/Alert';

import { Navigate } from 'react-router-dom';
import styles from '../../../styles/index';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { username, password } = formData;

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    login(username, password);
    dispatch(setAlert('Login successful!', 'success', 'green'));
  };

  //Redirect if logged in

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <div className={`${styles.default.loginPage}`}>
      <form className='form' action='create-profile.html' onSubmit={onSubmit}>
        <div className={`${styles.default.loginFormContainer}`}>
          <label>UserName</label>
          <input
            // value={payload.email}
            name='username'
            onChange={handleInput}
            type={'text'}
            placeholder='Enter Username'
          />
          <label>Password</label>
          <input
            // value={payload.password}
            name='password'
            onChange={handleInput}
            type={'password'}
            placeholder='Enter Password'
          />
          <button
            style={{ backgroundColor: '#282A2C', color: '#fff' }}
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
Login.prototype = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, login })(Login);
