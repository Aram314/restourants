import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import Router from '../../routes';
import Breadcrumbs from '../Breadcrumbs';
import Basket from '../Basket';

import './style.scss';

const { Header, Content, Footer, Sider } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();
  const defaultSelectedKey = history.location.pathname === '/restaurants' ?
    '2' : history.location.pathname === '/cafes' ?
      '3' : '1';

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className="layout site-layout">
      <Sider className="basket-section" trigger={null} collapsible collapsed={collapsed}>
        <div className="basket-section-title">Your Basket</div>
        <Basket />
      </Sider>
      <Layout className="layout site-layout">
        <Header>
          <div className="navbar-left">
            <div className="logo-container" >
              <img src="/img/logo.png" alt="r&c" className="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultSelectedKey]}>
              <Menu.Item key="1"><Link to='/'>All</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/restaurants'>Restaurants</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/cafes'>Cafés</Link></Menu.Item>
            </Menu>
          </div>
          <div className="basket-container">
            <img
              onClick={toggle}
              className="basket-icon"
              src="/img/basket.png"
              alt="basket"
            />
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumbs />
          <div className="site-layout-content">
            <Router />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>R&C Design ©2020 Created by Me</Footer>
      </Layout>
     </Layout>
  )
}

export default MainLayout
