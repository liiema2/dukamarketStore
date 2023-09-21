import React from 'react';
import { Form, Input, Button,notification } from 'antd';
import { deleteProduct } from '../../services/api/product'
import { useState } from 'react';
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const App = () => {
  const [check,setCheck] =useState(false);
  const onFinish = async (values) => {
    const { id } = values;
    
    try{
      const response = await deleteProduct(id);
  
      
      console.log("Sản phẩm đã xóa thành công:", response);
  setCheck(true)
    } catch (error) {
     
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
 
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
      'Xóa sản phẩm thành công',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  const check1 =  ()=>{
    if(check) {
       openNotification();
      setCheck(false)
    }
   
  }
 
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
     
        
          <MyFormItem name="id" label="Id sản phẩm">
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
