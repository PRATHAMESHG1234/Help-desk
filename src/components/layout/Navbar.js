import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  AiOutlineUsergroupAdd,
  AiOutlineUser,
  AiOutlineDashboard,
} from 'react-icons/ai';
import { FaAngleDown, FaCog, FaUserTie } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import { FiLock, FiLogOut, FiSettings, FiUsers } from 'react-icons/fi';
import shortLogo from './images/logo_short.png';
import styles from '../../styles/index';
import { a, Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import { useSelector } from 'react-redux';
import Alert from '../pages/Alert/Alert';

const SidebarComponent = ({ collapsed, setCollapsed }) => {
  const [selectedKey, setSelectedKey] = useState('1');
  const navigate = useNavigate();
  const handleClick = (e) => {
    setSelectedKey(e.key);
    switch (e.key) {
      case '1':
        navigate('/');
        break;
      case '2':
        navigate('myTickets');
        break;
      case '3':
        navigate('users');
        break;
      case '4':
        navigate('/logut');
        break;

      default:
        break;
    }
  };

  const user = useSelector((state) => state.auth.user);
  const managementType = user ? user.managementType : '';

  let menuItems = [
    {
      key: '1',
      icon: <AiOutlineDashboard className={styles.default.largeIcon} />,
    },
    { key: '2', icon: <GiTicket className={styles.default.largeIcon} /> },

    { key: '4', icon: <FiSettings className={styles.default.largeIcon} /> },
    { key: '5', icon: <FiLogOut className={styles.default.largeIcon} /> },
  ];

  if (managementType === 'Super Admin') {
    menuItems.splice(
      2,
      0,
      { key: '3', icon: <FiUsers className={styles.default.largeIcon} /> },
      { key: '7', icon: <FiLock className={styles.default.largeIcon} /> }
    );
  } else if (managementType === 'Admin' || managementType === 'Agent') {
    menuItems.splice(3, 0, {
      key: '6',
      icon: <FiUsers className={styles.default.largeIcon} />,
    });
  }

  // Render the menu items

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className={styles.default.navbar}>
          <Link className={styles.default.navbarBrand} to='#'>
            All Tickets
          </Link>
          <div className='ml-auto'>
            <div className={styles.default.userIcons}>
              <div className={styles.default.userIcon}>
                <i className='fa-regular fa-circle-user'></i>
              </div>

              <div className='dropdown'>
                <FaAngleDown
                  className={styles.default.userIcon}
                  id='userDropdown'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                />

                <div className='dropdown-menu' aria-labelledby='userDropdown'>
                  <Link className='dropdown-item' to='#'>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='#'>
                    Account Settings
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' to='#'>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.default.wbslider}${
          collapsed ? ` ${styles.default.collapsed}` : ''
        }`}
      >
        <div
          collapsible={true}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className={styles.default.sider}
        >
          <div className={styles.default.logoContainer}>
            <img src={shortLogo} alt='Logo' />
          </div>
          <Menu
            theme='filled'
            mode='inline'
            className={styles.default.menu}
            selectedKeys={[selectedKey]}
            onClick={handleClick}
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.key}
                className={`${styles.default.menu_item} ${
                  selectedKey === item.key
                    ? styles.default['custom-active']
                    : ''
                }`}
              >
                {item.icon}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
