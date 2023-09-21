import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/authSlice';

export default function Login() { // Đổi tên component thành "Login" (viết hoa chữ đầu)
  const [userLogin, setUserLogin] = useState('admin');
  const [userLoginPass, setUserLoginPass] = useState(123);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleChangeUser = (event) => {
    if (event.target.name === 'username') {
      setUserLogin(event.target.value);
    }
    if (event.target.name === 'password') {
      setUserLoginPass(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username: userLogin, password: userLoginPass }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  console.log(localStorage.getItem('persist:root'));
  return (
    
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Đăng Nhập</h2>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>

      <form id="login-form" action="process-login.php" onSubmit={handleSubmit} method="POST">
        <label htmlFor="username">Tên người dùng:</label>
        <input type="text" value={userLogin} onChange={handleChangeUser} id="username" name="username" required />
        <br />
        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" value={userLoginPass} onChange={handleChangeUser} name="password" required />
        <br />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
}
