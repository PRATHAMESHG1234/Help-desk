import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { setAlert } from '../../../redux/actions/Alert';
import { Navigate } from 'react-router-dom';
import styles from '../../../styles/index';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = ({ isAuthenticated, login, setAlert }) => {
  const [formKey, setFormKey] = useState(0);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = formData;

  const handleInput = (event) => {
    console.log(event.target);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData);
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
    <Form
      name='login'
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: '360px',
        margin: '0 auto',
        padding: '24px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '6px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Login</h2>

      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
          name='username'
          prefix={<UserOutlined />}
          placeholder='Username'
          size='large'
          onChange={handleInput}
        />
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          name='password'
          prefix={<LockOutlined />}
          type='password'
          placeholder='Password'
          size='large'
          onChange={handleInput}
        />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={onSubmit}
          type='submit'
          style={{ width: '100%', backgroundColor: '#282A2C', color: '#fff' }}
          size='large'
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
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
