import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/layout/Navbar';
import Login from './components/pages/auth/login';
import Index from './components/pages/home/index.js';
import CreateTicket from './components/pages/tickets/createTicket';
import TicketDetail from './components/pages/tickets/ticketDetail';
import UsersPage from './components/pages/users/Userpage';
import TicketsPage from './components/pages/tickets/TicketsPage';
import { Provider } from 'react-redux';
import Alert from './components/pages/Alert/Alert';
import Register from './components/pages/addusermodal/Register';
import store from './redux/store/configureStore';

const { Content } = Layout;

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Sidebar />

          <Layout>
            <Content style={{ paddingLeft: '100px', marginTop: '70px' }}>
              <Alert />
              <Routes>
                <Route path='/auth/login' element={<Login />} />

                <Route path='/' element={<Index />} />
                <Route path='/myTickets' element={<TicketsPage />} />
                <Route
                  path='/tickets/createTicket'
                  element={<CreateTicket />}
                />
                <Route
                  path='/tickets/ticketdetail/:id'
                  element={<TicketDetail />}
                />
                <Route path='/users' element={<UsersPage />} />

                <Route path='/auth/signup' element={<Register />} />
              </Routes>
            </Content>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
