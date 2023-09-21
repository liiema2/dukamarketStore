import React from 'react';
import { Form, Input, Button,Select,notification } from 'antd';
import { editProduct } from '../../services/api/product';
import { useState } from 'react';
const MyFormItemContext = React.createContext([]);
import { useParams } from 'react-router-dom';
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}



const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const App = () => {
  const [check,setCheck] =useState(false);
  const onFinish = async (values) => {
    const { nameProduct, price, img, category, discount } = values;
    const sold = 0;
    const rale = 0;
    const requestData = {
      name: nameProduct !== "" ? nameProduct : undefined,
      price: price !== "" ? price : undefined,
      category: category !== "" ? category : undefined,
      image: img !== "" ? img : undefined,
      rale,
      sold,
      discount,
    };
    try {
      const response = await editProduct(id, requestData);
  
      console.log("Sản phẩm đã sữ  thành công:", response);
      setCheck(true)
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
    }
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
      'Thêm sản phẩm thành công',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  const check1 =()=>{
    if(check) {
      openNotification();
      setCheck(false)
    }
   
  }
  const { id } = useParams()
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
     
        
          <MyFormItem name="id"  label="id sản phẩm" initialValue={id}>
            <Input disabled />
          </MyFormItem>
          <MyFormItem name="nameProduct" label="Tên sản phẩm">
            <Input />
          </MyFormItem>
          <MyFormItem name="price" label="giá sản Phẩm">
            <Input />
          </MyFormItem>
       
        <MyFormItem name="img" label="image">
          <Input />
        </MyFormItem>
        <Form.Item name="category" label="Select" >
          <Select>
            <Select.Option value="Consumer Electrics">Consumer Electrics</Select.Option>
            <Select.Option value="Phones & Accessorie">Phones & Accessorie</Select.Option>
            <Select.Option value="Computers & Technologies">Computers & Technologies</Select.Option>
            <Select.Option value="Books & Office">Books & Office</Select.Option>
            <Select.Option value="Sport & Outdoo">Sport & Outdoo</Select.Option>
            <Select.Option value="Chairs & Stools">Chairs & Stools</Select.Option>
       
          </Select>
        </Form.Item>
      
      <MyFormItem name="discount" label="giảm giá">
          <Input />
        </MyFormItem>
        {contextHolder}
      <Button type="primary" onClick={check1} htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default App;
