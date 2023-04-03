import React, { useState } from 'react';
import { Menu } from 'antd';
import { AiOutlineUsergroupAdd, AiOutlineUser } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
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
        navigate('myTickets');
        break;
      case '2':
        navigate('/');
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
  const alerts = useSelector((state) => state.alerts);
  // const handelclick = () => {
  //   navigate('/users');
  // };
  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        style={{ height: '80px' }}
      >
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
          collapsible
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
            <Menu.Item className={styles.default.menu_item} key='1'>
              <GiTicket className={styles.default.largeIcon} />
            </Menu.Item>
            <Menu.Item className={styles.default.menu_item} key='2'>
              <AiOutlineUser className={styles.default.largeIcon} />
            </Menu.Item>
            <Menu.Item className={styles.default.menu_item} key='3'>
              <AiOutlineUsergroupAdd
                className={styles.default.largeIcon}
                // onClick={handelclick}
              />
            </Menu.Item>

            <Menu.Item className={styles.default.menu_item} key='4'>
              <FiLogOut className={styles.default.largeIcon} />
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
