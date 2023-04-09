import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { setAlert } from '../../../redux/actions/Alert';
import { Navigate } from 'react-router-dom';
import styles from '../../../styles/index';
import PropTypes from 'prop-types';

const Login = ({ isAuthenticated, login, setAlert }) => {
  const [formKey, setFormKey] = useState(0);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = formData;

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await login(username, password);
    setSubmitted(true);
    // Increment the key to force a re-render of the form component
    setFormKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    if (submitted && isAuthenticated === true) {
      // Only show the alert when submitted is true
      setAlert('Login successful!', 'success', 'green');
    } else if (submitted && isAuthenticated === false) {
      // Only show the alert when submitted is true
      setAlert('Invalid credentials', 'danger', 'red');
    }
  }, [submitted, isAuthenticated, setAlert]);
  if (isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <div className={`${styles.default.loginPage}`}>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={onSubmit}
        key={formKey}
      >
        <div className={`${styles.default.loginFormContainer}`}>
          <label>UserName</label>
          <input
            name='username'
            onChange={handleInput}
            type='text'
            placeholder='Enter Username'
          />
          <label>Password</label>
          <input
            name='password'
            onChange={handleInput}
            type='password'
            placeholder='Enter Password'
          />
          <button
            style={{ backgroundColor: '#282A2C', color: '#fff' }}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
