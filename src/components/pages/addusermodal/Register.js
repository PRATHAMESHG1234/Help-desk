import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Drawer, Form, Input, Select } from 'antd';
import styles from '../../../styles/index';
import { register } from '../../../redux/actions/auth';
import { setAlert } from '../../../redux/actions/Alert';

const { Option } = Select;

const Register = ({ visible, onClose, register }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    managementType: '',
  });

  const { firstName, lastName, email, managementType } = formData;

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then(() => {
        register(formData);
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Drawer
      title='Add User'
      open={visible}
      onClose={onClose}
      width={500}
      placement='right'
    >
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item
          name='firstName'
          label='First Name'
          rules={[{ required: true, message: 'Please enter a first name' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            placeholder=' Enter a first name here'
            name='firstName'
            value={firstName}
            onChange={handleInput}
          />
        </Form.Item>
        <Form.Item
          name='lastName'
          label='Last Name'
          rules={[{ required: true, message: 'Please enter a last name' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            placeholder=' Enter a last name here'
            name='lastName'
            value={lastName}
            onChange={handleInput}
          />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            placeholder='Enter Email ID'
            name='email'
            value={email}
            onChange={handleInput}
          />
        </Form.Item>
        <Form.Item
          name='managementType'
          label='Management Type'
          rules={[
            { required: true, message: 'Please select a management type' },
          ]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Select
            placeholder='Select a management type'
            name='managementType'
            value={managementType}
            onChange={(value) =>
              setFormData({ ...formData, managementType: value })
            }
          >
            <Option value='Customer'>Customer</Option>
            <Option value='Admin'>Admin</Option>
            <Option value='Agent'>Agent</Option>
            <Option value='Super Admin'>Super Admin</Option>
          </Select>
        </Form.Item>
        <div className={styles.default.submitbtncontainer}>
          <Form.Item>
            <button
              type='submit'
              class='btn'
              style={{ backgroundColor: '#282A2C', color: '#fff' }}
            >
              Submit
            </button>
          </Form.Item>
        </div>
      </Form>
    </Drawer>
  );
};

export default connect(null, { register, setAlert })(Register);
