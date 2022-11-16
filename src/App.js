import { Modal } from 'antd';
import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Create from './components/create';
import Dashboard from './components/dashboard';
import History from './components/history';
import LogOut from './components/log_out';
import Orders from './components/orders';
import Products from './components/products';
import Sales from './components/sales';
import { LayOut, NavbarLeft, Component, Block } from './style';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [key, setKey] = useState(false);

  function log_out() {
    localStorage.setItem('dashboardStoreLogIn', 'false');
    navigate('/log-out');
    toggle();
  };

  function toggle() {
    setKey(p => !p);
  };

  return (
    <>
      {
        localStorage.getItem('dashboardStoreLogIn') == 'true' ?
          <LayOut>
            <NavbarLeft>
              <div className='name'><h1>Logo</h1></div>
              <div className='body'>
                <span className={location.pathname === '/' ? 'active' : ''} onClick={() => navigate('/')}>
                  <i className='bi bi-grid-fill' /><p>Dashboard</p>
                </span>
                <span className={location.pathname === '/orders' ? 'active' : ''} onClick={() => navigate('/orders')}>
                  <i className='bi bi-cart-fill' /><p>Orders</p>
                </span>
                <span className={location.pathname === '/products' ? 'active' : ''} onClick={() => navigate('/products')}>
                  <i className='bi bi-bag-fill' /><p>Products</p>
                </span>
                <span className={location.pathname === '/create' ? 'active' : ''} onClick={() => navigate('/create')}>
                  <i className='bi bi-plus-square-fill' /><p>Create</p>
                </span>
                <span className={location.pathname === '/history' ? 'active' : ''} onClick={() => navigate('/history')}>
                  <i className='bi bi-file-text-fill' /><p>History</p>
                </span>
              </div>
              <div className='foot'>
                <span onClick={toggle}>
                  <i className='bi bi-box-arrow-right' /><p>Log Out</p>
                </span>
              </div>
            </NavbarLeft>
            <Block>
              <Component>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/create' element={<Create />} />
                  <Route path='/history' element={<History />} />
                  <Route path='/sales' element={<Sales />} />
                </Routes>
              </Component>
            </Block>

            <Modal
              onOk={log_out}
              open={key}
              onCancel={toggle}
            >
              <h3>Do you want to exit the dashboard</h3>
            </Modal>

          </LayOut>
          : <LogOut />
      }
    </>
  );
}

export default App;