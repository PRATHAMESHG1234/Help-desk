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
import store from './redux/store/configureStore';
import Alert from './components/pages/Alert/Alert';
const { Content } = Layout;
function App() {
  console.log(store);
  return (
    <>
      <Provider store={store}>
        <Router>
          <Sidebar />

          <Alert />
          <Layout>
            <Content style={{ paddingLeft: '100px', marginTop: '70px' }}>
              <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/myTickets' element={<TicketsPage />} />
                <Route
                  exact
                  path='/tickets/createTicket'
                  element={<CreateTicket />}
                />
                <Route
                  exact
                  path='/tickets/ticketdetail'
                  element={<TicketDetail />}
                />
                <Route exact path='/auth/login' element={<Login />} />
                <Route exact path='/users' element={<UsersPage />} />
              </Routes>
            </Content>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
