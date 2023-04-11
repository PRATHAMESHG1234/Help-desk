import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/layout/Navbar';
import Login from './components/pages/auth/login';
import Index from './components/pages/home/index.js';
import CreateTicket from './components/pages/tickets/createTicket';
import TicketDetail from './components/pages/tickets/ticketDetail';
import UsersPage from './components/pages/users/Userpage';
import TicketsPage from './components/pages/tickets/TicketsPage';
import { Provider, useDispatch } from 'react-redux';
import Alert from './components/pages/Alert/Alert';
import Register from './components/pages/addusermodal/Register';
import store from './redux/store/configureStore';
import { loadUser } from './redux/actions/auth';

const { Content } = Layout;
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Alert />

          <Routes>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/*' element={<MainLayout />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

function MainLayout() {
  const token = localStorage.getItem('token');
  const isLoggedIn = token ? true : false;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn !== true) {
      navigate('/auth/login');
    } else if (isLoggedIn === true) {
      navigate('/');
      dispatch(loadUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Layout>
      {isLoggedIn && <Sidebar />}
      <Content style={{ paddingLeft: '100px', marginTop: '70px' }}>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/myTickets' element={<TicketsPage />} />
          <Route path='/tickets/createTicket' element={<CreateTicket />} />
          <Route path='/tickets/ticketdetail' element={<TicketDetail />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/auth/signup' element={<Register />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
