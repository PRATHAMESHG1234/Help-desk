import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { setAlert } from '../../../redux/actions/Alert';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Navigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const handleInput = (event) => {
    console.log(event.target);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Perform login logic
    const success = await login(username, password);
    console.log(success);
    if (success) {
      // If login is successful, set isAuthenticated to true
      setIsAuthenticated(true);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
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
              style={{
                width: '100%',
                backgroundColor: '#282A2C',
                color: '#fff',
              }}
              size='large'
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
