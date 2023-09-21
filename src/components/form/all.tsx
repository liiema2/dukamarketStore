import React, { useState, useEffect } from 'react';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
  
} from '@ant-design/pro-components';

import { Link,Navigate } from 'react-router-dom';

import { Button, message, Space, Tabs, Tag,Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import request from 'umi-request';
import type {
  ProColumns,
  ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import { deleteProduct} from '../../services/api/product'

type ProductItem = {
  _id: string;
  name: string;
  image: string;
  sold: number;
  price: number;
  category: string;
  discount: number;
  __v: number;
};
const handleRemoveProduct = async (id:any) => {
  console.log(id)
  try {
    const response = await deleteProduct(id)  
      
    console.log("Sản phẩm đã xóa thành công:", response);
  } catch (error) {
    message.error('Lỗi khi xóa sản phẩm');
  }
  
}
const apiUrl = 'https://fe21-db.vercel.app/dukaMarket';

const columns: ProColumns<ProductItem>[] = [
  {
    title: 'ID',
    dataIndex: '_id',
    width: 64,
    valueType: 'indexBorder',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
    search: false,
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    filters: true,
    onFilter: true,
    valueType: 'money',
    renderText: (text) => `$${text}`,
   
  },
  {
    title: 'Danh mục',
    dataIndex: 'category',
    filters: true,
    onFilter: true,
    valueType: 'money',
    renderText: (text) => `$${text}`,
  },
  {
    title: 'Ưu đãi',
    dataIndex: 'discount',
    filters: true,
    onFilter: true,
    valueType: 'money',
    renderText: (text) => `$${text}`,
  },
  {
    title: 'Hành động',
    valueType: 'option',
    dataIndex: '_id',
    render: (text, row) => [
      // <a href={`https://yourwebsite.com/products/${row._id}`} key="show" target="_blank" rel="noopener noreferrer">
      //   Xem
      // </a>,
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
       
        <div onClick={()=>handleRemoveProduct(row._id)}>xóa</div>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={`/admin/edit/${row._id}`}> Chỉnh sửa </Link>
      </Menu.Item>
   
    </Menu>
    ],
  },
];

export default () => {
  const [type, setType] = useState('table');
  const [data, setData] = useState<ProductItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request<ProductItem[]>(apiUrl);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <ProCard>
   <Tabs activeKey={type}  onChange={(e) => setType(e)}>
  
  <Tabs.TabPane tab="table" key="table" />
  <Tabs.TabPane tab="form" key="form" />
  <Tabs.TabPane tab="descriptions" key="descriptions" />
</Tabs>
      {['table', 'form'].includes(type) && (
        <ProTable<ProductItem>
          columns={columns}
          type={type as 'table'}
          dataSource={data}
          pagination={{
            pageSize: 5,
          }}
          rowKey="_id"
          dateFormatter="string"
          headerTitle="Danh sách sản phẩm"
          toolBarRender={() => [
            <Button key="3" type="primary">
              <PlusOutlined />
              <Link to="/admin/create">Thêm</Link>
            </Button>,
          ]}
        />
      )}
     {type === 'descriptions' && data.length > 0 && (
  <ProDescriptions
    style={{
      background: '#fff',
    }}
    columns={columns as ProDescriptionsItemProps<ProductItem>[]}
    dataSource={data[0]}
  />
)}
    </ProCard>
  );
};
