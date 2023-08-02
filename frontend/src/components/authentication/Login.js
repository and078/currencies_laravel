import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogin } from '../../store/loginSlice';
import Calculator from '../Calculator'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Routes, useNavigate, redirect } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = useSelector((state) => state.login.user?.token);

  useEffect(() => {
      if (token) {
        console.log('navigate calc');
        return navigate('/calculator');
      }
    }, [token]);

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim().length && password.trim().length) {
      dispatch(fetchUserLogin({ email, password }));
      setUsername('');
      setPassword('');
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className='input-group mb-3'>
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-group mb-3'>
            <span className="input-group-text" id="basic-addon1">Password</span>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-secondary'>Login</button>
        </form>
      </div>

      <Routes>
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </>
  );
};

export default Login;
