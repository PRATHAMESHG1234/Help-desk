import React, { useState } from 'react';
import noTicket from '../images/noTicket.png';
import { Table, Space } from 'antd';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import { CiMenuKebab } from 'react-icons/ci';
import styles from '../../../styles/index'; // import your CSS file
import { Link, useNavigate } from 'react-router-dom';

const columns = [
  {
    title: 'Ticket ID',
    dataIndex: 'ticket_ID',
    key: 'ticket_ID',
    render: (text) => (
      <Link
        className={`${styles.default.ticketIdLink}`}
        to='/tickets/ticketdetail'
      >
        {text}
      </Link>
    ),
  },
  {
    title: 'createdBy',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    title: 'Ticket Summary',
    dataIndex: 'ticket_summary',
    key: 'ticket_summary',
  },
  {
    title: 'Assigned To',
    dataIndex: 'assigned_to',
    key: 'assigned_to',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date Submitted',
    key: 'date_submitted',
    dataIndex: 'date_submitted',
    render: (date) => <>{date}</>,
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

const TicketComponent = ({ data }) => {
  const navigate = useNavigate();
  const [rowSelection, setRowSelection] = useState([]);

  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    setRowSelection(selectedRows);
  };

  return (
    <div className={`${styles.default.tickets}`}>
      {data.length !== 0 ? (
        <div className={`${styles.default.ticketsContainer}`}>
          <div className={`${styles.default.ticketsTopBar}`}>
            <button className={`${styles.default.ticketsTopBarButtonWhite}`}>
              <BiSort /> Sort By
            </button>
            <button className={`${styles.default.ticketsTopBarButtonWhite}`}>
              <BiFilterAlt /> Filter By
            </button>
            <button
              onClick={() => navigate('/tickets/createticket')}
              className={`${styles.default.ticketsTopBarButtonGray}`}
            >
              <GrAdd /> New Ticket
            </button>
          </div>
          <div className='antd-table-container'>
            <Table
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: rowSelection.map((row) => row.key),
                onChange: handleRowSelection,
              }}
            />
          </div>
        </div>
      ) : (
        <div className={`${styles.default.noTicketsContainer}`}>
          <img src={noTicket} alt='No Tickets' />
          <p className={`${styles.default.noTicketsTitle}`}>No Tickets Found</p>
          <p className={`${styles.default.noTicketsPara}`}>
            Please submit your ticket request
          </p>
          <button onClick={() => navigate('/tickets/createTicket')}>
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketComponent;
