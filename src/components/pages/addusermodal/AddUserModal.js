import React from 'react';
import { Drawer, Form, Input, Select } from 'antd';
import styles from '../../../styles/index';

const { Option } = Select;

const AddUserDrawer = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(styles.default.submitbtncontainer);
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
          <Input placeholder=' Enter a first name here' />
        </Form.Item>
        <Form.Item
          name='lastName'
          label='Last Name'
          rules={[{ required: true, message: 'Please enter a last name' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder=' Enter a last name here' />
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
          <Input placeholder='Enter Email ID' />
        </Form.Item>
        <Form.Item
          name='contactNo'
          label='Contact Number'
          rules={[{ required: true, message: 'Please enter a contact number' }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder='Enter Contact No.' />
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

export default AddUserDrawer;
