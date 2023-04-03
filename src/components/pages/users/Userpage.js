import React, { useState } from 'react';
import { Layout } from 'antd';
import styles from '../../../styles/index'; // import your CSS file
import Users from './Users';

const { Content } = Layout;
console.log(styles.default.active);
const UsersPage = () => {
  const [activeRole, setActiveRole] = useState('Customer');

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  const data = [
    {
      key: '1',
      user_ID: '001',
      user_name: 'John Doe',
      role: 'Admin',
      email: 'johndoe@example.com',
    },
    {
      key: '2',
      user_ID: '002',
      user_name: 'Jane Doe',
      role: 'Customer',
      email: 'janedoe@example.com',
    },
    {
      key: '3',
      user_ID: '003',
      user_name: 'Jack Smith',
      role: 'Admin',
      email: 'jacksmith@example.com',
    },
  ];

  const filteredData = data.filter((user) => user.role === activeRole);
  console.log(activeRole);
  return (
    <Layout className={`${styles.default.usersLayout}`}>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <button
            className={`${styles.default.userButtonWhite} ${
              activeRole === 'Customer' ? styles.default.active : ''
            }`}
            onClick={() => handleRoleClick('Customer')}
          >
            Customers
          </button>
        </li>
        <li className='nav-item'>
          <button
            className={`${styles.default.userButtonWhite} ${
              activeRole === 'Admin' ? styles.default.active : ''
            }`}
            onClick={() => handleRoleClick('Admin')}
          >
            Admin
          </button>
        </li>
        <li className='nav-item'>
          <button
            className={`${styles.default.userButtonWhite} ${
              activeRole === 'Agent' ? styles.default.active : ''
            }`}
            onClick={() => handleRoleClick('Agent')}
          >
            Agent
          </button>
        </li>
      </ul>

      <Content>
        <Users data={activeRole ? filteredData : data} />
      </Content>
    </Layout>
  );
};

export default UsersPage;
