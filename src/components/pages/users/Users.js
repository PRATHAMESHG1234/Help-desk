import React, { useState } from 'react';
import { Table } from 'antd';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import { Space } from 'antd';
import { GrAdd } from 'react-icons/gr';
import styles from '../../../styles/index';
import { CiMenuKebab } from 'react-icons/ci';

import AddUserDrawer from '../addusermodal/AddUserModal';
import noUser from './noUser.png';
const Users = ({ data }) => {
  console.log(data);
  console.log(JSON.stringify(data));
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddUserClick = (e) => {
    setIsModalVisible(!isModalVisible);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalSubmit = (values) => {
    // handle form submission here
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'User ID',
      dataIndex: 'user_ID',
      key: 'user_ID',
    },
    {
      title: 'User Name',
      dataIndex: 'user_name',
      key: 'user_name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Space size='middle'>
          <CiMenuKebab />
        </Space>
      ),
    },
  ];

  return (
    <div className={`${styles.default.tickets}`}>
      {data.length ? (
        <div className={`${styles.default.ticketsContainer}`}>
          <div className={`${styles.default.ticketsTopBar}`}>
            <button className={`${styles.default.ticketsTopBarButtonWhite}`}>
              <BiSort /> Sort By
            </button>
            <button className={`${styles.default.ticketsTopBarButtonWhite}`}>
              <BiFilterAlt /> Filter By
            </button>
            <button
              onClick={handleAddUserClick}
              className={`${styles.default.ticketsTopBarButtonGray}`}
            >
              <GrAdd /> New User
            </button>
          </div>
          <div className='antd-table-container'>
            <Table
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
            />
          </div>
        </div>
      ) : (
        <div className={`${styles.default.noTicketsContainer}`}>
          <img src={noUser} alt='No Tickets' />
          <p className={`${styles.default.noTicketsTitle}`}>No Users Found</p>
          <p className={`${styles.default.noTicketsPara}`}>
            Please create a new user
          </p>
          <button onClick={handleAddUserClick}>+ New User</button>
        </div>
      )}
      <AddUserDrawer
        visible={isModalVisible}
        onClose={handleModalCancel}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Users;
