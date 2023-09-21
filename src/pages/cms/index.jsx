import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
EditOutlined ,
  FileAddOutlined,
MinusCircleOutlined ,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import Form from '../../components/form'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            // {
            //   key: '1',
            //   icon: <UserOutlined />,
            //   label:  <Link to="login">Thông Tin</Link>,
             
            // },
            {
              key: '1',
              icon: <UserOutlined />,
              label:  <Link to="all">danh sách sản phẩm</Link>,
             
            },
            {
              key: '2',
              icon: <FileAddOutlined />,
              label: <Link to="create">Thêm Sản Phẩm</Link>,
            },
            // {
            //   key: '3',
            //   icon: <MinusCircleOutlined />,
            //   label:  <Link to="remove">Xóa Sản Phẩm</Link>,
            // },
            // {
            //   key: '4',
            //   icon: <EditOutlined />,
            //   label:  <Link to="edit">Chỉnh sửa Sản Phẩm</Link>,
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* <Form></Form> */}
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
