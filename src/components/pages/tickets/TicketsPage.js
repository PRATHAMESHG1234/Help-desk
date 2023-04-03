import React, { useState } from 'react';
import { Layout } from 'antd';
import styles from '../../../styles/index';
import TicketComponent from './index';

const { Content } = Layout;

const TicketsPage = () => {
  const [activeTab, setActiveTab] = useState('Open');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const data = [
    {
      key: '1',
      ticket_ID: '001',
      createdBy: 'part@gmail.com',
      ticket_summary: 'Need help with account',
      status: 'Open',
      assigned_to: 'John Doe',
      date_submitted: '2022-01-01',
    },
    {
      key: '2',
      ticket_ID: '002',
      createdBy: 'part@gmail.com',
      ticket_summary: 'Unable to login',
      status: 'Open',
      assigned_to: 'Jane Doe',
      date_submitted: '2022-01-02',
    },
    {
      key: '3',
      ticket_ID: '003',
      createdBy: 'part@gmail.com',
      ticket_summary: 'Request for a feature',
      status: 'In Progress',
      assigned_to: 'Jack Smith',
      date_submitted: '2022-01-03',
    },
    {
      key: '3',
      ticket_ID: '003',
      createdBy: 'part@gmail.com',
      ticket_summary: 'Request for a feature',
      status: 'Closed',
      assigned_to: 'Jack Smith',
      date_submitted: '2022-01-03',
    },
  ];

  let all = data.length;
  let open = 0;
  let closed = 0;
  let inProgress = 0;

  all = data.length;
  open = data.filter((ticket) => ticket.status === 'Open').length;
  closed = data.filter((ticket) => ticket.status === 'Closed').length;
  inProgress = data.filter((ticket) => ticket.status === 'In Progress').length;

  const filteredData = data.filter((ticket) => ticket.status === activeTab);
  return (
    <Layout className={`${styles.default.ticketsLayout}`}>
      <ul className='nav nav-tabs '>
        <li className='nav-item'>
          <button
            className={`${styles.default.ticketsTopBarButtonWhite} ${styles.default.active}`}
            onClick={() => handleTabClick('')}
          >
            All Tickets{'(' + all + ')'}
          </button>
        </li>
        <li className='nav-item '>
          <button
            className={`${styles.default.ticketsTopBarButtonWhite} ${
              activeTab === 'Open' ? styles.default.active : ''
            }`}
            onClick={() => handleTabClick('Open')}
          >
            Open Tickets{'(' + open + ')'}
          </button>
        </li>
        <li className='nav-item '>
          <button
            className={`${styles.default.ticketsTopBarButtonWhite} ${
              activeTab === 'Closed' ? styles.default.active : ''
            }`}
            onClick={() => handleTabClick('Closed')}
          >
            Closed Tickets{'(' + closed + ')'}
          </button>
        </li>
        <li className='nav-item '>
          <button
            className={`${styles.default.ticketsTopBarButtonWhite} ${
              activeTab === 'In Progress' ? styles.default.active : ''
            }`}
            onClick={() => handleTabClick('In Progress')}
          >
            In Progress Tickets{'(' + inProgress + ')'}
          </button>
        </li>
      </ul>

      <Content>
        <TicketComponent data={activeTab ? filteredData : data} />
      </Content>
    </Layout>
  );
};

export default TicketsPage;
